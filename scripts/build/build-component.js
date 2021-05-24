const { map } = require('lodash')
const rimraf = require('rimraf')
const rollup = require('rollup')

const { entryFiles, getRollupConfig } = require("./rollup.config")
const runBuild = async () => {
  let index = 0
  const currentEntryIndex = process.argv[2];
  const entry = entryFiles[currentEntryIndex];
  const rollupConfig = getRollupConfig(entry)

  build(rollupConfig)

  async function build(rollupOptions) {
    const { output, ...bundleOptions  } = rollupOptions;
    const bundle = await rollup.rollup(rollupOptions)
    map(output, outputOption => bundle.write(outputOption))
  }
}

runBuild();