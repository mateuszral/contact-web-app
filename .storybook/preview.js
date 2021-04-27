import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'assets/styles/theme';

import GlobalStyles from 'assets/styles/globalStyles';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
