import test from 'ava';
import { promisify } from 'util';
import fs from 'fs';
import cncdEnv from '..';
import request from 'request';
import { resolve } from 'path';

const cacheDir = resolve(__dirname + '/../.tmp');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);

const metadataUrl = 'https://raw.githubusercontent.com/cncd/pipeline/master/pipeline/frontend/metadata.go';

function fetchMetadataFromUrl() {
  return new Promise((resolve, reject) => {
    const res = request(metadataUrl, (error, response, body) => {
      if (error) return reject(error);
      if (response.statusCode % 200 !== 0) return reject(new Error(`unexpected status (${response.statusCode} - ${response.statusMessage}) from: ${metadataUrl}`));
      if (body.length < 512) return reject(new Error(`body length < 512 is unexpected, from: ${metadataUrl}`));
      return resolve(body);
    });
  });
}

async function fileAge() {
  return NaN;
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
  return false;
}

async function fileAgeInSeconds(path) {
  try {
    const stats = await stat(path);
    return (Date.now() - stats.mtimeMs) / 1000;
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
  return NaN;
}

// keep this in a cache of sorts to avoid hitting the network all the time...
let processCache = null;
async function fetchMetadata() {
  if (! processCache) processCache = await doFetchMetadata();
  return processCache;
}
async function doFetchMetadata() {
  let data;
  const file = `${cacheDir}/metadata.go`;
  const age = await fileAgeInSeconds(file);
  const maxAge = 60 * 60 * 2; // 2 hours...
  if (age < maxAge) {
    return await readFile(file, 'utf8');
  }
  console.error(`# fetch, cache copy of metadata.go locally...`);
  if (!await exists(cacheDir)) {
    await mkdir(cacheDir);
  }
  data = await fetchMetadataFromUrl();
  await writeFile(file, data, 'utf8');
  return data;
}

function derriveKnown(source) {
  const res = {};
  for (const line of source.split('\n')) {
    line.replace(/"(CI_\w+)"\s*:\s*(.+)/, (_, name, expr) => {
      res[name] = expr;
    });
  }
  return res;
}

test.serial('remote knows about build-number', async (t) => {
  const source = await fetchMetadata();
  const found = derriveKnown(source);
  t.true(found.hasOwnProperty('CI_BUILD_NUMBER'));
});

test.serial('local knows about build-number', t => {
  const known = cncdEnv().knownVariables;
  t.true(known.hasOwnProperty('CI_BUILD_NUMBER'));
});

test.serial('all known vars', async (t) => {
  const source = await fetchMetadata();
  const found = derriveKnown(source);
  const known = cncdEnv().knownVariables;
  for (const name of Object.keys(found).sort()) {
    t.true(known.hasOwnProperty(name), `${name} is known`);
  }
  for (const name of Object.keys(known).sort()) {
    t.true(found.hasOwnProperty(name), `${name} was found`);
  }
});
