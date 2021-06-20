import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    min-height: 50px;
    margin-top: auto;
    background: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      text-align: center;
    }

    div {
      ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        > a {
          color: ${theme.colors.text};
          margin-left: ${theme.spacings.xxsmall};

          &:hover,
          :focus {
            transition: ${theme.transitions.default};
            color: ${theme.colors.blue};
          }
        }
      `}
    }
  `}
`;
