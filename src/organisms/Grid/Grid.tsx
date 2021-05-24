import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { map, kebabCase } from 'lodash'

import OfferCard from '@molecules/OfferCard/OfferCard'
import Image from '@atoms/Image/Image'

import SectionTitleBar, { ICta } from '@molecules/SectionTitleBar/SectionTitleBar'

import './Grid.scss'

export enum GridItemTypes {
  offerCard = 'offerCard',
  banner = 'banner'
}

export interface IGridProps {
  title: string,
  titleIcon: string,
  cta?: ICta,
  items: any[],
  type: GridItemTypes,
  numOfCols?: number,
}

const ITEM_BY_TYPE = {
  [GridItemTypes.offerCard]: OfferCard,
  [GridItemTypes.banner]: Image
}

function ProductGrid({ title, titleIcon, cta, type, items, numOfCols }: IGridProps) {
  const ItemComponent = ITEM_BY_TYPE[type]
  const colClass = `organism__grid--cols-${numOfCols}`
  const classes = classnames(
    'organism__grid',
    { [colClass]: numOfCols && type === GridItemTypes.banner }
  )
  return (
    <div className={classes}>
      <div className={'organism__grid__title'}>
        <SectionTitleBar icon={titleIcon} title={title} cta={cta} />
      </div> 
      <div className={'organism__grid__content'}>
        {map(items, ({ details, ...props }) => {
          return (
            <div className={`organism__grid__${kebabCase(type)}`}>
              <ItemComponent details={details} {...props} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

ProductGrid.propTypes = {
  text: PropTypes.string
}

export default ProductGrid