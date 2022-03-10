import { Story, Meta } from '@storybook/react';
import { H1a, Props2 } from './H1a';

export default {
  component: H1a,
  title: 'actions/H1a',
} as Meta;

const Template: Story<Props2> = (args) => <H1a {...args} />;

export const Horse = Template.bind({});
Horse.args = {
  value: 'HorseHeading',
};
export const Duck = Template.bind({});
Duck.args = {
  value: 'DuckHeading',
};