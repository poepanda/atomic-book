/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import CounterUnitConnector from './CounterUnitConnector'

describe('CounterUnitConnector', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CounterUnitConnector />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text CounterUnitConnector', () => {
    const { getByText } = render(
    <CounterUnitConnector />)
    expect(getByText('CounterUnitConnector'))
  })
})