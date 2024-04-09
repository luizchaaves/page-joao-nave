import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    background: {
        primary: string;
        secondary: string;
    }
    colors: {
      green_light: string;
      green_dark: string;
      gray_light: string;
      gray_dark: string;
      white: string;
      black: string;
    };
    breakpoints: {
      mobile: string;
      desktop: string;
    };
  }
}
