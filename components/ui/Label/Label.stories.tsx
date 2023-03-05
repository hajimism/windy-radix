import { StoryObj, Meta } from "@storybook/react";

import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "components/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "this is a label",
  },
};
