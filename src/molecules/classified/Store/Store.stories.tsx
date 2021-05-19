import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Store, { IStoreProps } from './Store'

import { COMMON_STORE } from "./mock-data";

export default getConfig({ title: 'molecules/classified/Store', component: Store })

const Template: Story<IStoreProps> = (args: IStoreProps) => (
  <div className="card-container">
    <Store {...args}></Store>
  </div>
);

export const Common = Template.bind({});
Common.args = {
  store: COMMON_STORE
};