import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'
import kebabCase from 'lodash/kebabCase'
import classnames from 'classnames'
import './Tag.scss'

export enum TagTypes {
  Common = 'Common',
  CalloutTopleft = 'Callout Top Left',
  UpsizedCalloutTopLeft = 'Upsized Callout Top Left',
}

export interface ITag {
  label: string,
  type: TagTypes,
}
export interface ITagProps {
  type?: TagTypes,
  className?: String,
  children: ReactChild,
}

const UpsizeIcon = () => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.21967C4.76256 -0.0732233 5.23744 -0.0732233 5.53033 0.21967L9.28033 3.96967C9.57322 4.26256 9.57322 4.73744 9.28033 5.03033C8.98744 5.32322 8.51256 5.32322 8.21967 5.03033L5.75 2.56066V11.25C5.75 11.6642 5.41421 12 5 12C4.58579 12 4.25 11.6642 4.25 11.25V2.56066L1.78033 5.03033C1.48744 5.32322 1.01256 5.32322 0.71967 5.03033C0.426777 4.73744 0.426777 4.26256 0.71967 3.96967L4.46967 0.21967Z" fill="white"/>
  </svg>
)

function Tag({ type, children, className = '' }: ITagProps) {
  const divClasses = classnames(
    'atom__tag',
    `atom__tag--type-${kebabCase(type)}`,
    className,
  )
  return (
    <div className={divClasses}>
      { type === TagTypes.UpsizedCalloutTopLeft ? <UpsizeIcon /> : null }
      {children}
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.node,
  type: PropTypes.number,
}

export default Tag