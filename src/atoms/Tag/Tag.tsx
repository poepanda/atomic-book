import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'
import kebabCase from 'lodash/kebabCase'
import classnames from 'classnames'
import './Tag.scss'

export enum TagTypes {
  Common = 'Common',
  CalloutTopleft = 'CalloutTopleft',
}

export interface ITagProps {
  type?: TagTypes,
  className?: String,
  children: ReactChild,
}

function Tag({ type, children, className = '' }: ITagProps) {
  const divClasses = classnames(
    'atom__tag',
    `atom__tag--type-${kebabCase(type)}`,
    className,
  )
  return <div className={divClasses}>{children}</div>
}

Tag.propTypes = {
  children: PropTypes.node,
  type: PropTypes.number,
}

export default Tag