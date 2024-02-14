import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <a>Terms of service</a>
        <a>Privacy policy</a>
      </FooterStyle>
    </>
  );
}

const FooterStyle = styled.footer`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: 0.5rem;
  background-color: #2E0039;
  width: 100%;
  color: white;
  font-size: 12px;
  line-height: 18px;

  a:hover {
    color: blueviolet;
    transition: all ease 0.3s;
    cursor: pointer;
  }
`;

export default Footer;
