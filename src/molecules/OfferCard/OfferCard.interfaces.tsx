interface Callout {
  text: string
  textColor?: string  
  backgroundColor?: string
}

export enum OverlayInfoTag {
  like = 'like',
  userName = 'userName',
  location = 'location',
}

interface OverlayInfo {
  tag: OverlayInfoTag,
  text: string,
}

interface ImageInfo {
  src: string
  alt?: string
  sticker?: any
  overlayInfo?: OverlayInfo[]
}

interface Merchant {
  logoSrc: string
  logoAlt?: string
  name: string
  url?: string
}

export enum ContentInfoTypes {
  title = 'title',
  longTitle = 'longTitle',
  finalCashback = 'finalCashback',
  usualCashback = 'usualCashback',
  progress = 'progress',
  price = 'price',
  blurbs = 'blurbs',
}

interface contentInfoTitle {
  tag: ContentInfoTypes.title
  alignment?: string
  fontSize?: number
  textColor?: number
  backgroundColor?: string
  text: string
  maxLines: number
}

interface contentInfoFinalCashback {
  tag: ContentInfoTypes.title
  format: string,
  value: string
}

interface contentInfoUsualCashback {
  tag: ContentInfoTypes.usualCashback
  text: string
}

interface contentInfoPrice {
  tag: ContentInfoTypes.price
  finalPrice: string
  usualPrice: string
}

interface contentInfoLongTitle {
  tag: ContentInfoTypes.longTitle
  text: string
  textColor?: string
  maxLines?: number
}

interface contentInfoProgress {
  tag: ContentInfoTypes.progress
  text?: string
  textString?: string
  percentage: number
}

interface Blurb {
  tag: ContentInfoTypes.blurbs
  text: string
  textColor?: string
  backgroundColor?: string
}

interface contentInfoBlurbs {
  labels: Blurb[]
}

export type ContentInfo = contentInfoTitle |
  contentInfoFinalCashback |
  contentInfoUsualCashback |
  contentInfoPrice |
  contentInfoLongTitle |
  contentInfoProgress |
  contentInfoBlurbs

export interface OfferContent {
  callout?: Callout
  imageInfo?: ImageInfo
  merchant?: Merchant
  contentInfo?: ContentInfo[]
}
