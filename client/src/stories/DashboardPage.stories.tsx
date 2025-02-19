import { Meta, StoryObj } from '@storybook/react';
import DashboardPage from '../pages/DashboardPage'; 
import { BrowserRouter } from 'react-router-dom';
import { ToDoListProps, Task } from "../types/ToDoListTypes";

const sampleTasks: Task[] = [
  {
    task_id: "1",
    text: "Finish Storybook setup",
    createdAt: new Date("2025-02-28T08:30:00"),
    dueAt: new Date("2025-03-28T10:00:00"),
    completed: false,
  },
  {
    task_id: "2",
    text: "Review pull request",
    createdAt: new Date("2025-02-28T09:15:00"),
    dueAt: new Date("2025-03-28T12:00:00"),
    completed: false,
  },
  {
    task_id: "3",
    text: "Team meeting",
    createdAt: new Date("2025-02-18T11:00:00"),
    dueAt: new Date("2025-02-30T15:00:00"),
    completed: false,
  },
];

const moreTasks: Task[] = [
  {
    task_id: "1",
    text: "Finish Storybook setup",
    createdAt: new Date("2025-02-28T08:30:00"),
    dueAt: new Date("2025-03-28T10:00:00"),
    completed: false,
  },
  {
    task_id: "2",
    text: "Review pull request",
    createdAt: new Date("2025-02-28T09:15:00"),
    dueAt: new Date("2025-03-28T12:00:00"),
    completed: false,
  },
  {
    task_id: "3",
    text: "Team meeting",
    createdAt: new Date("2025-02-18T11:00:00"),
    dueAt: new Date("2025-02-30T15:00:00"),
    completed: false,
  },
  {
    task_id: "4",
    text: "Attend Seminar",
    createdAt: new Date("2025-02-18T11:00:00"),
    dueAt: new Date("2025-02-30T15:00:00"),
    completed: false,
  },
  {
    task_id: "5",
    text: "Find Client",
    createdAt: new Date("2025-02-18T11:00:00"),
    dueAt: new Date("2025-02-30T15:00:00"),
    completed: false,
  },
  {
    task_id: "6",
    text: "Scrum Framework",
    createdAt: new Date("2025-02-18T11:00:00"),
    dueAt: new Date("2025-02-30T15:00:00"),
    completed: false,
  },
];

const meta = {
  title: 'Pages/LoginPage',
  component: DashboardPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    tasks: sampleTasks, // Default tasks for Storybook
  },
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'responsive', 
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', 
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet', 
    },
  },
};

export const WithNoTasks: Story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
  },
  args: {
    tasks: [],
  },
};

export const MoreTasks: Story = {
  parameters: {
    viewport: { defaultViewport: 'responsive' },
  },
  args: {
    tasks: moreTasks,
  },
};