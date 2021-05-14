import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import SectionTitleBar, { ISectionTitleBarProps } from './SectionTitleBar'

export default getConfig({ title: 'molecules/SectionTitleBar', component: SectionTitleBar })

const Template: Story<ISectionTitleBarProps> = (args: ISectionTitleBarProps) => <SectionTitleBar {...args}></SectionTitleBar>;

export const Common = Template.bind({});
Common.args = {
  title: 'Standard Title',
};

export const WithCta = Template.bind({});
WithCta.args = {
  title: 'Standard Title',
  cta: {
    label: 'See All Deals',
    href: '/',
  }
};

export const WithIconAndCta = Template.bind({});
WithIconAndCta.args = {
  title: 'Standard Title',
  cta: {
    label: 'See All Deals',
    href: '/',
  },
  icon: 'flash',
};