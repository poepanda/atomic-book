/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import ProductCarousel from './ProductCarousel'

describe('ProductCarousel', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProductCarousel />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text ProductCarousel', () => {
    const { getByText } = render(
    <ProductCarousel />)
    expect(getByText('ProductCarousel'))
  })
})