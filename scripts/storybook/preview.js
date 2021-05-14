import '../../src/base/styles/global.scss';
import '../../src/base/styles/stories.scss';

export const parameters = {
  viewport: {
    viewports: {
      Mobile: {
        name: 'Mobile',
        styles: {
          width: '360px',
          height: '640px',
        },
      },
      Tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1000px',
        },
      },
      Desktop: {
        name: 'Desktop',
        styles: {
          width: '992px',
          height: '1000px',
        },
      },
      LargeDesktop: {
        name: 'Large Desktop',
        styles: {
          width: '1200px',
          height: '1000px',
        },
      },
    }, 
    defaultViewport: 'someDefault',
  },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#DDDFE3',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#212836',
      },
    ],
  },
}
