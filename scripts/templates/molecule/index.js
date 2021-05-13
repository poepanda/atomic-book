const path = require('path')


module.exports = (basePath) => ({
  description: 'Add a new Molecule',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Molecule name?',
      default: 'Button',
    },
  ],
  actions: () => {
    const baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}')
    const templateBaseName = './molecule/molecule'
    const fileExtensions = ['tsx', 'test.tsx', 'scss', 'stories.tsx']

    const actions = [
      ...fileExtensions.map((fileExtension) => ({
        type: 'add',
        force: true,
        path: `${baseName}.${fileExtension}`,
        templateFile: `${templateBaseName}.${fileExtension}.hbs`,
        abortOnFail: true,
        data: { type: 'molecule' }
      })),
      {
        type: 'prettify',
        path: path.join(basePath, '{{pascalCase name}}'),
      },
    ]

    return actions
  },
})
