import Icon from '@atoms/Icon/Icon'
import Link from '@atoms/Link/Link'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'
import PropTypes from 'prop-types'
import React from 'react'
import './SectionTitleBar.scss'

export interface ICta {
  href: string,
  label: string,
}

export interface ISectionTitleBarProps {
  title: string,
  icon?: string,
  cta?: ICta,
}

function SectionTitleBar({title, icon, cta}: ISectionTitleBarProps) {
  return (
    <div className={'molecule__section-title-bar'}>
      {icon ? (
        <div className={'molecule__section-title-bar__icon'}>
          <Icon type={icon} />
        </div>
      ) : null}
      <Typo className={'molecule__section-title-bar__title'} type={TypoTypes.StandardTitle}>{title}</Typo>
      {cta ? (
        <div className={'molecule__section-title-bar__ctas'}>
          <Link href={cta.href}>{cta.label}</Link>
        </div>
      ) : null}
    </div>
  )
}

SectionTitleBar.propTypes = {
  text: PropTypes.string
}

export default SectionTitleBar