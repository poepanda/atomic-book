import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import CounterUnitConnector, { ICounterUnitConnectorProps } from './CounterUnitConnector'

export default getConfig({ title: 'atoms/CounterUnitConnector', component: CounterUnitConnector })

const Template: Story<ICounterUnitConnectorProps> = (args: ICounterUnitConnectorProps) => <CounterUnitConnector {...args}></CounterUnitConnector>;

export const Common = Template.bind({});
Common.args = {};