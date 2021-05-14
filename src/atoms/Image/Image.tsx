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
  alt?: string,
  src?: string,
}

function Image({ type, alt, src, className = '' }: IImageProps) {
  const divClasses = classnames(
    'atom__image',
    `atom__image--type-${kebabCase(type)}`,
    className,
  )
  // return <div className={divClasses}></div>
  return <img className={divClasses} alt={alt} src={src || 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png'} />
}

Image.propTypes = {
  children: PropTypes.node,
  type: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.string
}

export default Image