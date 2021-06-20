import * as S from './styles';

function Footer() {
  return (
    <S.Footer>
      <p>Made with by Speak up Tech</p>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/brunoardel/"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/brunoardel/"
        >
          <i className="fab fa-github" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/brunohardel/"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </S.Footer>
  );
}

export default Footer;
