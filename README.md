# Jouzu

+ Devs: [Cody](https://github.com/cgillette12), [Levi](https://github.com/levipaulk), and [Peter](https://github.com/Paendabear)
+ [Live](https://jouzu.now.sh/register)
+ [Client](https://github.com/thinkful-ei-cheetah/cap2-client-cody-levi-peter) Repo
+ [Server](https://github.com/thinkful-ei-cheetah/cap2-server-cody-levi-peter) Repo

## Summary

+ Jouzu is a language learning application, that is currently in alpha. Jouzu utilizes spaced repetition to improve memorization
  + In its current build...
    + Dashboard:
      + A user view the language they are currently studying as well as their total score (correct - incorrect)
      + A user can review a list of vocabulary words
        + Currently only 31 Japanese words are available.
        + Each word lists the user's number of correct and incorrect guesses
      + A user can start practicing, using spaced repetition 
    + Learn:
      + Guess the translation for the current word
        + Currently Japanese -> English
        + Number of correct / incorrect guesses is displayed
      + Correct Guess
        + Your choice and the answer are displayed
        + Total score and correct count are updated
      + Incorrect Guess
        + Your choice and the answer are displayed
        + Total score and incorrect count are updated

## Test User

+ username: `admin`
+ password: `pass`

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

## Technologies

+ This is a React project, built using Nodejs
+ Node Modules used for this project:
  + Dependencies:
    + @fortawesome/fontawesome-svg-core
    + @fortawesome/free-solid-svg-icons
    + @fortawesome/react-fontawesome
    + classnames
    + jwt-decode
    + react
    + react-dom
    + react-router-dom
    + react-scripts
    
  + devDependencies:
    + cypress
    + jsonwebtoken
    + unfetch