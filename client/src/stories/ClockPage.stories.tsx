import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ClockPage from "../pages/ClockPage";

const meta = {
  title: "Pages/ClockPage",
  component: ClockPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    darkMode: false,
    size: "small",
  },
  argTypes: {
    darkMode: { control: "boolean" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof ClockPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultView: Story = {
  parameters: {
    viewport: { defaultViewport: "responsive" },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
};