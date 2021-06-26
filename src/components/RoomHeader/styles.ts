import styled from 'styled-components'

export const RoomHeaderContainer = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid ${ctx => ctx.theme.colors.detailsTertiary};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
      max-height: 2.8rem;
    }

    > div {
      display: flex;
      gap: 1rem;

      button {
        height: 2.5rem;
      }
    }
  }
`
