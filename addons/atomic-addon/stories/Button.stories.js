// Button.stories.js

import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  //👇 Creates specific parameters for the story
  parameters: {
    myAddon: {
      data: 'this data is passed to the addon',
    },
  },
};

export const Basic = () => <Button>hello</Button>;