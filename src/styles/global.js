import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    
    @media (max-width: 768px) {
      font-size: 46.5%;
    }
  }

  body, input, button, select {
    font-family: 'Nunito', 'Poppins', sans-serif;
    font-size: 1.6rem;
  }
  
  button {
    cursor: pointer;
  }

  ul {
    list-style: none;

    li {
      a {
        text-decoration: none;
      }
    }
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  

 ${({ theme }) =>
   theme.title === 'dark' &&
   `
      img {
        filter: brightness(0.9);
      }
    `}

`;
