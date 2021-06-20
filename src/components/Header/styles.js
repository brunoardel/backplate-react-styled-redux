import styled from 'styled-components/macro';
import { LogoGithub } from '@styled-icons/octicons/LogoGithub';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 50px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacings.xlarge};
    /* transition: all 0.5s linear; */

    @media (max-width: ${theme.medias.medium}px) {
      justify-content: space-between;
    }
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;

      li {
        margin: 0 ${theme.spacings.xxsmall}

        a:visited {
          color: #333;
        }
        a:hover,
        a:focus {
          transition: 0.3s;
          color: #0077cc;
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const Logo = styled(LogoGithub)`
  ${({ theme }) => css`
    width: 64px;
    color: #333;

    &:hover {
      cursor: pointer;
      color: rgb(0, 0, 238);
      transition: 0.3s;
    }
  `}
`;
