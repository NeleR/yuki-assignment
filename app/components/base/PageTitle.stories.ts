import type { Meta, StoryObj } from "@storybook/react-vite";

import PageTitle from "./PageTitle";

const meta = {
  title: "base/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  args: { children: "i am a PageTitle" },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
