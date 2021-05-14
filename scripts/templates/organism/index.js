const path = require('path')


module.exports = (basePath) => ({
  description: 'Add a new Organism',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Organism name?',
      default: 'Product',
    },
  ],
  actions: () => {
    const baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}')
    const templateBaseName = './organism/organism'
    const fileExtensions = ['tsx', 'test.tsx', 'scss', 'stories.tsx']

    const actions = [
      ...fileExtensions.map((fileExtension) => ({
        type: 'add',
        force: true,
        path: `${baseName}.${fileExtension}`,
        templateFile: `${templateBaseName}.${fileExtension}.hbs`,
        abortOnFail: true,
        data: { type: 'organism' }
      })),
      {
        type: 'prettify',
        path: path.join(basePath, '{{pascalCase name}}'),
      },
    ]

    return actions
  },
})
