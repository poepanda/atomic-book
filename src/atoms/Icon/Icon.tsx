import PropTypes from 'prop-types'
import React from 'react'
import get from 'lodash/get'
import './Icon.scss'

import icons from './icons'

export interface IIconProps {
  size?: number
  fill?: string
  type: string 
}

export const ICONS = icons;

function Icon({ type, size, fill }: IIconProps) {
  const Icon = get(icons, type, null);
  return Icon ? <Icon size={size} fill={fill} /> : null;
}

Icon.propTypes = {
  text: PropTypes.string
}

export default Icon