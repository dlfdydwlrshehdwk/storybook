import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta = {
  title : 'components/stories/Button',
  component : Button,
  args : {
    label : 'BUTTON'
  },
  tags : ['autodocs'],
  argTypes : {
    color : {
      control : 'radio',
      options:['black','red','blue']
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    label : 'BUTTON',
    border: true,
  }
}

export const ButtonA: Story = {
  args : {
    borderRadius : '35px',
  }
}
