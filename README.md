# cncd-env - parse variables in cncd/pipeline environments

[![Build Status](https://travis-ci.org/burl/node-cncd-env.svg?branch=master)](https://travis-ci.org/burl/node-cncd-env) [![npm version](https://badge.fury.io/js/cncd-env.svg)](https://badge.fury.io/js/cncd-env) [![Coverage Status](https://coveralls.io/repos/github/burl/node-cncd-env/badge.svg?branch=master)](https://coveralls.io/github/burl/node-cncd-env?branch=master)


This package provies an API for parsing and validating the CI context
environment variables in a `cncd/pipeline` environment.  

## Installation

```shell
yarn add cncd-env
```

## Example

```javascript
const ciParse = require('cncd-env');
const { buildNumber, buildStarted, buildStatus } = ciParse().vars;
console.log(`buildNumber is ${buildNumber}`);

// or, if you wish:
const ci = ciParse();
console.log(`buildNumber is ${ci.buildNumber}`);

// and so forth...
```

## CI Environment Reference

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| buildCreated | timestamp | build create time |
| buildEvent | string | build event (push, pull_request, tag, ...) |
| buildFinished | timestamp | build finish time |
| buildLink | string | build result link |
| buildNumber | number | build number |
| buildStarted | timestamp | build start time |
| buildStatus | string | build status (success, failure) |
| buildTarget | string | build target |
| commitAuthor | string | author name |
| commitAuthorAvatar | string | commit author avatar url |
| commitAuthorEmail | string | commit author email |
| commitAuthorName | string | commit author name |
| commitBranch | string | commit branch |
| commitMessage | string | commit message |
| commitRef | string | commit ref |
| commitRefspec | string | commit ref spec |
| commitSha | string | commit sha |
| jobNumber | number | job number |
| parentBuildNumber | number | parent build number |
| prevBuildCreated | timestamp | build create time (previous build) |
| prevBuildEvent | string | build event (push, pull_request, tag, ...) (previous build) |
| prevBuildFinished | timestamp | build finish time (previous build) |
| prevBuildLink | string | build result link (previous build) |
| prevBuildNumber | number | build number (previous build) |
| prevBuildStarted | timestamp | build start time (previous build) |
| prevBuildStatus | string | build status (success, failure) (previous build) |
| prevCommitAuthor | string | author name (previous build) |
| prevCommitAuthorAvatar | string | commit author avatar url (previous build) |
| prevCommitAuthorEmail | string | commit author email (previous build) |
| prevCommitAuthorName | string | commit author name (previous build) |
| prevCommitBranch | string | commit branch (previous build) |
| prevCommitMessage | string | commit message (previous build) |
| prevCommitRef | string | commit ref (previous build) |
| prevCommitRefspec | string | commit ref spec (previous build) |
| prevCommitSha | string | commit sha (previous build) |
| remoteUrl | string | repository url |
| repo | string | repository name |
| repoLink | string | repository link |
| repoName | string | repository name |
| repoPrivate | boolean | repository is private |
| repoRemote | string | repository url |
| system | string | CI system |
| systemArch | string | CI system host architecture |
| systemHost | string | CI system host |
| systemLink | string | link to CI system |
| systemName | string | name of CI system |
| systemVersion | string | CI system version |

## License

View the [LICENSE](https://github.com/burl/node-cncd-env/blob/master/LICENSE) file
(MIT).
