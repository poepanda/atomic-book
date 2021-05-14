/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icon'

describe('Icon', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Icon />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Icon', () => {
    const { getByText } = render(
    <Icon />)
    expect(getByText('Icon'))
  })
})