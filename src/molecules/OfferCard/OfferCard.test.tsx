/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import OfferCard from './OfferCard'

describe('OfferCard', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<OfferCard />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text OfferCard', () => {
    const { getByText } = render(
    <OfferCard />)
    expect(getByText('OfferCard'))
  })
})