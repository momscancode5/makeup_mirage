# Fork & Branch Workflow

## Initial setup

1. Fork momscancode5/project repository to your GitHub account.
2. In the command line, `cd` to the directory you want the project folder to be created.
3. Clone your forked repository locally using `git clone git@github.com:<your git profile>/project.git`.
4. `cd` into project folder, then create a remote upstream to the _original_ repo `git remote add upstream git@github.com:momscancode5/project.git`.

Only run these intial steps once. They do not repeat.

## Work in a branch

1. Create new branch using `git checkout -b <branch name>`. This command also switches to the newly created branch.
2. Once you've added your code, run `git status`. You should see the following message:

```
On branch <branch name>
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

3. Use `git status` often to ensure your files are on the right path.
4. Run `git add <filename>` to stage your changes.
5. Run `git commit -m "<message>"` to save your changes.
6. Run `git push origin <branch name>` to push your changes to the current development branch.
7. Once your changes have been pushed to the current branch, go to the remote repository on [github.com](https://github.com/momscancode5/project) and create a new pull request. Make sure you are comparing your branch with the master branch from the original repository.
8. Wait until the original repository owner has merged your changes.

Repeat these steps as necessary.

## Keep your fork in sync with original repo

1. Before you make any further changes, switch to your local master branch by running `git checkout master`.
2. To sync your master branch with the original master branch run `git pull upstream master`. (**NOTE:** Your master branch should always match the original master. All your branches should start from the master branch.)
3. Once your master branch is in sync with the remote original master, run `git push origin master` to make sure your remote GitHub repository is updated.

Repeat these steps as necessary.
