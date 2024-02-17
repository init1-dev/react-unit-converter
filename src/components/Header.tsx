import styled from "styled-components";

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header = ({toggleTheme, theme}: HeaderProps) => {
  return (
    <HeaderStyle>
      <TopBarStyle>
          <div className="separador" style={{
            display: "flex",
            alignItems: "center"
          }}>
            <LogoStyle className="fa-solid fa-arrow-right-arrow-left" />
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
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 4px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset;
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

const LogoStyle = styled.i`
  padding-right: 10px;
  color: ${({ theme }) => theme.headerH1};
`;

const HeaderTextStyle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
  color: ${({ theme }) => theme.headerH1};
`;

const ToggleThemeButton = styled.button`
  background-color: ${({ theme }) => theme.savedCardBg};
  border: 1px;
  // border-style: ridge;
  border-color: ${({ theme }) => theme.savedCardBg};
  // box-shadow: 4px 4px 5px -5px rgba(0,0,0,.5);
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 40%) 1px 1px 2px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset;
`;

export default Header;