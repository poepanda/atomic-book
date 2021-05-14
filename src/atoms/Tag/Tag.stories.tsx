import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Tag, { TagTypes, ITagProps } from './Tag'

export default getConfig({
  title: 'atoms/Tag',
  component: Tag,
})

const Template: Story<ITagProps> = ({children, ...args}: ITagProps) => <Tag {...args} >{children}</Tag>;

export const CommonTag = Template.bind({});
CommonTag.args = {
  children: 'Common Tag',
  type: TagTypes.Common,
};

export const TopTag = Template.bind({});
TopTag.args = {
  children: 'Top Tag',
  type: TagTypes.CalloutTopleft,
};
