import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta = {
  title: "base/Card",
  component: Card,
  tags: ["autodocs"],
  args: { children: "I am a card" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hoverable: Story = {
  args: {
    hoverable: true,
  },
};
