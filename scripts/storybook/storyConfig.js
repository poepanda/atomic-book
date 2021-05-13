const storyConfig = {
  parameters: {
    options: {
      showPanel: true,
    },
  },
}

function getConfig({ component, title }) {
  return { ...storyConfig, title: `Atomics/${title}`, component }
}

export { storyConfig, getConfig }
