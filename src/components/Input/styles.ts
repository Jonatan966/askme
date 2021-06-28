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

export const StreamSelectorInputContainer = styled.div`
  --current-stream-color: ${ctx => ctx.className !== 'null'
    ? ctx.theme.colors[ctx.className as 'youtube' | 'twitch']
    : ctx.theme.colors.primary
  };
  
  display: flex;
  align-items: center;
  
  background: var(--current-stream-color);
  border-radius: 0.5rem;

  svg {
    max-width: 2.25rem;
    max-height: 2.25rem;
    
    margin: 0 0.5rem;
    
    path {
      fill: ${ctx => ctx.theme.colors.backgroundPrimary};
    }
  }
  
  input {
    flex: 1;
    ${GenericInputContainer};

    height: 3rem;
    border-color: var(--current-stream-color);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
`
