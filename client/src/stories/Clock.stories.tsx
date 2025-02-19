import { Meta, StoryObj } from "@storybook/react";
import Clock from "../components/ClockComponent";

const meta: Meta<typeof Clock> = {
  title: "Components/Clock",
  component: Clock,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Adjusts the clock size.",
    },
    darkMode: {
      control: "boolean",
      description: "Toggles dark mode.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clock>;

// Default Clock
export const Default: Story = {
  args: {},
};

// Small Clock
export const Small: Story = {
  args: {
    size: "small",
  },
};

// Large Clock
export const Large: Story = {
  args: {
    size: "large",
  },
};

// Dark Mode Clock
export const DarkMode: Story = {
  args: {
    darkMode: true,
  },
};
