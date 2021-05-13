const path = require('path')


module.exports = (basePath) => ({
  description: 'Add a new Atom',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Atom name?',
      default: 'Button',
    },
  ],
  actions: () => {
    const baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}')
    const templateBaseName = './atom/atom'
    const fileExtensions = ['tsx', 'test.tsx', 'scss', 'stories.tsx']

    const actions = [
      ...fileExtensions.map((fileExtension) => ({
        type: 'add',
        force: true,
        path: `${baseName}.${fileExtension}`,
        templateFile: `${templateBaseName}.${fileExtension}.hbs`,
        abortOnFail: true,
        data: { type: 'atom' }
      })),
      {
        type: 'prettify',
        path: path.join(basePath, '{{pascalCase name}}'),
      },
    ]

    return actions
  },
})
