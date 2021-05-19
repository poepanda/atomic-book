import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Offer, { IOfferProps } from './Offer'

import { COMMON_OFFER, UPSIZED_OFFER } from "./mock-data";

export default getConfig({ title: 'molecules/classified/Offer', component: Offer })

const Template: Story<IOfferProps> = (args: IOfferProps) => (
  <div className="card-container">
    <Offer {...args}></Offer>
  </div>
);
export const Common = Template.bind({});
Common.args = {
  offer: COMMON_OFFER,
};

export const Upsized = Template.bind({});
Upsized.args = {
  offer: UPSIZED_OFFER,
};