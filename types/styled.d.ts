import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      textPrimary: string;
      textSecondary: string;

      background: string;

      border: string;
    };

    font: {
      family: string;
    };
  }
}
