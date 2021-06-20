import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    position: relative;
    /* transition: all 0.5s linear; */

    @media (max-width: ${theme.medias.medium}px) {
      justify-content: space-between;
    }

    div:first-child {
      display: flex;
      align-items: center;

      a:last-child {
        @media (max-width: ${theme.medias.medium}px) {
          display: none;
        }
      }
    }
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    cursor: pointer;
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: ${theme.medias.medium}px) {
      display: block;
    }
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;

      li {
        margin: 0 ${theme.spacings.xxsmall};

        a {
          color: ${theme.colors.text};
        }

        a:visited {
          //color: #333;
        }
        a:hover,
        a:focus {
          transition: ${theme.transitions.default};
          color: ${theme.colors.blue};
          text-decoration: underline;
        }
      }
    }

    @media (max-width: ${theme.medias.medium}px) {
      display: none;
    }
  `}
`;

export const MenuNav = styled.div``;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.xxlarge};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const MenuFull = styled.div`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.background};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      color: ${theme.colors.text};
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.small};
      cursor: pointer;
      width: ${theme.spacings.small};
      height: ${theme.spacings.small};
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.small} ${theme.spacings.small};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;
