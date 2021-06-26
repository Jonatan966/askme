import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SpinnerContainer = styled.span`
  width: 2rem;
  height: 2rem;

  // background: green;

  border: 0.4rem solid #973ba3;
  border-top: 0.4rem solid ${ctx => ctx.theme.colors.label};
  border-radius: 50%;

  animation: ${spinAnimation} 1s linear infinite;
`
