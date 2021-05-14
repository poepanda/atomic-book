/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'

describe('Product', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Product />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Product', () => {
    const { getByText } = render(
    <Product />)
    expect(getByText('Product'))
  })
})