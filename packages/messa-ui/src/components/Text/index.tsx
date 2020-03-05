
import React from 'react';
import { Text as RNText } from 'react-native';

interface TextProps { children: React.ReactNode }

export const Text: React.FC<TextProps> = ({ children }) => <RNText>{children}</RNText>

