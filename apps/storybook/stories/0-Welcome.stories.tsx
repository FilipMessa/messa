import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { View } from  'react-native';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <View><Welcome showApp={linkTo('Button')} /></View>;

ToStorybook.story = {
  name: 'to Storybook',
};
