import { action } from '@storybook/addon-actions'
import React from 'react'
import { getConfig } from '@scripts/storybook/storyConfig'
import Button from './Button'

export default getConfig({
  title: 'Atoms/Button',
  component: Button,
})

export function Basic() {
  return <Button onClick={action('button-click')}>Button</Button>
}
