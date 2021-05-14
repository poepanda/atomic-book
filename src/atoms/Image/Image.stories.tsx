import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Image, { IImageProps, ImageTypes } from './Image'

export default getConfig({ title: 'atoms/Image', component: Image })

const Template: Story<IImageProps> = (args: IImageProps) => <Image {...args}></Image>;

export const ThumbnailLandscape = Template.bind({});
ThumbnailLandscape.args = {
  type: ImageTypes.ThumbnailLandscape
};

export const BannerPortrait = Template.bind({});
BannerPortrait.args = {
  type: ImageTypes.BannerPortrait
};