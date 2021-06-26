import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    currentTheme: 'dark' | 'light';

    colors: {
      shadow:string;
      textTrimary:string;
      textTecondary:string;
      textTertiary:string;

      primary:string;

      danger:string;
      google:string;

      detailsQrimary:string;
      detailsQecondary:string;
      detailsQertiary:string;
      detailsQuaternary:string;

      backgroundPrimary:string;
      backgroundPecondary:string;
      backgroundPertiary:string;

      label:string;
    }

    toggleTheme: () => void
  }
}
