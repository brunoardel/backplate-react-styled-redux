import { Wrapper, Main } from '../../../styles/layout/styles';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
