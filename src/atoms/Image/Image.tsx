import PropTypes from 'prop-types'
import React, { ReactChild, ReactHTMLElement } from 'react'
import map from 'lodash/map'
import get from 'lodash/get'
import classnames from 'classnames'
import './Image.scss'

export enum ImageTypes {
  ThumbnailLandscape = 'Thumbnail Landscape',
}

interface Sources {
  src?: string,
  width: number
}

interface ImageDetail {
  alt?: string
  sources?: Sources[]
  url?: string
  src: string
}
export interface IImageProps {
  className?: String
  details: ImageDetail
}

function Image({ details, className = '' }: IImageProps) {
  const { src, url, sources, alt, } = details
  const imageClasses = classnames(
    'atom__image',
    className,
  )
  const sourceTags : any[] = [];

  map(sources, (source) => {
    sourceTags.push(<source media={`(max-width: ${source.width}px)`} srcSet={source.src} />)
  })

  const _image = () => (
    <picture className={imageClasses}>
      {sourceTags}
      <img className={imageClasses} src={src} alt={alt} />
    </picture>
  )

  return url ? (
    <a className="atom__image__container" href={url}>
      {_image()}
    </a>
  ) : (
    <div className="atom__image__container">
      {_image()}
    </div>
    
  )
}

Image.propTypes = {
  children: PropTypes.node,
  type: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.string
}

export default Image