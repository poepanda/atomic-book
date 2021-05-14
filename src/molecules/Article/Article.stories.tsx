import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Article, { IArticleProps } from './Article'

import { COMMON_ARTICLE } from "./mock-data";

export default getConfig({ title: 'molecules/Article', component: Article })

const Template: Story<IArticleProps> = (args: IArticleProps) => (
  <div className="card-container">
    <Article {...args}></Article>
  </div>
);
export const Common = Template.bind({});
Common.args = {
  article: COMMON_ARTICLE
};