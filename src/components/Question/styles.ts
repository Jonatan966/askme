import styled from 'styled-components'

export const QuestionContainer = styled.div`
    background: ${ctx => ctx.theme.colors.detailsQuaternary};
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 1.5rem;

  & + .question {
    margin-top: 0.5rem;
  }

  &.highlighted {
    background: ${ctx => ctx.theme.currentTheme === 'light'
      ? ctx.theme.colors.primaryLight
      : ctx.theme.colors.backgroundPrimary
    };
    border: 1px solid ${ctx => ctx.theme.colors.primary};

    footer .user-info span {
      color: ${ctx => ctx.theme.colors.textPrimary};
    }
  }

  &.answered {
    background: ${ctx => ctx.theme.colors.detailsTertiary}; 
  }

  p {
    color: ${ctx => ctx.theme.colors.textPrimary};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: ${ctx => ctx.theme.colors.detailsPrimary};
        font-size: 0.875rem;
      }
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${ctx => ctx.theme.colors.textSecondary};
        gap: 0.5rem;
      }

      &.liked {
        color: ${ctx => ctx.theme.colors.primary};

        svg path {
          stroke: ${ctx => ctx.theme.colors.primary};
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }

    > div {
      display: flex;
      gap: 1rem;
    }
  }
`
