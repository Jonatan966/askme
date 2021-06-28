import styled from 'styled-components'

export const PlayerStatusContainer = styled.div`
  width: 100%;
  height: 25rem;
  margin-top: 1rem;

  background: ${ctx => ctx.theme.colors.primary};
  color: ${ctx => ctx.theme.colors.textPrimary};
  text-align: center;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
