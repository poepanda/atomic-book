const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const colors = require('colors');
const CleanCSS = require('clean-css');

const distPath = path.resolve(__dirname, '../../dist');
const assetsPath = path.join(distPath, './assets')
let cssContent = '';

console.log('Start crawling css files... '.magenta)
console.log(`From: ${distPath}`.yellow)

try {
  var cssFiles = glob.sync('/**/*.css', {
    root: distPath
  })
} catch (err) {
  console.error('Error: '.red, err)
}

if (cssFiles instanceof Array) {
  cssFiles.map((file) => {
    cssContent += fs.readFileSync(file);
  })
}

const options = { /* options */ };
const cleanedCss = new CleanCSS(options).minify(cssContent);

console.log(`Combined and minified css!`.green)
console.log('Original Size: ', `${cleanedCss.stats.originalSize}`.green)
console.log('Minified Size: ', `${cleanedCss.stats.minifiedSize}`.green)
console.log('Duration: ', `${cleanedCss.stats.timeSpent}ms`.green)

if (!fs.existsSync(assetsPath)){
  fs.mkdirSync(assetsPath);
}
fs.writeFileSync(path.join(assetsPath, `styles.${(new Date()).getTime()}.css`), cleanedCss.styles)