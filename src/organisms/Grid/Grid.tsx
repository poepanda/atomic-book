import PropTypes from 'prop-types'
import React from 'react'
import map from 'lodash/map'

import Product, { IProduct } from '@molecules/Product/Product'
import Offer from '@molecules/Offer/Offer'
import Article from '@molecules/Article/Article'

import SectionTitleBar, { ICta } from '@molecules/SectionTitleBar/SectionTitleBar'

import './Grid.scss'

export enum GridItemTypes {
  product = 'product',
  offer = 'offer',
}

export interface IGridProps {
  title: string,
  cta: ICta,
  items: any[],
  type: GridItemTypes,
}

const ITEM_BY_TYPE = {
  product: Product,
  offer: Offer,
  article: Article,
}

function ProductGrid({ title, cta, type, items }: IGridProps) {
  const ItemComponent = ITEM_BY_TYPE[type]
  return (
    <div className={'organism__product-grid'}>
      <div className={'organism__product-grid__title'}>
        <SectionTitleBar title={title} cta={cta} />
      </div> 
      {map(items, (item) => {
        const props = { [type]: item }
        return (
          <div className={'organism__product-grid__product'}>
            <ItemComponent {...props} />
          </div>
        )
      })}
    </div>
  )
}

ProductGrid.propTypes = {
  text: PropTypes.string
}

export default ProductGrid