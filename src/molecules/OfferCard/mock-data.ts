import { OverlayInfoTag } from "./OfferCard.interfaces"

export const FULL_CONFIG_OFFER_CARD_COMMON = {
  callout: {
    text: 'New on ShopBack',
  },
  merchant: {
    logoSrc: 'https://img.shopback.sg/vL8iTnnDlUc/rs:fit/w:480/h:0/g:ce/el:0/q:80/bl:0/aHR0cHM6Ly9jbG91ZC5zaG9wYmFjay5jb20vdF9zZF8yNTBfcGFkL3N0b3JlLXNlcnZpY2Utc2cvYXNzZXRzLzE4MTg5LzI2ZjkyOTUwLWE2NGMtMTFlYS04OWViLTI3OTViNmUzYjUzYi5wbmc.webp',
    logoAlt: 'Adidas',
    name: 'Adidas',
    url: 'http://www.shopback.sg/adidas'
  },
  contentInfo: [
    {
      tag: 'title',
      text: 'Adidas Offer',
      textColor: '#187F55',
    },
    {
      tag: 'finalCashback',
      format: 'Up to [value] Cashback',
      value: '95%'
    },
    {
      tag: 'usualCashback',
      text: 'was 3%'
    },
    {
      tag: 'price',
      finalPrice: '$2000.00',
      usualPrice: '$1599.00'
    },
    {
      tag: 'progress',
      text: '25% Sold',
      percentage: 25
    },
    {
      tag: 'longTitle',
      text: 'Adidas best offer of all times! Only June!',
    },
    {
      tag: 'blurbs',
      labels: [
        {
          text: 'Love it',
          backgroundColor: '#A16124'
        },
        {
          text: 'Do you?',
        },
      ]
    },
  ],
  imageInfo: {
    src: 'https://cloud.shopback.com/image/upload/v1617424941/app-assets/SG%202021%20Assets/20210403/uhs%20tiles/isetan.png',
    alt: '',
    overlayInfo: [
      {
        tag: OverlayInfoTag['like'],
        text: '99',
      },
      {
        tag: OverlayInfoTag['userName'],
        text: 'sg_jap_anime',
      },
    ]
  }
}

export const MERCHANT_CARD_COMMON = {
  callout: {
    text: 'New',
  },
  merchant: {
    logoSrc: 'https://img.shopback.sg/vL8iTnnDlUc/rs:fit/w:480/h:0/g:ce/el:0/q:80/bl:0/aHR0cHM6Ly9jbG91ZC5zaG9wYmFjay5jb20vdF9zZF8yNTBfcGFkL3N0b3JlLXNlcnZpY2Utc2cvYXNzZXRzLzE4MTg5LzI2ZjkyOTUwLWE2NGMtMTFlYS04OWViLTI3OTViNmUzYjUzYi5wbmc.webp',
    logoAlt: 'Adidas',
    name: 'Adidas',
    url: 'http://www.shopback.sg/adidas'
  },
  contentInfo: [
    {
      tag: 'finalCashback',
      format: 'Up to [value] Cashback',
      value: '95%'
    },
    {
      tag: 'usualCashback',
      text: 'was 3%'
    }
  ]
}

export const MERCHANT_CARD_UPSIZED = {
  callout: {
    text: 'Upsized',
    isUpsized: true
  },
  merchant: {
    logoSrc: 'https://img.shopback.sg/vL8iTnnDlUc/rs:fit/w:480/h:0/g:ce/el:0/q:80/bl:0/aHR0cHM6Ly9jbG91ZC5zaG9wYmFjay5jb20vdF9zZF8yNTBfcGFkL3N0b3JlLXNlcnZpY2Utc2cvYXNzZXRzLzE4MTg5LzI2ZjkyOTUwLWE2NGMtMTFlYS04OWViLTI3OTViNmUzYjUzYi5wbmc.webp',
    logoAlt: 'Adidas',
    name: 'Adidas',
    url: 'http://www.shopback.sg/adidas'
  },
  contentInfo: [
    {
      tag: 'finalCashback',
      format: 'Up to [value] Cashback',
      value: '95%'
    },
    {
      tag: 'usualCashback',
      text: 'was 3%'
    }
  ]
}