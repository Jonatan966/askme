import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 3rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${ctx => ctx.theme.colors.primary};
  color: ${ctx => ctx.theme.colors.backgroundPrimary};
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &.outlined {
    background: ${ctx => ctx.theme.colors.textTertiary};
    border: 1px solid ${ctx => ctx.theme.colors.primary};
    color: ${ctx => ctx.theme.colors.primary};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
