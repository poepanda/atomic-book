import PropTypes from 'prop-types'
import React from 'react'
import './Sticker.scss'

export interface IStickerProps {}

function Sticker({}: IStickerProps) {
  return <div className={'atom__sticker'}>Sticker</div>
}

Sticker.propTypes = {
  text: PropTypes.string
}

export default Sticker