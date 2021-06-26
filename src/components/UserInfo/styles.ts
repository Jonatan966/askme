import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.5rem;
    color:${ctx => ctx.theme.colors.textPrimary};
    font-weight: 500;
    font-size: 0.875rem;
  }

  > div {
    display: flex;
    align-items: center;
  }

  button {
    background: transparent;
    border: 0;

    text-decoration: underline;
    cursor: pointer;

    color: ${ctx => ctx.theme.colors.label};
  }

`
