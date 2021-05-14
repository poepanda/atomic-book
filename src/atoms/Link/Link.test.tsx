/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Link from './Link'

describe('Link', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Link />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Link', () => {
    const { getByText } = render(
    <Link />)
    expect(getByText('Link'))
  })
})