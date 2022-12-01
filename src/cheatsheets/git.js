export default {
  kind: "root",
  title: "GIT CHEAT SHEET",
  columns: {
    horizontal: 3,
    vertical: 3,
  },
  items: [
    {
      kind: "section",
      title: "SETUP",
      description:
        "Configuring user information used across all local repositories",
      items: [
        {
          kind: "cheat",
          command: "git config --global user.name “[firstname lastname]”",
          description:
            "set a name that is identifiable for credit when review version history",
        },
        {
          kind: "cheat",
          command: "git config --global user.email “[valid-email]”",
          description:
            "set an email address that will be associated with each history marker",
        },
        {
          kind: "cheat",
          command: "git config --global color.ui auto",
          description:
            "set automatic command line coloring for Git for easy reviewing",
        },
      ],
    },
    {
      kind: "section",
      title: "SETUP & INIT",
      description:
        "Configuring user information, initializing and cloning repositories",
      items: [
        {
          kind: "cheat",
          command: "git init",
          description: "initialize an existing directory as a Git repository",
        },
        {
          kind: "cheat",
          command: "git clone [url]",
          description:
            "retrieve an entire repository from a hosted location via URL",
        },
      ],
    },
    {
      kind: "section",
      title: "STAGE & SNAPSHOT",
      description: "Working with snapshots and the Git staging area",
      items: [
        {
          kind: "cheat",
          command: "git status",
          description:
            "show modified files in working directory, staged for your next commit",
        },
        {
          kind: "cheat",
          command: "git add [file]",
          description: "add a file as it looks now to your next commit (stage)",
        },
        {
          kind: "cheat",
          command: "git reset [file]",
          description:
            "unstage a file while retaining the changes in working directory",
        },
        {
          kind: "cheat",
          command: "git diff",
          description: "diff of what is changed but not staged",
        },
        {
          kind: "cheat",
          command: "git diff --staged",
          description: "diff of what is staged but not yet committed",
        },
        {
          kind: "cheat",
          command: "git commit -m “[descriptive message]”",
          description: "commit your staged content as a new commit snapshot",
        },
      ],
    },
    {
      kind: "section",
      title: "BRANCH & MERGE",
      description:
        "Isolating work in branches, changing context, and integrating changes",
      items: [
        {
          kind: "cheat",
          command: "git branch",
          description:
            "list your branches. a * will appear next to the currently active branch",
        },
        {
          kind: "cheat",
          command: "git branch [branch-name]",
          description: "create a new branch at the current commit",
        },
        {
          kind: "cheat",
          command: "git checkout",
          description:
            "switch to another branch and check it out into your working directory",
        },
        {
          kind: "cheat",
          command: "git merge [branch]",
          description:
            "merge the specified branch’s history into the current one",
        },
      ],
    },
    {
      kind: "section",
      title: "INSPECT & COMPARE",
      description: "Examining logs, diffs and object information",
      items: [
        {
          kind: "cheat",
          command: "git log",
          description: "show all commits in the current branch’s history",
        },
        {
          kind: "cheat",
          command: "git log branchB..branchA",
          description: "show the commits on branchA that are not on branchB",
        },
        {
          kind: "cheat",
          command: "git log --follow [file]",
          description:
            "show the commits that changed file, even across renames",
        },
        {
          kind: "cheat",
          command: "git diff branchB...branchA",
          description:
            "show the diff of what is in branchA that is not in branchB",
        },
        {
          kind: "cheat",
          command: "git show [SHA]",
          description: "show any object in Git in human-readable format",
        },
      ],
    },
    {
      kind: "section",
      title: "TRACKING PATH CHANGES",
      description: "Versioning file removes and path changes",
      items: [
        {
          kind: "cheat",
          command: "git rm [file]",
          description:
            "delete the file from project and stage the removal for commit",
        },
        {
          kind: "cheat",
          command: "git mv [existing-path] [new-path]",
          description: "change an existing file path and stage the move",
        },
        {
          kind: "cheat",
          command: "git log --stat -M",
          description:
            "show all commit logs with indication of any paths that moved",
        },
      ],
    },
    {
      kind: "section",
      title: "SHARE & UPDATE",
      description:
        "Retrieving updates from another repository and updating local repos",
      items: [
        {
          kind: "cheat",
          command: "git remote add [alias] [url]",
          description: "add a git URL as an alias",
        },
        {
          kind: "cheat",
          command: "git fetch [alias]",
          description: "fetch down all the branches from that Git remote",
        },
        {
          kind: "cheat",
          command: "git merge [alias]/[branch]",
          description:
            "merge a remote branch into your current branch to bring it up to date",
        },
        {
          kind: "cheat",
          command: "git push [alias] [branch]",
          description:
            "transmit local branch commits to the remote repository branch",
        },
        {
          kind: "cheat",
          command: "git pull",
          description:
            "fetch and merge any commits from the tracking remote branch",
        },
      ],
    },
    {
      kind: "section",
      title: "REWRITE HISTORY",
      description: "Rewriting branches, updating commits and clearing history",
      items: [
        {
          kind: "cheat",
          command: "git rebase [branch]",
          description:
            "apply any commits of current branch ahead of specified one",
        },
        {
          kind: "cheat",
          command: "git reset --hard [commit]",
          description:
            "clear staging area, rewrite working tree from specified commit",
        },
      ],
    },
    {
      kind: "section",
      title: "TEMPORARY COMMITS",
      description:
        "Temporarily store modified, tracked files in order to change branches",
      items: [
        {
          kind: "cheat",
          command: "git stash",
          description: "save modified and staged changes",
        },
        {
          kind: "cheat",
          command: "git stash list",
          description: "list stack-order of stashed file changes",
        },
        {
          kind: "cheat",
          command: "git stash pop",
          description: "write working from top of stash stack",
        },
        {
          kind: "cheat",
          command: "git stash drop",
          description: "discard the changes from top of stash stack",
        },
        {
          kind: "cheat",
          command: "git stash clear",
          description: "discard the changes from top of stash stack",
        },
      ],
    },
  ],
};
