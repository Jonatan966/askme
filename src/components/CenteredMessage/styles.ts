import styled from 'styled-components'

export const CenteredMessageContainer = styled.div`
  margin: auto;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    color: ${ctx => ctx.theme.colors.textPrimary};
  }

  p {
    color: ${ctx => ctx.theme.colors.textSecondary};
    max-width: 25rem;
  }

  svg {
    margin-bottom: 1rem;
  }

`
