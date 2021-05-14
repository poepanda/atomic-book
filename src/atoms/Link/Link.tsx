import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'
import './Link.scss'

export interface ILinkProps {
  href: string,
  children: ReactChild
}

function Link({ href, children }: ILinkProps) {
  return (
    <a className={'atom__link'} href={href}>
      {children}
    </a>
  )
}

Link.propTypes = {
  text: PropTypes.string
}

export default Link