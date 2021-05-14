/* eslint-disable no-console */
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Typo from './Typo'

describe('Typo', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Typo />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('Find component with text Typo', () => {
    const { getByText } = render(
    <Typo />)
    expect(getByText('Typo'))
  })
})