import { action } from '@storybook/addon-actions'
import { Story } from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import ProgressBarVisual, { IProgressBarVisualProps } from './ProgressBarVisual'

export default getConfig({ title: 'atoms/ProgressBarVisual', component: ProgressBarVisual })

const Template: Story<IProgressBarVisualProps> = (args: IProgressBarVisualProps) => (
  <div style={{width: '210px'}}>
    <ProgressBarVisual {...args} />
  </div>
)

export const ProgressBarVisual25 = Template.bind({});
ProgressBarVisual25.args = {
  percentage: 25,
};

export const ProgressBarVisual50 = Template.bind({});
ProgressBarVisual50.args = {
  percentage: 50,
};

export const ProgressBarVisual75 = Template.bind({});
ProgressBarVisual75.args = {
  percentage: 75,
};
