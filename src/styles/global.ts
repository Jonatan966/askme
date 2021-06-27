import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
    background: ${ctx => ctx.theme.colors.backgroundPrimary};    
    color: ${ctx => ctx.theme.colors.textPrimary};
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
    background: ${ctx => ctx.theme.colors.primaryLight};
    width: 0.75rem;
  }

  
  ::-webkit-scrollbar-thumb {
    background: ${ctx => ctx.theme.colors.primary};
    height: 3rem;

    border-radius: 0.5rem;
    border: 0.15rem solid ${ctx => ctx.theme.colors.primaryLight};
  }
`
