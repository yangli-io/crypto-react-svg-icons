import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Bitcoin, { BitcoinProps } from './Bitcoin';

export default {
  title: 'coins/Bitcoin',
  component: Bitcoin
} as Meta;

const Template: Story<BitcoinProps> = (args) => <Bitcoin {...args} />;

export const Main = Template.bind({});