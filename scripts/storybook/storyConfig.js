const storyConfig = {
  parameters: {
    options: {
      showPanel: true,
    },
  },
}

function getConfig({ component, title }) {
  return {
    ...storyConfig,
    title: `Atomics/${title}`,
    component,
    parameters: {
      atomic: {
        data: 'this data is passed to the addon',
      },
    },
  }
}

export { storyConfig, getConfig }
