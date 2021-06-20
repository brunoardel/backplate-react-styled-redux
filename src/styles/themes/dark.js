import BaseCSS from '../base';

const Theme = {
  title: 'dark',

  colors: {
    primary: '#333',
    secundary: '#C62E65',
    background: '#222',
    text: '#fff',

    white: '#fff',
    black: '#333',
    blue: '#0077cc',
  },
};

const Dark = { ...Theme, ...BaseCSS };

export default Dark;
