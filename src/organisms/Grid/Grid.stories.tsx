import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Grid, { GridItemTypes, IGridProps } from './Grid'
import times from 'lodash/times'

import { FULL_CONFIG_OFFER_CARD_COMMON, MERCHANT_CARD_COMMON, MERCHANT_CARD_UPSIZED } from '@molecules/OfferCard/OfferCard.mocks'
import { BANNER_SAMPLE_1, BAD_BANNER_SAMPLE_1, BANNER_SQUARE_SAMPLE_1 } from "@atoms/Image/Image.mocks";

export default getConfig({ title: 'organisms/Grid', component: Grid })

const fullConfigCards = times(9, () => ({details: {...FULL_CONFIG_OFFER_CARD_COMMON}}));
const storeCards = [
  ...times(4, () => ({details: {...MERCHANT_CARD_UPSIZED}})),
  ...times(5, () => ({details: {...MERCHANT_CARD_COMMON}})),
]
const upsizedStoreCards = [
  ...times(10, () => ({details: {...MERCHANT_CARD_UPSIZED}})),
]
const commonBanners = times(8, () => ({details: {...BANNER_SAMPLE_1}}))
const mixBanners = [
  ...times(8, () => ({details: {...BANNER_SAMPLE_1}})),
  ...times(1, () => ({details: {...BANNER_SQUARE_SAMPLE_1}})),
  ...times(2, () => ({details: {...BANNER_SAMPLE_1}})),
]
const badBanners = times(8, () => ({details: {...BAD_BANNER_SAMPLE_1}}))

const Template: Story<IGridProps> = (args: IGridProps) => (
  <div style={{padding: '16px'}}>
    <Grid {...args}></Grid>
  </div>
);

export const FullConfigCard = Template.bind({});
FullConfigCard.args = {
  items: fullConfigCards,
  type: GridItemTypes.offerCard,
  title: 'Full Config Card Grid',
  cta: {
    href: '/',
    label: 'View all'
  }
};

export const StoreCard = Template.bind({});
StoreCard.args = {
  items: storeCards,
  type: GridItemTypes.offerCard,
  title: 'Store cards',
  cta: {
    href: '/',
    label: 'View all'
  }
};

export const AllUpsizedStoreCard = Template.bind({});
AllUpsizedStoreCard.args = {
  items: upsizedStoreCards,
  type: GridItemTypes.offerCard,
  title: 'Upsized',
  titleIcon: 'flash',
  cta: {
    href: '/',
    label: 'View all'
  }
};

export const Banners1Column = Template.bind({});
Banners1Column.args = {
  items: commonBanners,
  type: GridItemTypes.banner,
  title: 'Banners',
  numOfCols: 1,
};

export const Banners2Columns = Template.bind({});
Banners2Columns.args = {
  items: badBanners,
  type: GridItemTypes.banner,
  title: 'Banners',
  numOfCols: 2,
};

export const Banners3Columns = Template.bind({});
Banners3Columns.args = {
  items: mixBanners,
  type: GridItemTypes.banner,
  title: 'Banners',
  numOfCols: 3,
};

export const Banners4Columns = Template.bind({});
Banners4Columns.args = {
  items: commonBanners,
  type: GridItemTypes.banner,
  title: 'Banners',
  numOfCols: 4,
};

export const Banners5Columns = Template.bind({});
Banners5Columns.args = {
  items: commonBanners,
  type: GridItemTypes.banner,
  title: 'Banners',
  numOfCols: 5,
};

export const Banners6Columns = Template.bind({});
Banners6Columns.args = {
  items: commonBanners,
  type: GridItemTypes.banner,
  title: 'Banners',
  numOfCols: 6,
};