import {Story} from "@storybook/react";
import React from 'react'
import map from 'lodash/map'

import { getConfig } from '@scripts/storybook/storyConfig'
import Icon, { IIconProps, ICONS } from './Icon'

export default getConfig({
  title: 'atoms/Icon',
  component: Icon,
})

const Template: Story<IIconProps> = (args: IIconProps) => <Icon {...args}></Icon>;

export const Flash = Template.bind({});
Flash.args = {
  type: 'flash',
  size: 24,
};

export const Stars = Template.bind({});
Stars.args = {
  type: 'stars',
  size: 24,
};