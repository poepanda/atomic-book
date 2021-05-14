import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import MerchantLogo, { IMerchantLogoProps } from './MerchantLogo'

export default getConfig({ title: 'atoms/MerchantLogo', component: MerchantLogo })

const Template: Story<IMerchantLogoProps> = (args: IMerchantLogoProps) => (
  <div style={{width: '210px'}}>
    <MerchantLogo {...args}></MerchantLogo>
  </div>
);

export const Common = Template.bind({});
Common.args = {
  src: 'https://img.shopback.sg/vL8iTnnDlUc/rs:fit/w:480/h:0/g:ce/el:0/q:80/bl:0/aHR0cHM6Ly9jbG91ZC5zaG9wYmFjay5jb20vdF9zZF8yNTBfcGFkL3N0b3JlLXNlcnZpY2Utc2cvYXNzZXRzLzE4MTg5LzI2ZjkyOTUwLWE2NGMtMTFlYS04OWViLTI3OTViNmUzYjUzYi5wbmc.webp',
  url: 'http://shopback.sg/adidas',
  alt: 'Adidas'
};