import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import OfferCard, { IOfferCardProps } from './OfferCard'

import {
  FULL_CONFIG_OFFER_CARD_COMMON,
  MERCHANT_CARD_COMMON,
  MERCHANT_CARD_UPSIZED
} from './OfferCard.mocks'

export default getConfig({ title: 'molecules/OfferCard', component: OfferCard })

const Template: Story<IOfferCardProps> = (args: IOfferCardProps) => {
  return (
    <div style={{width: '250px'}}>
      <OfferCard {...args}></OfferCard>
    </div>
  )
};

export const CommonFullConfig = Template.bind({});
CommonFullConfig.args = {
  details: {
    ...FULL_CONFIG_OFFER_CARD_COMMON,
  }
};

export const StoreCard = Template.bind({});
StoreCard.args = {
  details: {
    ...MERCHANT_CARD_COMMON
  }
};

export const StoreCardUpsized = Template.bind({});
StoreCardUpsized.args = {
  details: {
    ...MERCHANT_CARD_UPSIZED
  }
};