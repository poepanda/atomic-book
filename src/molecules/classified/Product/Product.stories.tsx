import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Product, { IProductProps } from './Product'

import { COMMON_PRODUCT } from "./mock-data";

export default getConfig({ title: 'molecules/classified/Product', component: Product })

const Template: Story<IProductProps> = (args: IProductProps) => (
  <div className="card-container">
    <Product {...args}></Product>
  </div>
);

export const Common = Template.bind({});
Common.args = {
  product: COMMON_PRODUCT
};