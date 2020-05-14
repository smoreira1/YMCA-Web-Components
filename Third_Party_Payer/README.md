# ThirdPartyPayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## YMCA Documentation 

This project uses Angular Elements to generate Web Components.

1. This project generates differential modules, meaning two different code bases, one for legacy browsers and one for modern browsers.

2. The polyfill generate script should get bundled into the main script respective of the type.

3. Styles are also generated separately.

4. Ideally/and what was assumed is when the build runs, there would only be one single bundled file with both styles and script bundled together. This did not really happen and essentially ultimately will still require two resources, though maybe something during the build process was wrong and this can be corrected. 

5. Other files in the dist folder are simply files required for the full blown application(?)

6. A Feature of NPM is to generate a third party license so we can check legally everything is okay.

7. Since this is a Web Components module, any assets, such as images or icons actually need to be recoded to either be inline or point to an external resource as these do not get bundled into web components.

## Build Steps

1. Currently running the command npm run build:prod will generate all the required files.

2a. Poly fill and main script must get bundled together. Currently this is done manually. 

2b. If possible take a look at the index.html and how those assets get loaded. This is the ideal loading situation for all assets.

## Development

1. When repo is cloned. Run command nm install on the root directory. 

2. Run npm run start to run local development environment. 

3. Open package.json all commands are listed under the script section. 

