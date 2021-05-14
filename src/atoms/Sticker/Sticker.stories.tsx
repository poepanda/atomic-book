import {Story} from "@storybook/react";
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Sticker, { IStickerProps } from './Sticker'

export default getConfig({ title: 'atoms/Sticker', component: Sticker })

const Template: Story<IStickerProps> = (args: IStickerProps) => <Sticker {...args}></Sticker>;

export const Common = Template.bind({});
Common.args = {};