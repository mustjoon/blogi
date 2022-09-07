import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.red};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 1.2em;
  z-index: 1000;

  .nav-container {
    display: flex;
    flex-direction: row;
    padding: 5px 0;
    align-items: center;
    .logo {
      width: auto;
      height: 50px;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    li {
      padding: 20px;
    }
  }
`;

export const Nav = styled.nav``;
