/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Image from './Image'

describe('Image', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Image />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Image', () => {
    const { getByText } = render(
    <Image />)
    expect(getByText('Image'))
  })
})