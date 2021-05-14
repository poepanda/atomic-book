/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import ProductGrid from './ProductGrid'

describe('ProductGrid', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProductGrid />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text ProductGrid', () => {
    const { getByText } = render(
    <ProductGrid />)
    expect(getByText('ProductGrid'))
  })
})