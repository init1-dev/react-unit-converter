import styled from "styled-components";
import logo from '../assets/logo.svg'

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header = ({toggleTheme, theme}: HeaderProps) => {
  return (
    <HeaderStyle>
      <TopBarStyle>
          <div className="separador" style={{
            display: "flex"
          }}>
            <LogoStyle src={logo} alt="unit-converter-logo" />
            <HeaderTextStyle>unit converter</HeaderTextStyle>
          </div>
          <ToggleThemeButton onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </ToggleThemeButton>
      </TopBarStyle>
    </HeaderStyle>
  );
}

const HeaderStyle =styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 5px 5px -4px rgba(0,0,0,.5);
  padding: 0.5rem 20%;

  @media only screen and (max-width: 1024px) {
    padding: 0.5rem 12% 0.5rem 12%;
  }

  @media only screen and (max-width: 700px) {
    padding: 0.5rem 5% 0.5rem 5%;
  }
`;

const TopBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40%;

  @media only screen and (max-width: 1024px) {
    margin-right: 24%;
  }

  @media only screen and (max-width: 700px) {
    margin-right: 10%;
  }
`;

const LogoStyle = styled.img`
  width: 32px;
`;

const HeaderTextStyle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
`;

const ToggleThemeButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

export default Header;