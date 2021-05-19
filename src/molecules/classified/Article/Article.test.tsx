/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Article from './Article'

describe('Article', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Article />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Article', () => {
    const { getByText } = render(
    <Article />)
    expect(getByText('Article'))
  })
})