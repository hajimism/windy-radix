import type { Preview } from "@storybook/react";
import React from "react";
import "../style/tailwind.css";

import RootLayout from "../app/layout";

export const decorators = [
  (Story) => (
    <RootLayout>
      <Story />
    </RootLayout>
  ),
];

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
