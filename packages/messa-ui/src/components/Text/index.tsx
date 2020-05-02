
import React from 'react';

interface TextProps { children: React.ReactNode }

export const Text: React.FC<TextProps> = ({ children, ...rest }) => <span {...rest}>{children}</span>

