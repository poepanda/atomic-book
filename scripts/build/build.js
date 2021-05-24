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

const buildComponents = (entryFileCurrentIndex) => {
  const cp = require('child_process')
  const targetEntryFile = entryFiles[entryFileCurrentIndex]
  console.log(`Start building for: ${targetEntryFile}`.yellow);
  if (!targetEntryFile) {
    return;
  }
  const childProcess = cp.spawn('node', ['./scripts/build/build-component.js', entryFileCurrentIndex])

  childProcess.stdout.on('data', function (data) {
    console.log(`${data}`.green)
  })

  childProcess.stderr.on('data', function (data) {
    console.log(`Error:`, `${data}`.yellow)
  })

  childProcess.on('close', function (code) {
    entryFileCurrentIndex += 1
    if (entryFileCurrentIndex > entryFiles.length) {
      console.log(`Build done! Exit code: ${code}`.green)
      return
    }
    console.log('Process done successfully!'.green)
    console.log(`File: ${targetEntryFile} \n\n`.cyan)
    buildComponents(entryFileCurrentIndex)
  })
}

buildComponents(0)

