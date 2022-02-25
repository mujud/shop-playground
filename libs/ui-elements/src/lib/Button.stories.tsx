import { Story, Meta } from '@storybook/react';
import { Button, Props } from './Button';

export default {
  component: Button,
  title: 'actions/Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  value: 'Click me',
};
export const LongText = Template.bind({});
LongText.args = {
  value: 'Very very very very very very very long text............',
};
