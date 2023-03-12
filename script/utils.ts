const fs = require('fs');
const path = require('path');

async function readFile(file_path) {
  return new Promise((resolve, reject) => {
    fs.readFile(file_path, 'utf8', (err, file_str) => {
      if (err) {
        return reject(err);
      }
      resolve(file_str);
    });
  });
}

async function writeFile(file_path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file_path, content, 'utf-8', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

async function renameFile(old_path, new_path) {
  return new Promise((resolve, reject) => {
    fs.rename(old_path, new_path, function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

function mkdir(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (e) => {
      if (!e || (e && e.code === 'EEXIST')) {
        resolve(undefined);
      } else {
        resolve(undefined);
      }
    });
  });
}

async function mk(dir_path) {
  if (await exists(dir_path)) {
    return true;
  }

  dir_path = path.normalize(dir_path);
  const path_arr = dir_path.split(path.sep);
  for (let i = 0; i < path_arr.length; i++) {
    if (!path_arr[i]) {
      continue;
    }
    const cur_dir = path_arr.slice(0, i + 1).join(path.sep);
    if (!(await exists(cur_dir))) {
      await mkdir(cur_dir);
    }
  }
}

function exists(path) {
  return new Promise((resolve, reject) => {
    fs.exists(path, (exist) => {
      resolve(exist);
    });
  });
}

async function cpFile(src_path, dist_path) {
  const dist_dir = path.resolve(path.dirname(dist_path));
  const is_exists = await exists(src_path);
  if (!is_exists) {
    console.error(`${src_path} doesn't exist`);
    return;
  }
  await mk(dist_dir);

  await new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(src_path);
    const writeStream = fs.createWriteStream(dist_path);

    readStream.on('data', (data) => {
      writeStream.write(data);
    });
    readStream.on('error', (err) => {
      throw err;
    });
    readStream.on('end', (done) => {
      writeStream.end();
      if (done) {
        done();
      }
      resolve(undefined);
    });
  });
}

module.exports = {
  readFile,
  writeFile,
  renameFile,
  cpFile,
};
