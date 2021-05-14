/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Tag from './Tag'

describe('Tag', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Tag />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Tag', () => {
    const { getByText } = render(
    <Tag />)
    expect(getByText('Tag'))
  })
})