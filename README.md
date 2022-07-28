# Roche Automated Tests

## Dependencies
| Dependency | URL |
|------------|-----|
| Install NodeJS with all the dependencies | <https://nodejs.org/en/> ("npm -v" to check the installation) |
| Install Visual Code Studio | <https://code.visualstudio.com/> |
| Install Cypress | <https://docs.cypress.io/guides/getting-started/installing-cypress> |

## Cloning the project
Using Git, clone the repository to your local machine:

```sh
git clone https://github.com/hlperez07/roche-test.git
```

## Creating a new feature branch
Let's create a branch to work locally, in this example it will create test branch:
```sh
git branch test
git checkout test
```

## Setting Cypress environment

From a cmd terminal

```sh
npm install
```

## Running the tests using GUI
Open a cmd terminal


## Running the tests
```sh
npm run cy:run
```

Will run all the tests. To run individual tests use the standalone commands. For example:

```sh
npm run ci:asset
```

## To Windows users
```sh
npm run ci:win
```

Will set the environment variables for Windows. To run locally just use the standalone cmd commands. For example:

```sh
npm run ci:asset:cmd
```
