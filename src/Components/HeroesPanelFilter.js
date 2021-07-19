import hero from '../assets/icons/hero.svg'
import villain from '../assets/icons/villain.svg'
import antihero from '../assets/icons/antihero.svg'
import alien from '../assets/icons/alien.svg'
import human from '../assets/icons/human.svg'
import styled from 'styled-components';
import filterPanel from '../variables'
const HeroesPanelFilter = () => {

  return (
    <FilterDiv>
      <HeroFilter src={hero} alt="Hero icon" />
      <HeroFilter src={villain} alt="Villain icon" />
      <HeroFilter src={antihero} alt="Antihero icon" />
      <HeroFilter src={alien} alt="Alien icon" />
      <HeroFilter src={human} alt="Human icon" />
    </FilterDiv>
  );
}

const HeroFilter = styled.img`
width: 56px;
height: 56px;
border-radius: 50%;
box-sizing: border-box;
padding: 12px;
background-image: ${props => filterPanel[props.alt]}
;
`;

const FilterDiv = styled.div`
display: flex;
justify-content: space-around;
margin: 0 5px;
`;

export default HeroesPanelFilter;