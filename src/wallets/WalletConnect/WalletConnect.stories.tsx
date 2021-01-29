import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import WalletConnect, { WalletConnectProps } from './WalletConnect';

export default {
  title: 'Wallets/WalletConnect',
  component: WalletConnect
} as Meta;

const Template: Story<WalletConnectProps> = (args) => <WalletConnect {...args} />;

export const Main = Template.bind({});