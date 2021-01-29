import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Ethereum, { EthereumProps } from './Ethereum';

export default {
  title: 'coins/Ethereum',
  component: Ethereum
} as Meta;

const Template: Story<EthereumProps> = (args) => <Ethereum {...args} />;

export const Main = Template.bind({});