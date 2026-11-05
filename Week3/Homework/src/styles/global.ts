import { css } from '@emotion/react';
import type { Theme } from './theme';

export const globalStyle = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    font: inherit;
    cursor: pointer;
  }
`;
