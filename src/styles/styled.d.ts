import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    currentTheme: 'dark' | 'light';

    colors: {
      shadow:string;
      textPrimary:string;
      textSecondary:string;
      textTertiary:string;

      primary:string;
      primaryLight: string;

      danger:string;
      google:string;

      detailsPrimary:string;
      detailsSecondary:string;
      detailsTertiary:string;
      detailsQuaternary:string;

      backgroundPrimary:string;
      backgroundSecondary:string;
      backgroundTertiary:string;

      label:string;
    }

    toggleTheme: () => void
  }
}
