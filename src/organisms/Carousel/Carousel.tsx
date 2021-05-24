import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import classnames from 'classnames'
import { map, kebabCase } from 'lodash'

import OfferCard from '@molecules/OfferCard/OfferCard'
import Image from '@atoms/Image/Image'
import SectionTitleBar, { ICta } from '@molecules/SectionTitleBar/SectionTitleBar'

import carouselBrekpoints from './Carousel.breakpoints'

import 'swiper/swiper.scss';
import './Carousel.scss'

SwiperCore.use([Navigation]);

export enum CarouselItemTypes {
  offerCard = 'offerCard',
  banner = 'banner'
}

export interface ICarouselProps {
  title: string,
  titleIcon: string,
  cta?: ICta,
  items: any[],
  type: CarouselItemTypes,
  numOfCols?: number,
}

const ITEM_BY_TYPE = {
  [CarouselItemTypes.offerCard]: OfferCard,
  [CarouselItemTypes.banner]: Image
}

function ProductCarousel({ title, titleIcon, cta, type, items, numOfCols }: ICarouselProps) {
  const ItemComponent = ITEM_BY_TYPE[type]
  const colClass = `organism__carousel--cols-${numOfCols}`
  const classes = classnames(
    'organism__carousel',
    { [colClass]: numOfCols && type === CarouselItemTypes.banner }
  )

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const breakpoints = carouselBrekpoints['default']
  return (
    <div className={classes}>
      <div className={'organism__carousel__title'}>
        <SectionTitleBar icon={titleIcon} title={title} cta={cta} />
      </div> 
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={true}
        breakpoints={breakpoints}
        className={'organism__carousel__content'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {map(items, ({ details, ...props }) => {
          return (
            <SwiperSlide className={`organism__carousel__${kebabCase(type)}`}>
              <ItemComponent details={details} {...props} />
            </SwiperSlide>
          )
        })}
        <div className="organism__carousel__prev-arrow" ref={prevRef}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#40485A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="organism__carousel__next-arrow" ref={nextRef}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#40485A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </Swiper>
    </div>
  )
}

ProductCarousel.propTypes = {
  text: PropTypes.string
}

export default ProductCarousel