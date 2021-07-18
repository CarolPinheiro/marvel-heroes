import hero from '../assets/icons/hero.svg'
import villain from '../assets/icons/villain.svg'
import antihero from '../assets/icons/antihero.svg'
import alien from '../assets/icons/alien.svg'
import human from '../assets/icons/human.svg'
import styled from 'styled-components';
const HeroesPanelFilter = () => {

  return (
    <FilterDiv>
      <HeroFilter src={hero} />
      <HeroFilter src={villain} />
      <HeroFilter src={antihero} />
      <HeroFilter src={alien} />
      <HeroFilter src={human} />
    </FilterDiv>
  );
}

const HeroFilter = styled.img`
width: 56px;
height: 56px;
border-radius: 50%;
box-sizing: border-box;
padding: 12px;
background-image: linear-gradient(180deg, #005BEA 0%, #00C6FB 100%);
`;

const FilterDiv = styled.div`
display: flex;
justify-content: space-around;
margin: 0 5px;
`;

export default HeroesPanelFilter;