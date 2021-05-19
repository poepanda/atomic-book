import PropTypes from 'prop-types'
import React from 'react'
import lodash, { map, template } from 'lodash'

import { OfferContent, ContentInfoTypes, ContentInfo } from './OfferCard.interfaces'
import Image from '@atoms/Image/Image'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'
import MerchantLogo from '@atoms/MerchantLogo/MerchantLogo'

import './OfferCard.scss'
import ProgressBar from '@molecules/ProgressBar/ProgressBar'
import Tag, { TagTypes } from '@atoms/Tag/Tag'

lodash.templateSettings = { interpolate: /\[(.+?)\]/g }

export interface IOfferCardProps {
  details: OfferContent,
}

function OfferCard({ details }: IOfferCardProps) {
  console.log('offer detail -> ', details)

  const { imageInfo, merchant, contentInfo, callout } = details;

  const _callout = () => {
    const { text, isUpsized, ...customStyles } = callout;
    return (
      <div className={'molecule__offer-card__callout'}>
        <Tag type={isUpsized ? TagTypes.UpsizedCalloutTopLeft : TagTypes.CalloutTopleft} customStyles={customStyles}>
          {text}
        </Tag>
      </div>
    )
  }

  const _thumbnail = () => imageInfo ? (
    <div className={'molecule__offer-card__thumbnail'}>
      {callout ? _callout() : null}
      <Image details={{src: imageInfo.src, alt: imageInfo.alt || ''}} />
    </div>
  ) : null

  const _merchant = () => merchant ? (
    <div className={'molecule__offer-card__merchant'}>
      {callout && !imageInfo ? _callout() : null}
      <MerchantLogo src={merchant.logoSrc} alt={merchant.logoAlt || ''} />
    </div>
  ) : null

  const _contentInfo = () => contentInfo ? map(contentInfo, (info: any) => {
    switch(info.tag) {
      case ContentInfoTypes.title: {
        const { text, ...customStyles } = info
        return (
          <div className={'molecule__offer__content-info'}>
            <Typo type={TypoTypes.CardTitle} customStyles={customStyles}>
              {info.text}
            </Typo>
          </div>
        )
      }
      case ContentInfoTypes.finalCashback: {
        const { format, value } = info;
        const cashbackTextTemplate = template(format)
        const cashbackText = cashbackTextTemplate({ value: `<strong>${value}</strong>` })
        return (
          <div className={'molecule__offer__content-info'}>
            <Typo type={TypoTypes.Cashback}>
              <span dangerouslySetInnerHTML={{ __html: cashbackText }}></span>
            </Typo>
          </div>
        )
      }
      case ContentInfoTypes.price: {
        return (
          <div className={'molecule__offer__content-info'}>
            <Typo type={TypoTypes.FinalPrice}>
              {info.finalPrice}
            </Typo>
            <Typo type={TypoTypes.UsualPrice}>
              {info.usualPrice}
            </Typo>
          </div>
        )
      }
      case ContentInfoTypes.usualCashback: {
        return (
          <div>
            <Typo type={TypoTypes.UsualCashback}>
              {info.text}
            </Typo>
          </div>
        )
      }
      case ContentInfoTypes.progress: {
        return (
          <div className={'molecule__offer__content-info'}>
            <ProgressBar label={info.text} percentage={info.percentage} />
          </div>
        )
      }
      case ContentInfoTypes.longTitle: {
        const { text, ...customStyles } = info
        return (
          <div className={'molecule__offer__content-info'}>
            <Typo type={TypoTypes.LongTitlePrimary} customStyles={customStyles}>
              {text}
            </Typo>
          </div>
        )
      }
      case ContentInfoTypes.blurbs: {
        return (
          <div className={'molecule__offer__content-info'}>
            {
              map(info.labels, (tag) => {
                const { text, ...customStyles } = tag
                console.log('custom styles -> ', customStyles)
                return (
                  <Tag type={TagTypes.Common} customStyles={customStyles}>
                    {text}
                  </Tag>
                )
              })
            }
          </div>
        )
      }
    }
  }) : null

  return (
    <div className={'molecule__offer-card'}>
      {_thumbnail()}
      {_merchant()}
      {_contentInfo()}
    </div>
  )
}

OfferCard.propTypes = {
  text: PropTypes.string
}

export default OfferCard