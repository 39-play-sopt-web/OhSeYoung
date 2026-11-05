// 2주차엔 colors.js를 직접 import 했는데 이번엔 ThemeProvider로 넘겨서 씀
export const theme = {
  colors: {
    background: '#1c1c24',
    card: '#2b2b33',
    cardHover: '#33333c',
    border: '#34343e',
    primary: '#7ee8d6',
    text: '#ffffff',
    subText: '#c9c9d1',
    gray: '#8e8e99',
    button: '#33333c',
    black: '#14141a',
  },
};

export type Theme = typeof theme;
