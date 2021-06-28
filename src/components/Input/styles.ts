import styled, { css } from 'styled-components'

const GenericInputContainer = css`
  border: 1px solid ${ctx => ctx.theme.colors.detailsSecondary};
  border-radius: 0.5rem;

  background: ${ctx => ctx.theme.colors.textTertiary};
  color: ${ctx => ctx.theme.colors.textPrimary};

  padding: 1rem;
`

export const TextInputContainer = styled.input`
  ${GenericInputContainer};

  height: 3rem;
`

export const TextareaInputContainer = styled.textarea`
  ${GenericInputContainer};
  
  width: 100%;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 8.12rem;
`
