/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProgressBar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text ProgressBar', () => {
    const { getByText } = render(
    <ProgressBar />)
    expect(getByText('ProgressBar'))
  })
})