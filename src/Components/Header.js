import menu from '../assets/icons/menu.svg'
import marvel from '../assets/icons/marvel.svg'
import search from '../assets/icons/search.svg'
import styled from 'styled-components';

const Header = () => {

  return (
    < SectionHeader >
      <MenuAndSearchBar src={menu} alt='Botão de menu' />
      <MarvelLogo src={marvel} alt='Logotipo da marvel em vermelho' />
      <MenuAndSearchBar src={search} alt='Botão de pesquisa' />
    </SectionHeader >
  )
}

const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 64px;
  box-sizing: border-box;
  padding: 20px;
`;

const MarvelLogo = styled.img`
  width: 4.45em;
  height: 26px;
`;

const MenuAndSearchBar = styled.img`
  width: 24px;
  height: 24px;
`;

export default Header;