import BaseCSS from '../base';

const Theme = {
  title: 'light',

  colors: {
    primary: '#C62E65',
    secundary: '#D63AF9',
    background: '#f5f5f5',
    text: '#333',

    white: '#fff',
    black: '#333',
    blue: '#0077cc',
  },
};

const Light = { ...Theme, ...BaseCSS };

export default Light;
