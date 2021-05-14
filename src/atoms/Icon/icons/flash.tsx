import React from 'react';
import { IIconProps } from '../Icon'

export default ({ size, fill }: IIconProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7672 0H9.06718C8.46719 0 7.86719 0.45 7.56718 1.05L4.56719 11.55C4.26719 12.6 5.01718 13.5 5.91718 13.5H11.4672L9.21719 24L20.1672 9.9C20.9172 9 20.1672 7.5 18.9672 7.5H14.4672L16.1172 1.95C16.4172 0.9 15.6672 0 14.7672 0Z" fill={fill || '#FFBC00'}/>
  </svg>
)