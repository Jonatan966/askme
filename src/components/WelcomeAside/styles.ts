import styled from 'styled-components'

export const WelcomeAsideContainer = styled.aside`
  flex: 7;

  background: ${ctx => ctx.theme.colors.primary};
  color: ${ctx => ctx.theme.colors.textTertiary};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5rem;

  img {
    max-width: 20rem;
  }

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.6rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: ${ctx => ctx.theme.colors.backgroundPrimary};
  }

  button {
    display: none;
  }

  @media (max-width:768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;

    z-index: 10;

    img {
      max-width: 50%;
      // position: fixed;
    }

    &.passed-welcome-message {
      display: none;
    }

    button {
      background: ${ctx => ctx.theme.colors.label};
      margin-top: auto;

      display: block;

      color: ${ctx => ctx.theme.colors.textSecondary};
    }
  }
`
