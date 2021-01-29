import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Metamask, { MetamaskProps } from './Metamask';

export default {
  title: 'Wallets/Metamask',
  component: Metamask
} as Meta;

const Template: Story<MetamaskProps> = (args) => <Metamask {...args} />;

export const Main = Template.bind({});