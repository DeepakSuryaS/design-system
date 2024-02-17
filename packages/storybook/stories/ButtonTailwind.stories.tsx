import { Button } from '@dss-ds/react/src/ButtonTailwind';
import { Meta, StoryFn } from '@storybook/react';
import '@dss-ds/react/lib/output.css';

export default {
  title: 'DSS/Tailwind Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
