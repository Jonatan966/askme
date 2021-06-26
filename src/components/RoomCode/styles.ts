import styled from 'styled-components'

export const RoomCodeContainer = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${ctx => ctx.theme.colors.textTertiary};
  border: 1px solid ${ctx => ctx.theme.colors.primary};
  
  cursor: pointer;
  color: ${ctx => ctx.theme.colors.textPrimary};

  display: flex;

  div {
    background: ${ctx => ctx.theme.colors.primary};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 12px;
    min-width: 17rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`
