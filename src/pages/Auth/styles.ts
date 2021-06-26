import styled from 'styled-components'

export const PageAuthContainer = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 100vh;

  aside {
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
  }

  main {
    flex: 8;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: 'Poppins', sans-serif;
      color: ${ctx => ctx.theme.colors.textPrimary};
    }

    form {
      input {
        height: 3rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: ${ctx => ctx.theme.colors.textTertiary};
        border: 1px solid ${ctx => ctx.theme.colors.detailsSecondary};
      }

      button {
        margin-top: 1rem;
      }

      button, input {
        width: 100%;
      }
    }

    p {
      font-size: 0.875rem;
      color: ${ctx => ctx.theme.colors.textSecondary};
      margin-top: 1rem;

      a {
        color: ${ctx => ctx.theme.colors.primary};
      }
    }

    .user-info {
      margin-top: 1rem;
    }
  }

  .create-room {
    margin-top: 4rem;
    height: 3rem;
    border-radius: 0.5rem;
    font-weight: 500;
    background: ${ctx => ctx.theme.colors.google};
    color: ${ctx => ctx.theme.colors.textTertiary};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 0.875rem;
    color: ${ctx => ctx.theme.colors.detailsSecondary};

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${ctx => ctx.theme.colors.detailsSecondary};
      margin-right: 1rem;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${ctx => ctx.theme.colors.detailsSecondary};
      margin-left: 1rem;
    }
  }

  @media screen and(max-width:768px) {
    flex-direction: column;

    .create-room {
      margin-top: 1rem;
    }

    aside {
      padding: 0.5rem 3rem;
      position: relative;

      img {
        max-width: 8rem;
        // position: fixed;
      }

      strong {
        font-size: 1.75rem;
      }

      p {
        font-size: 1.25rem;
      }
    }

    .main-content h2 {
      margin-top: 2rem;
    }
  }
`
