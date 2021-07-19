import styled from "styled-components";

const CharactersGrid = ({ type }) => {
  return (
    <section>
      <TextSpan>
        <CharacterType>{type}</CharacterType>
        <CharacterType>Ver tudo</CharacterType>
      </TextSpan>
    </section>
  );
}

const CharacterType = styled.p`
font-family: ${props => props.children !== 'Ver tudo' ? 'Gilroy Bold' : 'Gilroy Medium'};
font-size:${props => props.children !== 'Ver tudo' ? '18px' : '14px'};
color:${props => props.children !== 'Ver tudo' ? '#F2264B' : '#B7B7C8'}
`;

const TextSpan = styled.span`
display: flex;
justify-content: space-between;
box-sizing: border-box;
padding: 15px;
`;

export default CharactersGrid;