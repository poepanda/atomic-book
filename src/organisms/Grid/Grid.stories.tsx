import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Grid, { GridItemTypes, IGridProps } from './Grid'
import times from 'lodash/times'

import { COMMON_PRODUCT } from '@molecules/Product/mock-data'
import { COMMON_OFFER } from "@molecules/Offer/mock-data";

export default getConfig({ title: 'organisms/Grid', component: Grid })

const products = times(9, () => ({...COMMON_PRODUCT}));
const offers = times(9, () => ({...COMMON_OFFER}));

const Template: Story<IGridProps> = (args: IGridProps) => <Grid {...args}></Grid>;

export const ProductGrid = Template.bind({});
ProductGrid.args = {
  items: products,
  type: GridItemTypes.product,
  title: 'Product Group'
};

export const OfferGrid = Template.bind({});
OfferGrid.args = {
  items: offers,
  type: GridItemTypes.offer,
  title: 'Product Group'
};
