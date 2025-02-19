import { Meta, StoryObj } from '@storybook/react';
import LogInOut from '../components/logInOutComponent';

const meta = {
  title: 'Components/LogInOut',
  component: LogInOut,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof LogInOut>;

export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
  }
}

export const Large: Story = {
  args: {
    size: 400,
  }
}

export const DarkBackground: Story = {
  args: {
    backgroundColor: '#222',
  }
}

export const MessagePrompt: Story = {
  args: {
    message: "Loading....",
  }
}