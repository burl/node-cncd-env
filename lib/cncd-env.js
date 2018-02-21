const cncdKnown = require('./cncd-known-variables');
const TheEnv = Symbol('the-env');
const envCache = new WeakMap();

let debug = false;

function genInfo(name) {
  const shortName = name.substring(3);
  name = shortName.toLowerCase().replace(/_+([\w])/g, (_, ch) => ch.toUpperCase());
  if (debug)
    console.error(`warning: found unknown CI variable '${name}' in environment (assuming string)`);
  return {
    name,
    type: 'string',
    desc: 'unknown',
  };
}

function toBoolean(value) {
  if (value === '' || value === null || value === undefined) return false;
  if (/^false|no|off|fail|failure|error|bad|0+$/i.test(value)) return false;
  if (/^true|yes|on|pass|passed|success|good|ok|\d+$/i.test(value)) return true;
  throw new Error(`value '${value}' can not be coerced as boolean, assume false`);
}

function coerce(value, type) {
  switch (type) {
  case 'boolean': return toBoolean(value);
  case 'number': return parseFloat(value);
  case 'timestamp': return new Date(parseFloat(value) * 1000);
  }
  return value;
}

function addEnv(fullName, value) {
  const info = cncdKnown[fullName] || genInfo.call(this, fullName);
  this[TheEnv][info.name] = coerce.call(this, value, info.type);
}

function parseEnv(env) {
  const res = {};
  for (const name of Object.keys(env)) {
    if (/^CI_/.test(name)) addEnv.call(this, name, env[name]);
  }
  return res;
}

class CncdEnv {
  constructor(useEnv = process.env) {
    if (!envCache.has(useEnv)) {
      envCache.set(useEnv, Object.assign({}, useEnv));
    }
    this[TheEnv] = {};
    parseEnv.call(this, envCache.get(useEnv));
    for (const name of Object.keys(this[TheEnv])) {
      this[name] = this[TheEnv][name];
    }
  }
  get vars() {
    return Object.assign({}, this[TheEnv]);
  }
  get knownVariables() {
    return Object.assign({}, cncdKnown);
  }
}

module.exports = function(...args) { return new CncdEnv(...args) };
module.exports.ciParse = module.exports;
module.exports.CncdEnv = CncdEnv;
module.exports.ciDebug = function(val) { debug = !!val };
