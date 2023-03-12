const { readFile } = require('../utils');
const path = require('path');

const envFile = path.resolve(__dirname, '../../env.json');
let tempEnv;
async function getLocalEnv() {
  try {
    const content = await readFile(envFile);
    const config = JSON.parse(content);
    tempEnv = config;
  } catch {
    tempEnv = {};
  }
  // if (!tempEnv) {
  // }
  return tempEnv;
  // if (!tempEnv) {
  //   try {
  //     const content = await readFile(envFile);
  //     const config = JSON.parse(content);
  //     tempEnv = config;
  //   } catch {
  //     tempEnv = {};
  //   }
  // }
  // return tempEnv;
}

module.exports = getLocalEnv;
