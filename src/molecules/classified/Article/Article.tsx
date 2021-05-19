import PropTypes from 'prop-types'
import React from 'react'

import map from 'lodash/map';

import Image, { ImageTypes } from '@atoms/Image/Image'
import Tag, { TagTypes } from '@atoms/Tag/Tag'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'

import './Article.scss'

interface ITag {
  type: TagTypes,
  label: string,
}

interface IArticle {
  title: string,
  description: string,
  topTag: ITag,
  tags: ITag[],
}

export interface IArticleProps {
  article: IArticle
}

function Article({ article }: IArticleProps) {
  const { title, description, topTag, tags } = article;
  return (
    <div className={'molecule__article'}>
      <div className={'molecule__article__image-wrapper'}>
        <Tag className={'molecule__article__top-tag'} type={topTag.type}>
          {topTag.label}
        </Tag>
      </div>
      <Image details={{src: 'abc'}} />
      <Typo className={'molecule__article__title'} type={TypoTypes.LongTitlePrimary}>{title}</Typo>
      <Typo className={'molecule__article__description'} type={TypoTypes.LongTitleSecondary}>{description}</Typo>
      {map(tags, tag => (
        <Tag className={'molecule__article__tag'} type={tag.type}>
          {tag.label}
        </Tag>
      ))}
    </div>
  )
}

Article.propTypes = {
  text: PropTypes.string
}

export default Article