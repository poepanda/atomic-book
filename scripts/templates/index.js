const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const atomGenerator = require('./atom/index.js')
const moleculeGenerator = require('./molecule/index.js')
const packageJson = require('../../package.json')

const paths = {
  atom: path.join(__dirname, '../../src/atoms'),
  molecule: path.join(__dirname, '../../src/molecules'),
}

module.exports = plop => {
  plop.setGenerator('Atom', atomGenerator(paths.atom))
  plop.setGenerator('Molecule', moleculeGenerator(paths.molecule))

  plop.setActionType('prettify', (answers, config, plop) => {
    const folderPath = `${path.join(paths[answers.type], plop.getHelper('pascalCase')(answers.componentName))}`
    fs.readdirSync(folderPath).forEach(file => {
      const fileName = path.join(folderPath, file)
      let parser = 'babel'
      switch (path.extname(fileName)) {
        case '.js':
        case '.mjs':
          parser = 'babel'
          break
        case '.css':
        case '.scss':
          parser = 'css'
          break
        case '.json':
          parser = 'json'
          break
        case '.md':
          parser = 'markdown'
          break
        case '.html':
          parser = 'html'
          break
        default:
          parser = 'babel'
      }
      const prettierConfig = {
        ...packageJson.prettier,
        parser
      }
      const fileString = fs.readFileSync(fileName).toString()
      const prettierString = prettier.format(fileString, prettierConfig)
      fs.writeFileSync(fileName, prettierString)
    })
    try {
      return folderPath
    } catch (err) {
      throw err
    }
  })
}
