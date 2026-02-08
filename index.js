#!/usr/bin/env node

import path from "path"
import fs from "fs"

// e -> express
// fs -> fs module

const pn = process.argv[2];  // pn -> project name

if (!pn) {
  console.log("Provide a project name.");
  console.log("Usage: node index.js <project-name>");
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

fls.forEach(f => {
  const fp = path.join(pp, f); // fp -> full path
  fs.mkdirSync(fp, { recursive: true });
})

const appContent =
  `import express from "express"
import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

import router from "./routes/routes.js"

const app = express()
const port = process.env.PORT || 3000

app.use('/', router)

app.listen(port, () => {
  console.log("Server Started.")
})
`
  ;

fs.writeFileSync(path.join(pp, 'src/main.js'), appContent);

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

// Convert object to JSON string with 2-space indentation
const packageJsonString = JSON.stringify(packageJson, null, 2);
fs.writeFileSync(path.join(pp, 'package.json'), packageJsonString);

fs.writeFileSync(path.join(pp, '.env'), "// environment variables");

const gitIgnoreContent = `node_modules/
.env
`;

fs.writeFileSync(path.join(pp, '.gitignore'), gitIgnoreContent);

const routesContent = `import e from "express"
const router = e.Router()

// Add your routes here
router.get('/', (req, res) => {
  res.send("Hello world!");
})
router.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
})

export default router
`;

fs.writeFileSync(path.join(pp, 'src/routes/routes.js'), routesContent);

console.log(`Project '${pn}' created successfully!`);
console.log(`
Next steps:
  cd ${pn}
  npm install
  npm run dev
`);