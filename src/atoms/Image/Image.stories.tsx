import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Image, { IImageProps, ImageTypes } from './Image'
import { BANNER_SAMPLE_1 } from "./mock-data";

export default getConfig({ title: 'atoms/Image', component: Image })

interface IImageStory extends IImageProps {
  containerStyles: React.CSSProperties
}

const Template: Story<IImageStory> = ({containerStyles, ...args}: IImageStory) => (
  <div style={containerStyles || {maxWidth: '256px'}}>
    <Image {...args}></Image>
  </div>
);

export const ThumbnailLandscape = Template.bind({});
ThumbnailLandscape.args = {
  containerStyles: {
    width: '256px',
    height: '120px',
  },
  details: {
    src: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png',
  }
  // type: ImageTypes.ThumbnailLandscape
};

export const BannerPortrait = Template.bind({});
BannerPortrait.args = {
  containerStyles: {
    width: '213px',
    height: '273px',
  },
  details: {
    src: "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
  }
  // type: ImageTypes.BannerPortrait
};

export const SampleAdaptImage = Template.bind({});
SampleAdaptImage.args = {
  details: {
    ...BANNER_SAMPLE_1,
  },
  containerStyles: {
    width: '100%',
  },
};