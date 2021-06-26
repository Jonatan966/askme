import styled from 'styled-components'

export const RoomHeaderContainer = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid ${ctx => ctx.theme.colors.detailsTertiary};

  position: sticky;
  top: 0;
  background: ${ctx => ctx.theme.colors.backgroundPrimary};
  z-index: 100;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      max-height: 2.8rem;
    }

    > nav, > div {
      display: flex;
      gap: 1rem;
      align-items: center;

      button {
        height: 2.5rem;
      }
    }

    .main-content {
      flex-direction: row;

      > svg {
        margin-right: auto;
      }

      .show-nav-btn {
        display: none;
        font-size: 0;

        svg path {
          fill: ${ctx => ctx.theme.colors.label};
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;

      > div {
        flex-direction: column;
      }

      .main-content .show-nav-btn {
        display: block;
      }

      nav {
        flex-direction: column;
        align-items: stretch;
      }
    }

    input:not(:checked) + .main-content + nav {
      display: none;
    }

    input:checked + .main-content + nav {
      display: flex;
    }
  }

`
