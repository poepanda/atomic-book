import { addons } from '@storybook/addons'
import { themes, create } from '@storybook/theming'

const shopbackTheme = create({
  base: 'light',
  brandTitle: 'Atomic Book',
  brandUrl: 'https://www.shopback.sg/',
  brandImage: 'https://img.apksum.com/7a/com.shopback.app/2.69.0/icon.png',
})

const shopbackFlexTheme = create({
  base: 'light',

  colorPrimary: '#F54E4E',
  colorSecondary: '#F54E4E',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'roboto',

  // Text colors
  textColor: '#333333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  brandTitle: 'Atomic Book',
  brandUrl: 'https://www.shopback.sg/',
  brandImage: 'https://img.apksum.com/7a/com.shopback.app/2.69.0/icon.png',
});

addons.setConfig({
  theme: shopbackFlexTheme,
})
