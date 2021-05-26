import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'
import classnames from 'classnames'
import { kebabCase, get } from 'lodash'

import transformReactCustomStyles from '@utils/transformReactCustomStyles'

import './Typo.scss'

export enum TypoTypes {
  StandardTitle = 'Standard Title',
  CardTitle = 'Card Title',
  FinalPrice = 'Final Price',
  UsualPrice = 'Usual Price',
  LongTitleSecondary = 'Long Title Secondary',
  LongTitlePrimary = 'Long Title Primary',
  UsualCashback = 'Usual Cashback',
  Cashback = 'Cashback',
  ProgressBarLabel = 'ProgressBarLabel',
}

export interface ITypoProps {
  type?: TypoTypes
  className?: String
  elementTag?: String
  children: ReactChild
  customStyles?: object
}

const PREDEFINED_TAGS = {
  StandardTitle: 'h2',
}

function Typo({ elementTag, type, children, customStyles, className = '' }: ITypoProps) {
  const typoClasses = classnames(
    'atom__typo',
    `atom__typo--type-${kebabCase(type)}`,
    className,
  )
  const Tag: React.ElementType = elementTag || get(PREDEFINED_TAGS, `${type}`, 'p') as React.ElementType;
  return <Tag style={transformReactCustomStyles(customStyles)} className={typoClasses}>{children}</Tag>
}

Typo.propTypes = {
  children: PropTypes.node,
  type: PropTypes.number,
}

export default Typo