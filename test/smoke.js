import test from 'ava';
import { ciParse, ciDebug } from '..';

test('cncd-known', t => {
  const known = ciParse().knownVariables;
  t.true(known.hasOwnProperty('CI_BUILD_NUMBER'), 'has buildNumber');
  t.true(known.CI_BUILD_NUMBER.name === 'buildNumber');
  t.true(typeof known.CI_BUILD_NUMBER.desc === 'string');
  t.true(known.CI_BUILD_NUMBER.type === 'number');
});

test('build-number', t => {
  const useEnv = {
    CI_BUILD_NUMBER: '20',
  };
  const { buildNumber: foo } = ciParse(useEnv).vars;
  t.true(foo === 20);
});

test('getter-build-number', t => {
  const useEnv = {
    CI_BUILD_NUMBER: '42',
  };
  const cncd = ciParse(useEnv);
  t.true(cncd.buildNumber === 42);
});

test.serial('unknown-ci-envvar, no debug', t => {
  const useEnv = {
    CI_BUILD_NUMBER: '42',
    CI_FOO_BAR: '42',
  };
  ciDebug(false);
  const cncd = ciParse(useEnv).vars;
  t.true(cncd.buildNumber === 42, 'known numeric coerced');
  t.true(cncd.fooBar === '42', 'unknown numeric not coerced');
});

test.serial('unknown-ci-envvar with debug', t => {
  const useEnv = {
    CI_FOO_BAR: '42',
  };
  ciDebug(true);
  const cncd = ciParse(useEnv).vars;
  t.true(cncd.fooBar === '42', 'unknown numeric not coerced');
});
