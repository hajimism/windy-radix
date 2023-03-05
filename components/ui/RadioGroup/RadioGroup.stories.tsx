import { StoryObj, Meta } from '@storybook/react'

import { RadioGroup } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'components/RadioGroup',
  component: RadioGroup,
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Primary: Story = {
  args:{}
}
