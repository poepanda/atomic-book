import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript';
import autoExternal from 'rollup-plugin-auto-external'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import packageJson from '../../package.json'
import { getFilesFolders } from '../utils'

const distDirectory = path.join(__dirname, '../../dist')
const srcDirectory = path.join(__dirname, '../../src')
const buildFormats = ['cjs'] // include others if needed

function cleanDist() {
  rimraf.sync(distDirectory)
  fs.mkdirSync(distDirectory)
}

function createReadmePackageJson() {
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

function getOutputs({ file }) {
  const fileDirectory = path.dirname(file)
  const fileDirectoryParent = path.dirname(path.dirname(file))
  const fileBaseName = path.basename(file)

  const shouldUseIndex = () => {
    return (
      !fs.existsSync(path.join(fileDirectory, 'index.js')) &&
      fileBaseName.replace(path.extname(fileBaseName), '') === fileDirectory.replace(fileDirectoryParent, '').slice(1)
    )
  }

  return buildFormats.map((format) => {
    const fileDistDirectory = fileDirectory.replace('src', 'dist').replace(distDirectory, '')
    const output = {
      file: shouldUseIndex()
        ? path.join(distDirectory, fileDistDirectory, 'index.js')
        : path.join(distDirectory, fileDistDirectory, fileBaseName),
      format,
      exports: 'named',
    }
    return output
  })
}

cleanDist()

createReadmePackageJson()

const rollupConfig = getFilesFolders(srcDirectory)
  .filter(
    (file) =>
      file.includes('.tsx') &&
      !file.includes('examples') &&
      !file.includes('.mock.tsx') &&
      !file.includes('.test.tsx') &&
      !file.includes('.stories.tsx')
  )
  .map((file) => ({
    input: file,
    output: getOutputs({ file }),
    plugins: [
      typescript(),
      autoExternal(),
      babel({
        exclude: '/node_modules/**',
      }),
      commonjs(),

      postcss({
        modules:
          fs.existsSync(file.replace('.tsx', '.module.scss')) || fs.existsSync(file.replace('.tsx', '.module.css')),
        extract: true,
      }),
      terser(),
    ],
    external: ['prop-types'],
  }))
export default rollupConfig