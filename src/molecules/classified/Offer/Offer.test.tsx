/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Offer from './Offer'

describe('Offer', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Offer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Offer', () => {
    const { getByText } = render(
    <Offer />)
    expect(getByText('Offer'))
  })
})