# kauppapaikka

kauppapaikka is a demo web application built with AngularJS.

## Getting started

### Installation
1. Clone this repository (or download a zip archive):
````
git clone https://github.com/kurkku/kauppapaikka.git kauppapaikka
````

2. Install dependencies using [npm](https://www.npmjs.com/):
````
cd kauppapaikka
npm install
````

npm installs development tools -- such as test runners -- and calls [bower](http://bower.io/) that downloads client-side code packages -- such as Angular and Bootstrap.

npm packages are installed to ````node_modules```` directory, and bower packages to ````app/bower_components````.

### Configuration
The backend server URI can be changed by modifying [app/app.config.js](https://github.com/kurkku/kauppapaikka/blob/master/app/js/app.config.js) file.

## Running the app
The project has been preconfigured with a simple web server for local development. The server can be started with
````
npm start
````

Upon startup the web app is available at http://localhost:8000/app/ .

The application can be moved to production environment easily: ````app```` directory contains all the required files to run the app elsewhere.

## Testing the app
The app has both unit and end-to-end tests.

### Unit tests
Unit tests are written in [Jasmine](http://jasmine.github.io/) and executed with [Karma](http://karma-runner.github.io/).

Tests can be executed with ````npm test```` (continuous testing), or with ````npm run test-single-run```` (single shot).

Karma expects to find Chrome and Firefox browsers on the machine. Supported browsers can be changed in [test/karma.conf.js](https://github.com/kurkku/kauppapaikka/blob/master/test/karma.conf.js).

### E2E
End-to-end tests are executed with [Protractor](https://angular.github.io/protractor) test framework.

E2E tests are run against a live backend with Chrome browser.

Running the tests:
- (Make sure you have JavaRE in Path)
- Download the latest drivers for defined browser: ````npm run update-webdriver````
- Start the local webserver: ````npm start````
- Run E2E tests: ````npm run protractor````

## Directory structure
````
│   .bowerrc
│   .gitignore
│   .jshintrc
│   bower.json
│   LICENSE
│   package.json
│   README.md
│
├───app
│   │   app.css
│   │   index.html
│   │
│   ├───img
│   │       thumbnail-placeholder.png
│   │
│   ├───js
│   │   │   app.config.js
│   │   │   app.module.js
│   │   │   app.route.js
│   │   │
│   │   ├───controllers
│   │   │       add.controller.js
│   │   │       delete.controller.js
│   │   │       details.controller.js
│   │   │       list.controller.js
│   │   │
│   │   ├───filters
│   │   │       prettyeuro.filter.js
│   │   │
│   │   └───services
│   │           formvalidator.service.js
│   │           marketad.service.js
│   │
│   └───partials
│           marketad.details.html
│           marketad.header.html
│           marketad.list.html
│           marketad.new.html
│
├───e2e-tests
│       marketad_details.e2e.spec.js
│       marketad_lifecycle.e2e.spec.js
│       marketad_list.e2e.spec.js
│       protractor.conf.js
│
└───test
    │   karma.conf.js
    │
    └───unit
            add.controller.spec.js
            details.controller.spec.js
            formvalidator.service.spec.js
            list.controller.spec.js
            marketad.service.spec.js
            prettyEuro.filter.spec.js
````
