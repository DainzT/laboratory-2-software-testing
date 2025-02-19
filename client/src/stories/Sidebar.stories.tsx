import type { Meta, StoryObj, ReactRenderer } from "@storybook/react";
import { ArgsStoryFn } from "storybook/internal/types";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./SidebarComponent";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    addButtons: {
      control: { type: "number", min: 1, max: 6 },
      description: "Number of buttons to add to the sidebar",
      defaultValue: 6,
      name: "addButtons (1-6)",
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: ArgsStoryFn<ReactRenderer, { isMobile?: boolean; addButtons?: number }> = (args) => (
  <BrowserRouter>
    <Sidebar {...args} addButtons={Math.min(args.addButtons || 6, 6)} />
  </BrowserRouter>
);

export const Desktop: Story = {
  render: Template,
  args: {
    isMobile: false,
    addButtons: 6,
  },
};

export const Mobile: Story = {
  render: Template,
  args: {
    isMobile: false,
    addButtons: 6,
  },
};

export const ManyButtons: Story = {
  render: Template,
  args: {
    isMobile: false,
    addButtons: 6,
  },
};