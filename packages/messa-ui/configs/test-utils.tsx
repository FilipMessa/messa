/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from '@components/base/ThemeProvider';

const AllTheProviders: React.FunctionComponent<any> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
