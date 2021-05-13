module.exports = {
  plugins: [
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