import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
}

const StyledText = styled.span`
  color: red;
`;

export const Text: React.FC<TextProps> = ({ children }) => <StyledText>{children}</StyledText>;
