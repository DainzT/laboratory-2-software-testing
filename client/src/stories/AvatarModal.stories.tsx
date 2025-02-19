import { Meta, StoryObj } from "@storybook/react";
import Avatar, { UserData } from "../../src/components/AvatarModal";
import { BrowserRouter } from "react-router-dom";
import { userEvent, within } from "@storybook/test";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: 'centered',
      },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
  } satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        onClick: action("Avatar clicked"),
     },
     render: () => <Avatar />
};

export const OpenDropdown: Story = {
    args: {
        onClick: action("Dropdown toggled"),
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const userButton = await canvas.getByRole("button");
      await userEvent.click(userButton);
    },
};

export const OpenSettings: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const userButton = await canvas.getByRole("button");
      await userEvent.click(userButton);

      const settingsItem = await canvas.getByText("Settings");
      await userEvent.click(settingsItem);
    },
  };

export const Logout: Story = {
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const userButton = await canvas.getByRole("button");
      await userEvent.click(userButton);
  
      const logoutButton = await canvas.getByText("Log out");
      await userEvent.click(logoutButton);
    },
  };

export const WithUserData: Story = {
args: {
    user: {
        name: "John Doe",
        email: "john@example.com",
    },
    },
};

