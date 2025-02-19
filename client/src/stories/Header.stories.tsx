import type { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "../components/HeaderComponent";

const meta: Meta<typeof HeaderComponent> = {
  title: "Components/HeaderComponent",
  component: HeaderComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    currentPage: {
      control: "check",
      options: ["landing", "about", "team", "contact"],
    },
    user: {
      control: "object",
    },
    darkMode: {
        control: "boolean",
        description: "Toggles dark mode.",
      },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Default: Story = {
  args: {
    currentPage: ["landing", "about", "team", "contact"],
    user: null,
  },
};


export const LoggedIn: Story = {
  args: {
    currentPage: ["landing", "about", "team", "contact"],
    user: { name: "Jane Doe" },
  },
};

export const LoggedOut: Story = {
  args: {
    currentPage: ["landing", "about", "team", "contact"],
    user: null,
  },
};

export const DarkModeLoggedIn: Story = {
    args: {
      currentPage: ["landing", "about", "team", "contact"],
      user: { name: "Jane Doe" },
      darkMode: true,
    },
  };

export const DarkModeLoggedOut: Story = {
    args: {
      currentPage: ["landing", "about", "team", "contact"],
      user: null,
      darkMode: true,
    },
  };