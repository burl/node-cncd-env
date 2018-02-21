module.exports = {
  "CI_COMMIT_AUTHOR_AVATAR": {
    "name": "commitAuthorAvatar",
    "type": "string",
    "desc": "commit author avatar url"
  },
  "CI_REPO": {
    "name": "repo",
    "type": "string",
    "desc": "repository name"
  },
  "CI_JOB_NUMBER": {
    "name": "jobNumber",
    "type": "number",
    "desc": "job number"
  },
  "CI_PREV_COMMIT_AUTHOR_AVATAR": {
    "name": "prevCommitAuthorAvatar",
    "type": "string",
    "desc": "commit author avatar url (previous build)"
  },
  "CI_REMOTE_URL": {
    "name": "remoteUrl",
    "type": "string",
    "desc": "repository url"
  },
  "CI_PREV_COMMIT_AUTHOR_EMAIL": {
    "name": "prevCommitAuthorEmail",
    "type": "string",
    "desc": "commit author email (previous build)"
  },
  "CI_BUILD_NUMBER": {
    "name": "buildNumber",
    "type": "number",
    "desc": "build number"
  },
  "CI_PARENT_BUILD_NUMBER": {
    "name": "parentBuildNumber",
    "type": "number",
    "desc": "parent build number"
  },
  "CI_BUILD_CREATED": {
    "name": "buildCreated",
    "type": "timestamp",
    "desc": "build create time"
  },
  "CI_BUILD_STARTED": {
    "name": "buildStarted",
    "type": "timestamp",
    "desc": "build start time"
  },
  "CI_BUILD_FINISHED": {
    "name": "buildFinished",
    "type": "timestamp",
    "desc": "build finish time"
  },
  "CI_BUILD_STATUS": {
    "name": "buildStatus",
    "type": "string",
    "desc": "build status (success, failure)"
  },
  "CI_BUILD_EVENT": {
    "name": "buildEvent",
    "type": "string",
    "desc": "build event (push, pull_request, tag, ...)"
  },
  "CI_BUILD_LINK": {
    "name": "buildLink",
    "type": "string",
    "desc": "build result link"
  },
  "CI_BUILD_TARGET": {
    "name": "buildTarget",
    "type": "string",
    "desc": "build target"
  },
  "CI_COMMIT_SHA": {
    "name": "commitSha",
    "type": "string",
    "desc": "commit sha"
  },
  "CI_COMMIT_REF": {
    "name": "commitRef",
    "type": "string",
    "desc": "commit ref"
  },
  "CI_COMMIT_REFSPEC": {
    "name": "commitRefspec",
    "type": "string",
    "desc": "commit ref spec"
  },
  "CI_COMMIT_BRANCH": {
    "name": "commitBranch",
    "type": "string",
    "desc": "commit branch"
  },
  "CI_COMMIT_MESSAGE": {
    "name": "commitMessage",
    "type": "string",
    "desc": "commit message"
  },
  "CI_COMMIT_AUTHOR": {
    "name": "commitAuthor",
    "type": "string",
    "desc": "author name"
  },
  "CI_COMMIT_AUTHOR_NAME": {
    "name": "commitAuthorName",
    "type": "string",
    "desc": "commit author name"
  },
  "CI_COMMIT_AUTHOR_EMAIL": {
    "name": "commitAuthorEmail",
    "type": "string",
    "desc": "commit author email"
  },
  "CI_PREV_COMMIT_AUTHOR_NAME": {
    "name": "prevCommitAuthorName",
    "type": "string",
    "desc": "commit author name (previous build)"
  },
  "CI_PREV_BUILD_NUMBER": {
    "name": "prevBuildNumber",
    "type": "number",
    "desc": "build number (previous build)"
  },
  "CI_PREV_BUILD_CREATED": {
    "name": "prevBuildCreated",
    "type": "timestamp",
    "desc": "build create time (previous build)"
  },
  "CI_PREV_BUILD_STARTED": {
    "name": "prevBuildStarted",
    "type": "timestamp",
    "desc": "build start time (previous build)"
  },
  "CI_PREV_BUILD_FINISHED": {
    "name": "prevBuildFinished",
    "type": "timestamp",
    "desc": "build finish time (previous build)"
  },
  "CI_PREV_BUILD_STATUS": {
    "name": "prevBuildStatus",
    "type": "string",
    "desc": "build status (success, failure) (previous build)"
  },
  "CI_PREV_BUILD_EVENT": {
    "name": "prevBuildEvent",
    "type": "string",
    "desc": "build event (push, pull_request, tag, ...) (previous build)"
  },
  "CI_PREV_BUILD_LINK": {
    "name": "prevBuildLink",
    "type": "string",
    "desc": "build result link (previous build)"
  },
  "CI_PREV_COMMIT_SHA": {
    "name": "prevCommitSha",
    "type": "string",
    "desc": "commit sha (previous build)"
  },
  "CI_PREV_COMMIT_REF": {
    "name": "prevCommitRef",
    "type": "string",
    "desc": "commit ref (previous build)"
  },
  "CI_PREV_COMMIT_REFSPEC": {
    "name": "prevCommitRefspec",
    "type": "string",
    "desc": "commit ref spec (previous build)"
  },
  "CI_PREV_COMMIT_BRANCH": {
    "name": "prevCommitBranch",
    "type": "string",
    "desc": "commit branch (previous build)"
  },
  "CI_PREV_COMMIT_MESSAGE": {
    "name": "prevCommitMessage",
    "type": "string",
    "desc": "commit message (previous build)"
  },
  "CI_PREV_COMMIT_AUTHOR": {
    "name": "prevCommitAuthor",
    "type": "string",
    "desc": "author name (previous build)"
  },
  "CI_REPO_LINK": {
    "name": "repoLink",
    "type": "string",
    "desc": "repository link"
  },
  "CI_REPO_NAME": {
    "name": "repoName",
    "type": "string",
    "desc": "repository name"
  },
  "CI_REPO_PRIVATE": {
    "name": "repoPrivate",
    "type": "boolean",
    "desc": "repository is private"
  },
  "CI_REPO_REMOTE": {
    "name": "repoRemote",
    "type": "string",
    "desc": "repository url"
  },
  "CI_SYSTEM": {
    "name": "system",
    "type": "string",
    "desc": "CI system"
  },
  "CI_SYSTEM_ARCH": {
    "name": "systemArch",
    "type": "string",
    "desc": "CI system host architecture"
  },
  "CI_SYSTEM_HOST": {
    "name": "systemHost",
    "type": "string",
    "desc": "CI system host"
  },
  "CI_SYSTEM_LINK": {
    "name": "systemLink",
    "type": "string",
    "desc": "link to CI system"
  },
  "CI_SYSTEM_NAME": {
    "name": "systemName",
    "type": "string",
    "desc": "name of CI system"
  },
  "CI_SYSTEM_VERSION": {
    "name": "systemVersion",
    "type": "string",
    "desc": "CI system version"
  }
}
