import styled from 'styled-components'

export const PageRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    flex: 1;
    display: flex;
    flex-direction: column;

    .room-title {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        color: ${ctx => ctx.theme.colors.textPrimary};
      }

      span {
        margin-left: 1rem;
        background: ${ctx => ctx.theme.colors.label};
        border-radius: 9999px;
        padding: 0.5rem 1rem;
        color: ${ctx => ctx.theme.colors.textTertiary};
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 0.5rem;
        background: ${ctx => ctx.theme.colors.detailsQuaternary};
        color: ${ctx => ctx.theme.colors.textPrimary};

        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 8.12rem;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

        > span {
          font-size: 0.875rem;
          color: ${ctx => ctx.theme.colors.textSecondary};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${ctx => ctx.theme.colors.primary};
            text-decoration: underline;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* Mobile L */
  @media screen and (max-width: 525px) {
    main .room-title {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 425px) {
    main form .form-footer {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }
  }
`
