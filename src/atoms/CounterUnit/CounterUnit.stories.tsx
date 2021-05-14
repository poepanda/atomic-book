import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import CounterUnit, { ICounterUnitProps } from './CounterUnit'

export default getConfig({ title: 'atoms/CounterUnit', component: CounterUnit })

const Template: Story<ICounterUnitProps> = (args: ICounterUnitProps) => <CounterUnit {...args}></CounterUnit>;

export const Common = Template.bind({});
Common.args = {
  children: '10d'
};