#!/usr/bin/env node

import path from "path"
import fs from "fs"
import readline from "readline"
import { exec } from "child_process"

const pn = process.argv[2];  // pn -> project name
if (!pn) {
  console.log("Provide a project name.");
  process.exit(1);
}

const pp = path.join(process.cwd(), pn); // pp -> project path
fs.mkdirSync(pp);

const fls = [ // fls -> folders
  'src/controllers',
  'src/models',
  'src/middlewares',
  'src/routes',
  'tests'
]

console.log('Creating project structure...');

fls.forEach(f => {
  const fp = path.join(pp, f); // fp -> full path
  fs.mkdirSync(fp, { recursive: true });
})

console.log('Folders created');
console.log('Generating files...');




// APP CONTENT
import appContent from "./content/appContent.js";
fs.writeFileSync(path.join(pp, 'src/main.js'), appContent);

// PACKAGE JSON CONTENT
const packageJson = {
  name: pn,
  version: '1.0.0',
  type: 'module',
  main: 'src/main.js',
  scripts: {
    start: 'node src/main.js',
    dev: 'nodemon src/main.js',
    test: 'jest'
  },
  dependencies: {
    express: '^4.18.2',
    mongoose: '^8.0.0',
    dotenv: '^16.3.1'
  },
  devDependencies: {
    nodemon: '^3.0.1'
  }
};
const packageJsonString = JSON.stringify(packageJson, null, 2);
fs.writeFileSync(path.join(pp, 'package.json'), packageJsonString);

// ENV CONTENT
import envContent from "./content/envContent.js";
fs.writeFileSync(path.join(pp, '.env'), envContent);

// GIT IGNORE CONTENT
import gitIgnoreContent from "./content/gitIgnoreContent.js";
fs.writeFileSync(path.join(pp, '.gitignore'), gitIgnoreContent);

// ROUTES CONTENT
import routesContent from "./content/routesContent.js";
fs.writeFileSync(path.join(pp, 'src/routes/routes.js'), routesContent);

// MIDDLEWARE CONTENT
import exampleMiddlewareContent from "./content/exampleMiddlewareContent.js";
fs.writeFileSync(path.join(pp, 'src/middlewares/exMiddleware.js'), exampleMiddlewareContent)

// CONTROLLERS CONTENT
import exampleController1Content from "./content/exampleController1Content.js";
import exampleController2Content from "./content/exampleController2Content.js";
fs.writeFileSync(path.join(pp, 'src/controllers/exController1.js'), exampleController1Content)
fs.writeFileSync(path.join(pp, 'src/controllers/exController2.js'), exampleController2Content)

// MODEL CONTENT
import modelContent from "./content/modelsContent.js";
fs.writeFileSync(path.join(pp, 'src/models/userSchema.js'), modelContent)




console.log('Files generated');
console.log(`Project '${pn}' created successfully!`);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user if they want to install and run
rl.question('\nInstall dependencies and start server? (Y/N): ', (answer) => {
  const shouldInstall = answer.toLowerCase() !== 'n';

  rl.close();

  if (shouldInstall) {
    console.log('\nInstalling dependencies...');

    exec('npm install', { cwd: pp }, (error, stdout, stderr) => {
      if (error) {
        console.error('| X | Error installing dependencies:', error.message);
        return;
      }

      console.log('Dependencies installed!');
      console.log('\nStarting server...\n');

      // Start the server
      exec('npm run dev', { cwd: pp }, (error, stdout, stderr) => {
        if (error) {
          console.error('Error starting server:', error.message);
          return;
        }
      }).stdout.pipe(process.stdout);
    });
  } else {
    console.log(`\n📦 Next steps:
      cd ${pn}
      npm install
      npm run dev
    `);
  }
});