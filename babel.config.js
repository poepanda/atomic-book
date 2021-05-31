module.exports = {
  plugins: [
    [
      "module-resolver", {
        "extensions": [".js", ".jsx", ".es", ".es6", ".mjs", ".scss"],
        "root": ["."],
        "alias": {
          "@scripts": "./scripts",
          "@base": "./src/base",
          "@atoms": "./src/atoms",
          "@molecules": "./src/molecules",
          "@utils": "./src/utils",
          "@libs": "./libs",
        }
      }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-proposal-private-property-in-object',
      { loose: true }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true }
    ],
    [
      '@babel/plugin-proposal-private-methods',
      { loose: true }
    ]
  ],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-env',
    '@babel/preset-react',
  ]
}