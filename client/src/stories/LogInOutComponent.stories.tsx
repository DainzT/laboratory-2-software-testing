import { Meta, StoryObj } from '@storybook/react';
import LogInOut from '../components/logInOutComponent';

const meta = {
  title: 'Components/LogInOut',
  component: LogInOut,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    backgroundColor: { control: 'color' },
    message: { control: 'text' },
  },
} satisfies Meta<typeof LogInOut>;

export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    size: 'medium',
  }
}

export const Small: Story = {
  args: {
    size: 'small',
  }
}

export const Large: Story = {
  args: {
    size: 'large',
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