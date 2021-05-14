import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'
import kebabCase from 'lodash/kebabCase'
import classnames from 'classnames'
import './Image.scss'

export enum ImageTypes {
  ThumbnailLandscape = 'Thumbnail Landscape',
  BannerPortrait = 'Banner Portrait',
}

export interface IImageProps {
  type?: ImageTypes,
  className?: String,
  children: ReactChild,
}

function Image({ type, children, className = '' }: IImageProps) {
  const divClasses = classnames(
    'atom__image',
    `atom__image--type-${kebabCase(type)}`,
    className,
  )
  return <div className={divClasses}>{children}</div>
}

Image.propTypes = {
  children: PropTypes.node,
  type: PropTypes.number,
}

export default Image