import { Container, Nav } from './styles';
import { Link } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler';
import Menu from '../Menu';

const Header = () => {
  return (
    <header>
      <Container>
        <Menu />
        {/* <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
            <li>
              <Link to="/page3">Page 3</Link>
            </li>
          </ul>
        </Nav> */}
        {/* <ThemeToggler /> */}
      </Container>
    </header>
  );
};

export default Header;
