## Commands
### Installation
* `yarn install` after cloning the repo

### Launch the app
* `yarn electron-start` or 'electron .' in order to launch the electron app

### Launch unit tests
* `yarn test` in order to launch unit tests
* `yarn test-json` in order to launch unit tests and obtain results in json format
* `yarn test-html` in order to launch unit tests and obtain results in html format. The obtain report is in the mochawesome-report folder.

### Get coverage info
* `yarn test-coverage` in order to launch unit tests and get coverage info
* `yarn test-coverage-json` in order to launch unit tests and get coverage info in json format. The obtain report is in the coverage folder.
* `yarn test-coverage-html` in order to launch unit tests and get coverage info in html format. The obtain report is in the coverage folder.

## Milestone 1
- [x] Tests on simple js file
- [x] Tests on typescript file
- [x] Tests on react file
- [x] Tests async/await functions (WIP)
- [x] Create command for JSON export
- [x] Create command for HTML export
- [x] Get coverage info
- [x] Get coverage info in the JSON/HTML export

## Notes
* `nyc` to do coverage tests
* `mochawesome` to generate better mocha reports
* `Sinon.js` to help us mock, stub, fake and spy