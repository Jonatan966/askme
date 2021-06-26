import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #29292e;
    --black-medium: #141414;
    --black-dark: #0D0D0D;

    --shadow: rgba(5,2,6,0.8);

    --purple: #835afd;
    
    --red-light: #E73F5D;
    --red: #ea4335;
    
    --gray-dark: #737380;
    --gray: #737373;
    --gray-medium: #a8a8b3;
    --gray-light: #e2e2e2;

    --white: #fff;
    --white-background: #f8f8f8;
    --white-details: #fefefe;
    
    --pink: #e559f9;
  }

  /*
    Como as cores deveriam se chamar
    --shadow: rgba(5,2,6,0.8);
    --text-primary: #29292e;
    --text-secondary: #737380;
    --text-tertiary: #fff;

    --primary: #835afd;
    
    --danger: #E73F5D;
    --google: #ea4335;
    
    --details-primary: #737373;
    --details-secondary: #a8a8b3;
    --details-tertiary: #e2e2e2;
    
    --background: #f8f8f8;
    
    --label: #e559f9;


    Tema escuro
    --shadow: rgba(5,2,6,0.8);
    --text-primary: #29292e;
    --text-secondary: #737380;
    --text-tertiary: #0D0D0D;

    --primary: #835afd;
    
    --danger: #E73F5D;
    --google: #ea4335;
    
    --details-primary: #737373;
    --details-secondary: #a8a8b3;
    --details-tertiary: #e2e2e2;
    
    --background: #141414;
    
    --label: #e559f9;
  */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white-background);
    color: var(--black);
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }
`
