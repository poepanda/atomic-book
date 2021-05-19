import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Carousel, { CarouselItemTypes, ICarouselProps } from './Carousel'
import times from 'lodash/times'

import { FULL_CONFIG_OFFER_CARD_COMMON, MERCHANT_CARD_COMMON, MERCHANT_CARD_UPSIZED } from '@molecules/OfferCard/OfferCard.mocks'
import { BANNER_SQUARE_SAMPLE_1, BAD_BANNER_SAMPLE_1 } from "@atoms/Image/Image.mocks";

export default getConfig({ title: 'organisms/Carousel', component: Carousel })

const fullConfigCards = times(9, () => ({details: {...FULL_CONFIG_OFFER_CARD_COMMON}}));
const storeCards = [
  ...times(4, () => ({details: {...MERCHANT_CARD_UPSIZED}})),
  ...times(5, () => ({details: {...MERCHANT_CARD_COMMON}})),
]
const upsizedStoreCards = [
  ...times(10, () => ({details: {...MERCHANT_CARD_UPSIZED}})),
]
const commonBanners = times(8, () => ({details: {...BANNER_SQUARE_SAMPLE_1}}))
const badBanners = times(8, () => ({details: {...BAD_BANNER_SAMPLE_1}}))

const Template: Story<ICarouselProps> = (args: ICarouselProps) => (
  <div style={{padding: '16px'}}>
    <Carousel {...args}></Carousel>
  </div>
);

export const FullConfigCard = Template.bind({});
FullConfigCard.args = {
  items: fullConfigCards,
  type: CarouselItemTypes.offerCard,
  title: 'Full Config Card Carousel',
  cta: {
    href: '/',
    label: 'View all'
  }
};

export const StoreCard = Template.bind({});
StoreCard.args = {
  items: storeCards,
  type: CarouselItemTypes.offerCard,
  title: 'Store cards',
  cta: {
    href: '/',
    label: 'View all'
  }
};

export const AllUpsizedStoreCard = Template.bind({});
AllUpsizedStoreCard.args = {
  items: upsizedStoreCards,
  type: CarouselItemTypes.offerCard,
  title: 'Upsized',
  titleIcon: 'flash',
  cta: {
    href: '/',
    label: 'View all'
  }
};

export const Banners = Template.bind({});
Banners.args = {
  items: commonBanners,
  type: CarouselItemTypes.banner,
  title: 'Banners',
};