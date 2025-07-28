import type { Meta, StoryObj } from "@storybook/react-vite";

import Pill from "./Pill";

const meta = {
  title: "base/Pill",
  component: Pill,
  tags: ["autodocs"],
  args: { children: "I am a Pill" },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
