const rimraf = require('rimraf')
const fs = require('fs')
const colors = require('colors')
const path = require('path')

const { distDirectory, entryFiles } = require('./rollup.config')

const packageJson = require('../../package.json')


const cleanDist = () => {
  rimraf.sync(distDirectory)
  fs.mkdirSync(distDirectory)
}

const createReadmePackageJson = () => {
  fs.copyFileSync(path.join(__dirname, 'README_PACKAGE.md'), path.join(distDirectory, 'README.md'))
  fs.writeFileSync(
    path.join(distDirectory, 'package.json'),
    JSON.stringify(
      {
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
        author: packageJson.author,
        license: packageJson.license,
        repository: packageJson.repository,
        keywords: packageJson.keywords,
        dependencies: packageJson.dependencies,
        peerDependencies: packageJson.peerDependencies,
      },
      null,
      2
    )
  )
}

cleanDist()

createReadmePackageJson()

console.time('Total build duration')

const CONCURRENT_PROCESSES = 6;

const buildComponents = (entryFileCurrentIndex) => {
  const cp = require('child_process')
  const childProcess = []
  let completedProcessNum = 0;
  console.log(entryFileCurrentIndex)
  
  for (let i = 0; i < CONCURRENT_PROCESSES; i++) {
    const targetEntryFile = entryFiles[entryFileCurrentIndex];
    console.log(`Start building for: ${targetEntryFile}`.yellow);
    if (!entryFiles[entryFileCurrentIndex]) {
      console.timeEnd('Total build duration')
      return;
    }
    childProcess.push(cp.spawn('node', ['./scripts/build/build-component.js', entryFileCurrentIndex]))
    entryFileCurrentIndex += 1;
    childProcess[i].stdout.on('data', function (data) {
      console.log(`${data}`.green)
    })
  
    childProcess[i].stderr.on('data', function (data) {
      console.log(`Error:`, `${data}`.yellow)
    })
  
    childProcess[i].on('close', function (code) {
      if (entryFileCurrentIndex > entryFiles.length) {
        console.log(`Build done! Exit code: ${code}`.green)
        return
      }
      console.log('Process done successfully!'.green, `File: ${targetEntryFile} \n\n`.cyan)
      completedProcessNum += 1;
      if (completedProcessNum === CONCURRENT_PROCESSES) {
        buildComponents(entryFileCurrentIndex)
      }
    })
  }

}

buildComponents(0)

