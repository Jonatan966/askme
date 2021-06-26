import Modal from 'react-modal'
import styled from 'styled-components'

export const TesteContainer = styled(Modal)`
  width: 100%;
  max-width: 576px;
  background: var(--white-background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
  margin: 0 1rem;

  &.dark {
    background: var(--black-dark); 
  }

  @media (max-width: 820px) {
    margin: 0;
    border-radius: 1rem 1rem 0 0;
    padding: 1.75rem;
  }

  &.confirm-modal {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      filter: invert(34%) sepia(85%) saturate(1155%) hue-rotate(317deg) brightness(92%) contrast(97%);
      max-width: 4rem;
      width: 100%;
    }

    h1 {
      margin-top: 1.5rem;
      color: var(--black);
    }

    p {
      margin-top: 0.75rem;
      color: var(--gray-dark);
      font-size: 1.25rem;
    }

    .modal-footer {
      display: flex;
      gap: 0.5rem;

      margin-top: 2.5rem;

      button {
        min-width: 10rem;
      }
    }
    
    .cancel-button {
      background: var(--gray-light);
      color: var(--gray-dark);
    }

    .confirm-button {
      background: var(--red-light);
    }

    &.dark {
      h1 {
        color: var(--gray-light);
      }

      .cancel-button {
        background: var(--black);
        color: var(--gray-medium);  
      }

      .confirm-button {
        color: var(--black-dark);
      }
    }
  }

`
