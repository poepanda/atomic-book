import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('Button', () => {
  test('finds text', () => {
    const { getByText } = render(<Button onClick={() => {}}>test</Button>)
    expect(getByText('test'))
  })

  test('onClick fires', () => {
    const handler = jest.fn((e) => e.preventDefault())
    const { getByText } = render(<Button onClick={handler}>test</Button>)
    fireEvent.click(getByText('test'))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
