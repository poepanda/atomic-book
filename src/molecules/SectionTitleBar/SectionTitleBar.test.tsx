/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import SectionTitleBar from './SectionTitleBar'

describe('SectionTitleBar', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SectionTitleBar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text SectionTitleBar', () => {
    const { getByText } = render(
    <SectionTitleBar />)
    expect(getByText('SectionTitleBar'))
  })
})