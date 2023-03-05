---
name: "component"
root: "./components/ui/"
output: "**/*"
ignore: []
questions:
  name: "Please enter the name of the component (eg. footer)"
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { StoryObj, Meta } from '@storybook/react'

import { {{ inputs.name | pascal }} } from '.'

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: 'components/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
}

export default meta

type Story = StoryObj<typeof {{ inputs.name | pascal }}>

export const Primary: Story = {
  args:{}
}

```

# `{{ inputs.name | pascal }}/index.tsx`

```tsx

```
