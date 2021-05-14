/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import MerchantLogo from './MerchantLogo'

describe('MerchantLogo', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MerchantLogo />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text MerchantLogo', () => {
    const { getByText } = render(
    <MerchantLogo />)
    expect(getByText('MerchantLogo'))
  })
})