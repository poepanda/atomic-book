/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Store from './Store'

describe('Store', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Store />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Store', () => {
    const { getByText } = render(
    <Store />)
    expect(getByText('Store'))
  })
})