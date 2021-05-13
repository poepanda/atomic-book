export default {
  extends: [
    "react-app"
  ],
  rules: {
    noConsole: 1,
    'react/defaultPropsMatchPropTypes': 1,
    'react/noUnusedPropTypes': 1,
    'react/propTypes': 1,
    'react/sortPropTypes': 1
  },
  settings: {
    react: {
      version: "latest"
    }
  }
}