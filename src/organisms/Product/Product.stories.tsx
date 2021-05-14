import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Product, { IProductProps } from './Product'

export default getConfig({ title: 'organisms/Product', component: Product })

const Template: Story<IProductProps> = (args: IProductProps) => <Product {...args}></Product>;

export const Common = Template.bind({});
Common.args = {};