import PropTypes from 'prop-types'
import React from 'react'

import Tag, { ITag, TagTypes } from '@atoms/Tag/Tag'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'
import MerchantLogo, { IMerchantLogoProps } from '@atoms/MerchantLogo/MerchantLogo'

import './Store.scss'

interface IMerchantLogo {
  src: string
  alt: string
  url: string
}

interface IStore {
  tag: ITag,
  merchant: IMerchantLogo,
  cashback: string,
  usualCashback: string,
}

export interface IStoreProps {
  store: IStore
}

function Store({ store }: IStoreProps) {
  const { tag, merchant, cashback, usualCashback } = store;
  return (
    <div className={'molecule__store'}>
      <Tag className={'molecule__store__top-tag'} type={tag.type}>
        {tag.label}
      </Tag>
      <MerchantLogo className="molecule__store__merchant" {...merchant} />
      <Typo className={'molecule__store__cashback'} type={TypoTypes.Cashback}>{cashback}</Typo>
      { usualCashback ? <Typo type={TypoTypes.UsualCashback}>{usualCashback}</Typo> : null }
    </div>
  )
}

Store.propTypes = {
  text: PropTypes.string
}

export default Store