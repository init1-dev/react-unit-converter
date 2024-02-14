import styled from "styled-components";
import SavedElement from "./SavedElement";
import { useAppSelector } from "../hooks/store";

const Saved = () => {
  const saved = useAppSelector((state) => state.saved);
  
  return (
    <>
      <SectionStyle>
        <SavedTitleStyle>saved</SavedTitleStyle>
        <SavedContainerStyle>
          {saved.map(item => (
            <SavedElement key={item.id} item={item} />
          ))}
        </SavedContainerStyle>
      </SectionStyle>
    </>
  );
}

const SectionStyle= styled.section`
  margin-left: 20%;
  margin-right: 20%;

  @media only screen and (max-width: 1024px) {
    margin-left: 12%;
    margin-right: 12%;
  }

  @media only screen and (max-width: 700px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const SavedTitleStyle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const SavedContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 5em;

  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default Saved;