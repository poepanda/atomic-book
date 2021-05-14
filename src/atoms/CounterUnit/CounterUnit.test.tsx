/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import CounterUnit from './CounterUnit'

describe('CounterUnit', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CounterUnit />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text CounterUnit', () => {
    const { getByText } = render(
    <CounterUnit />)
    expect(getByText('CounterUnit'))
  })
})