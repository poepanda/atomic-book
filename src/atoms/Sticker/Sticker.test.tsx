/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Sticker from './Sticker'

describe('Sticker', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sticker />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Sticker', () => {
    const { getByText } = render(
    <Sticker />)
    expect(getByText('Sticker'))
  })
})