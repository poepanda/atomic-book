import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Typo, { TypoTypes, ITypoProps } from './Typo'

export default getConfig({
  title: 'atoms/Typo',
  component: Typo,
})

const Template: Story<ITypoProps> = ({children, ...args}: ITypoProps) => <Typo {...args} >{children}</Typo>;

export const SectionTitle = Template.bind({});
SectionTitle.args = {
  children: 'Standard Title',
  type: TypoTypes.StandardTitle,
};

export const CardTitle = Template.bind({});
CardTitle.args = {
  children: 'Merchant Name',
  type: TypoTypes.CardTitle,
};

export const FinalPrice = Template.bind({});
FinalPrice.args = {
  children: '$2000.00',
  type: TypoTypes.FinalPrice,
};

export const UsualPrice = Template.bind({});
UsualPrice.args = {
  children: '$2299.00',
  type: TypoTypes.UsualPrice,
};

export const LongTitleSecondary = Template.bind({});
LongTitleSecondary.args = {
  children: 'Secondary description maximum 3 lines',
  type: TypoTypes.LongTitleSecondary,
};

export const LongTitlePrimary = Template.bind({});
LongTitlePrimary.args = {
  children: 'Primary description maximum 3 lines',
  type: TypoTypes.LongTitlePrimary,
};

export const UsualCashback = Template.bind({});
UsualCashback.args = {
  children: 'was 3%',
  type: TypoTypes.UsualCashback,
};

export const Cashback = Template.bind({});
Cashback.args = {
  children: 'Up to 95% Cashback',
  type: TypoTypes.Cashback,
};