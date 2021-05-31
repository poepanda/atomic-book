const fs = require('fs');
const path = require('path');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const autoExternal = require('rollup-plugin-auto-external');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');
const resolve = require('rollup-plugin-node-resolve');

const { getFilesFolders } = require('../utils')

const distDirectory = path.join(__dirname, '../../dist')
const srcDirectory = path.join(__dirname, '../../src')
const buildFormats = ['cjs']

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
        : path.join(distDirectory, fileDistDirectory, fileBaseName.replace(/\.ts/g, '.js')),
      format,
      exports: 'named',
      sourcemap: false,
    }
    return output
  })
}

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const entryFiles = getFilesFolders(srcDirectory)
  .filter(
    (file) =>
    (
      file.includes('.tsx') ||
      file.includes('.ts')
    ) &&
    !file.includes('examples') &&
    !file.includes('.mock.tsx') &&
    !file.includes('.d.ts') &&
    !file.includes('.test.tsx') &&
    !file.includes('.stories.tsx')
  )

const getRollupConfig = (file) => {
    return {
      input: file,
      plugins: [
        typescript(),
        autoExternal(),
        // resolve(),
        // commonjs({
        //   // include: ['node_modules/swiper/**', 'node_modules/classnames/**',],
        //   include: /node_modules/, 
        //   namedExports: {
        //     'lodash': [
        //       'get',
        //       'map',
        //       'kebabCase',
        //       'template'
        //     ],
        //   },
        //   extensions
        // }),
        babel({
          exclude: '/node_modules/**',
          extensions,
        }),
        postcss({
          modules:
            fs.existsSync(file.replace('.tsx', '.module.scss')) || fs.existsSync(file.replace('.tsx', '.module.css')),
          extract: true,
        }),
        terser(),
      ],
      external: ['prop-types', 'react', 'react-dom', 'classnames', 'swiper'],
      output: getOutputs({ file }),
    }
  }

module.exports = {
  distDirectory,
  srcDirectory,
  buildFormats,
  entryFiles,
  getRollupConfig,
}