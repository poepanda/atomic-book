import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Link, { ILinkProps } from './Link'

export default getConfig({ title: 'atoms/Link', component: Link })

const Template: Story<ILinkProps> = (args: ILinkProps) => <Link {...args}></Link>;

export const Common = Template.bind({});
Common.args = {
  children: 'Click here',
  href: '/'
};