import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

import './MerchantLogo.scss'

export interface IMerchantLogoProps {
  src: string
  alt: string
  url?: string
  className?: string
}

function MerchantLogo({src, alt, url, className}: IMerchantLogoProps) {
  const classes = classnames(
    'atom__merchant-logo',
    className,
  )
  return (
    <a href={url} className={classes}>
      <img src={src} alt={alt} />
    </a>
  )
}

MerchantLogo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string
}

export default MerchantLogo