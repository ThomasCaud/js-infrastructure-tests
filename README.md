## Description
The goal is to define a unit test infrastructure for electron-react-typescript app, with the least possible configuration (no babel either webpack, no transpilation, etc.).

## Commands
### Installation
* `yarn install` after cloning the repo

### Launch the app
* `yarn start` in order to launch the app
* `yarn electron-start` or 'electron .' in order to launch the electron app

### Launch unit tests
* `yarn test` in order to launch unit tests
* `yarn test-json` in order to launch unit tests and obtain results in json format
* `yarn test-html` in order to launch unit tests and obtain results in html format. The obtain report is in the mochawesome-report folder.

### Get coverage info
* `yarn test-coverage` in order to launch unit tests and get coverage info
* `yarn test-coverage-json` in order to launch unit tests and get coverage info in json format. The obtain report is in the coverage folder.
* `yarn test-coverage-html` in order to launch unit tests and get coverage info in html format. The obtain report is in the coverage folder.

## Continuous test
* You need to install the wallaby extension on Visual Studio Code
* `cmd + Schift + R, R` to launch wallaby
* `cmd + Schift + R, S` to stop wallaby
* Once launched, you just need to edit your file to see the new unit tests results!
* Go to `localhost:51245` to acess to wallaby server: dashboard with the unit tests, and the coverages info

## Milestone 1 - Tests à posteriori
- [x] Tests on simple js file
- [x] Tests on typescript file
- [x] Tests on react file
- [x] Tests async/await functions (WIP)
- [x] Create command for JSON export
- [x] Create command for HTML export
- [x] Get coverage info
- [x] Get coverage info in the JSON/HTML export

## Milestone 2 - Tests en continu
- [x] Wallaby study
- [x] VS code's interfacing
- [x] Dashboard
- [x] Fix mount issue

## Notes
* `nyc` to do coverage tests
* `mochawesome` to generate better mocha reports
* `Sinon.js` to help us mock, stub, fake and spy
