import PropTypes from 'prop-types'
import React from 'react'

import Image, { ImageTypes } from '@atoms/Image/Image'
import Tag, { ITag, TagTypes } from '@atoms/Tag/Tag'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'
import MerchantLogo, { IMerchantLogoProps } from '@atoms/MerchantLogo/MerchantLogo'

import './Offer.scss'
import { TopTag } from '@atoms/Tag/Tag.stories'

interface IMerchantLogo {
  src: string
  alt: string
  url: string
}

interface IOffer {
  topTag: ITag,
  merchant: IMerchantLogo,
  cashback: string,
  usualCashback: string,
  description: string,
}

export interface IOfferProps {
  offer: IOffer
}

function Offer({ offer }: IOfferProps) {
  const { topTag, merchant, cashback, usualCashback, description } = offer;
  return (
    <div className={'molecule__offer'}>
      <div className={'molecule__offer__image-wrapper'}>
        <Tag className={'molecule__offer__top-tag'} type={topTag.type}>
          {topTag.label}
        </Tag>
      </div>
      <Image type={ImageTypes.ThumbnailLandscape} />
      <MerchantLogo className="molecule__offer__merchant" {...merchant} />
      <Typo className={'molecule__offer__cashback'} type={TypoTypes.Cashback}>{cashback}</Typo>
      { usualCashback ? <Typo type={TypoTypes.UsualCashback}>{usualCashback}</Typo> : null }
      <Typo className={'molecule__offer__description'} type={TypoTypes.LongTitleSecondary}>{description}</Typo>
    </div>
  )
}

Offer.propTypes = {
  text: PropTypes.string
}

export default Offer