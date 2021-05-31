#!/usr/bin/env groovy
@Library('sb-common-pipeline') _

def script = {
  sh('npm install')
  sh('npm run build')
}

npmPipeline(
    testImage: 'node:12.18.3',
    slack: '#build-atomic-book',
    script: script
)