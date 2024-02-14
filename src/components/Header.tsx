import styled from "styled-components";
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <HeaderStyle>
      <TopBarStyle>
          <LogoStyle src={logo} alt="unit-converter-logo" />
          <HeaderTextStyle>unit converter</HeaderTextStyle>
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
  background-color: white;

  @media only screen and (max-width: 1024px) {
    padding: 0.5rem 12% 0.5rem 12%;
  }

  @media only screen and (max-width: 700px) {
    padding: 0.5rem 5% 0.5rem 5%;
  }
`;

const TopBarStyle = styled.div`
  display: flex;
`;

const LogoStyle = styled.img`
  width: 32px;
`;

const HeaderTextStyle = styled.h1`
  color: #2E0039;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
`;

export default Header;