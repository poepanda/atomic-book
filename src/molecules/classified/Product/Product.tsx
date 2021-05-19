import PropTypes from 'prop-types'
import React from 'react'

import Image, { ImageTypes } from '@atoms/Image/Image'
import Tag, { TagTypes } from '@atoms/Tag/Tag'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'

import './Product.scss'

export interface IMerchant {
  name: string,
}

export interface IProduct {
  merchant: IMerchant,
  price: string,
  usualPrice: string,
  description: string,
  usualCashback: string,
}

export interface IProductProps {
  product: IProduct
}

function Product({ product }: IProductProps) {
  const { merchant, price, usualPrice, description } = product;
  return (
    <div className={'molecule__product'}>
      <div className={'molecule__product__image-wrapper'}>
        <Tag className={'molecule__product__top-tag'} type={TagTypes.CalloutTopleft}>
          Top Tag
        </Tag>
      </div>
      <Image  details={{src: 'abc'}} />
      <Typo className={'molecule__product__merchant-name'} type={TypoTypes.MerchantName}>{merchant.name}</Typo>
      <Typo className={'molecule__product__price'} type={TypoTypes.FinalPrice}>{price}</Typo>
      {usualPrice ? <Typo type={TypoTypes.UsualPrice}>{usualPrice}</Typo> : null }
      <Typo className={'molecule__product__description'} type={TypoTypes.LongTitleSecondary}>{description}</Typo>
    </div>
  )
}

Product.propTypes = {
  text: PropTypes.string
}

export default Product