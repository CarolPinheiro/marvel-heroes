import styled from 'styled-components';

const Title = ({ title, subtitle }) => {
  return (
    <SectionTitle>
      <MainTitle>{title}</MainTitle>
      <SubTitle>{subtitle}</SubTitle>

    </SectionTitle>
  );
}

const SectionTitle = styled.section`
display: flex;
flex-direction: column-reverse;

padding: 24px;
`;

const MainTitle = styled.h1`
font-family: 'Gilroy Heavy';
font-size: 2em;
`;

const SubTitle = styled.h2`
font-family: 'Gilroy Semibold';
font-size: 0.88em;
color:#B7B7C8;
`;


export default Title;