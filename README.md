# udacity-natural-language-processing

This is the repository for **Project 4: Evaluate a News Article with Natural Language Processing** of the Udacity Front End Web Developer Nanodegree Program.

## Goals of this project:
* create asynchronous web app that uses Web API and user input (URL) to dynamically update the UI for the App
* use Webpack as build tool for Production and Development Environment
* Provide results of NLP analysis for a given URL back to the user via the web interface (and command line)
* Use Jest Framework for Unit Testing
* Use Service Workers to support offline functionality

## Functionalities used:
* Node.js for Webserver with Express
* Axios for promise based requests usage together with Node.js
* Build tool Webpack for Production and Development Environment (additional Webpack dev server with proxy)
* Jest Framework for Unit Testing
* Service Workers for offline functionality
* Natural Language Processing (Sentiment Analysis) for given URLs
* Sentiment Analysis via external API - Meaningcloud
* Styles with SCSS
* Babel to make recent JS Code backwards compatible

## Steps to start
* download repository
* check Node.js installation in Terminal with `node --version` and install if not present
* install dependencies via npm (included with Node.js) with `npm install`
* run test script via `npm run test`
* run development environment via `npm run build-dev` with dev server running on `localhost:8080`
* **Remark for dev mode**: to test API calls during development mode a proxy was configured via Webpack so the command `node src/server/index.js` needs to be run in a separate command line window in the project root directory to start the express server on port 8081
* run production environment via `npm run start` which starts express server on `localhost:8081`
* production build can be run separately via `npm run build-prod`

### Notes
* using webpack-cli 4.x requires beta version `webpack-dev-server@4.0.0-beta.0` to make the webpack dev server work again
* as this project uses Webpack 5 the required `optimize-css-assets-webpack-plugin` was not supported anymore, changed to `css-minimizer-webpack-plugin`

---

### Social
* [GitHub](https://github.com/MartinSchuhmacher)
* [LinkedIn](https://www.linkedin.com/in/martinschuhmacher/)