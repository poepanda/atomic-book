import { Story } from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import ProgressBar, { IProgressBarProps } from './ProgressBar'

export default getConfig({ title: 'molecules/ProgressBar', component: ProgressBar })

const Template: Story<IProgressBarProps> = (args: IProgressBarProps) => (
  <div style={{width: '210px'}}>
    <ProgressBar {...args} />
  </div>
)

export const ProgressBar25 = Template.bind({});
ProgressBar25.args = {
  percentage: 25,
  label: '25% Sold'
};
