import { ThemeTypes } from '../../types/theme-types';

export const defaultTheme = {
    type: ThemeTypes.DEFAULT,
    background: {
        primary: '#222222',
        secondary: '#FCEFF9'
    },
    colors: {
      green_light: '#4ed477',
      green_dark: '#04773B',
      gray_light: '#FCEFF9',
      gray_dark: '#222222',
      white: '#FFFFFF',
      black: '#000000'
    },
    breakpoints: {
      mobile: '768px',
      desktop: '992px',
    },
}