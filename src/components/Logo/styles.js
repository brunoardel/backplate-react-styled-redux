import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.xxlarge};
    color: ${theme.colors.text};

    &:hover {
      cursor: pointer;
      color: ${theme.colors.blue};
      transition: ${theme.transitions.default};
    }
  `}
`;
