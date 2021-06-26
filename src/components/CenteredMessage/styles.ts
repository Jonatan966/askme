import styled from 'styled-components'

export const CenteredMessageContainer = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    color: var(--black);
  }

  p {
    color: var(--gray-dark);
    max-width: 25rem;
  }

  svg {
    margin-bottom: 1rem;
  }

`
