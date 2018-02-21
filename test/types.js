import test from 'ava';
import cncdEnv from '..';

test('boolean', t => {
  t.true((cncdEnv({CI_REPO_PRIVATE: "true"}).vars).repoPrivate === true, 'repoPrivate:true');
  t.true((cncdEnv({CI_REPO_PRIVATE: "false"}).vars).repoPrivate === false, 'repoPrivate:false');
  t.true((cncdEnv({CI_REPO_PRIVATE: "1"}).vars).repoPrivate === true, 'repoPrivate:true');
  t.true((cncdEnv({CI_REPO_PRIVATE: "0"}).vars).repoPrivate === false, 'repoPrivate:false');
  t.true((cncdEnv({CI_REPO_PRIVATE: "01"}).vars).repoPrivate === true, 'repoPrivate:true');
  t.true((cncdEnv({CI_REPO_PRIVATE: "00"}).vars).repoPrivate === false, 'repoPrivate:false');
  t.true((cncdEnv({CI_REPO_PRIVATE: "yes"}).vars).repoPrivate === true, 'repoPrivate:true');
  t.true((cncdEnv({CI_REPO_PRIVATE: "no"}).vars).repoPrivate === false, 'repoPrivate:false');
  t.true((cncdEnv({CI_REPO_PRIVATE: "Yes"}).vars).repoPrivate === true, 'repoPrivate:true');
  t.true((cncdEnv({CI_REPO_PRIVATE: "No"}).vars).repoPrivate === false, 'repoPrivate:false');
  t.true((cncdEnv({CI_REPO_PRIVATE: ""}).vars).repoPrivate === false, 'repoPrivate:empty-string(false)');
  t.throws(() => {
    cncdEnv({CI_REPO_PRIVATE: "foo"});
  }, 'value \'foo\' can not be coerced as boolean, assume false');
});

test('timestamp', t => {
  const expected = new Date(1514851200000);
  const ts = '1514851200';
  const { buildStarted } = cncdEnv({CI_BUILD_STARTED: ts}).vars;
  t.true(buildStarted instanceof Date, 'buildStarted is a date');
  t.true(expected.toUTCString() === 'Tue, 02 Jan 2018 00:00:00 GMT', 'expected as utc string');
  t.true(buildStarted.toUTCString() === 'Tue, 02 Jan 2018 00:00:00 GMT', 'buildStarted as utc date');
  t.true(buildStarted.toString() === expected.toString(), 'buildStarted(timeval)');
});
