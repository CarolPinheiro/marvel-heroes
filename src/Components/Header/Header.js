import menu from '../../assets/icons/menu.svg'
import marvel from '../../assets/icons/marvel.svg'
import search from '../../assets/icons/search.svg'
import styled from 'styled-components';

const Header = () => {

  return (
    < SectionHeader className='flexbox' >
      <img src={menu} alt='Botão de menu' />
      <img src={marvel} alt='Logotipo da marvel em vermelho' />
      <img src={search} alt='Botão de pesquisa' />
    </SectionHeader >
  )
}

const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default Header;