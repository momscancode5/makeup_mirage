# Fork & Branch Workflow

## Initial setup

1. Fork momscancode5/project repository to your GitHub account.
2. In the command line, cd to the directory you want the project folder to be created.
3. Clone your forked repository locally using `git clone git@github.com:yomi413/project.git`.
4. Cd into project folder, then create a remote upstream to the _original_ repo `git remote add upstream git@github.com:momscancode5/project.git`

## Work in a branch

1. Create new branch using `git checkout -b <branch name>`. This last command also switches to the newly created branch.
2. Once you've added your code, run `git status`. You should see the following message:

```
On branch ye-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

3. Use `git status` often to ensure your files are on the right path.
4. Run `git add <filename>` to stage your changes.
5. Run `git commit -m <Message>` to save your changes.
6. Run `git push origin <branch name>` to push your changes to the current branch.
7. Once your changes have been pushed to the current branch, go to the remote repository on github.com and create a new pull request. Make sure you are comparing your branch with the master branch from the original repository.
8. Wait until the original repository owner has merged your changes.
9. When you want to make more changes, run `git pull` inside the master branch of your local repository.
10. Repeat steps as necessary.

## Keep your fork in sync with original repo

These pull the changes from the original repo (upstream) and push them to _your_ master branch on GitHub.

```
git pull upstream master
git push origin master
```
