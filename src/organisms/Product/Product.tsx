import PropTypes from 'prop-types'
import React from 'react'

import Typo, { TypoTypes } from '@atoms/Typo/Typo';
import Tag, { TagTypes } from '@atoms/Tag/Tag';
import ProgressBar from '@molecules/ProgressBar/ProgressBar';

import './Product.scss'

export interface IProductProps {}

function Product({}: IProductProps) {
  return <div className={'atom__product'}>Product</div>
}

Product.propTypes = {
  text: PropTypes.string
}

export default Product