/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBarVisual from './ProgressBarVisual'

describe('ProgressBarVisual', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProgressBarVisual />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text ProgressBarVisual', () => {
    const { getByText } = render(
    <ProgressBarVisual />)
    expect(getByText('ProgressBarVisual'))
  })
})