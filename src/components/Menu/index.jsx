import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import Logo from '../Logo';
import ThemeToggler from '../ThemeToggler';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <div>
        <S.IconWrapper>
          <MenuIcon onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
        <Link to="/home" onClick={() => console.log('clickou!')}>
          <Logo />
        </Link>
      </div>

      <S.LogoWrapper>
        <Link to="/home" onClick={() => console.log('clickou!')}>
          <Logo />
        </Link>
      </S.LogoWrapper>

      <>
        <S.Nav>
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
        </S.Nav>
      </>

      <>
        <ThemeToggler />
      </>

      <>
        <S.MenuFull isOpen={isOpen}>
          <CloseIcon onClick={() => setIsOpen(false)} />
          <S.MenuNav>
            <S.MenuLink href="#">Home</S.MenuLink>
            <S.MenuLink href="#">Expore</S.MenuLink>
          </S.MenuNav>

          <S.RegisterBox>
            {/* <Button fullWidth size="large">Log in</Button> */}
            <button>Log in</button>
          </S.RegisterBox>
        </S.MenuFull>
      </>
    </S.Wrapper>
  );
};

export default Menu;
