import menu from '../../assets/icons/menu.svg'
import marvel from '../../assets/icons/marvel.svg'
import search from '../../assets/icons/search.svg'

const Header = () => {

  return (
    < header className='flexbox' >
      <img src={menu} alt='Botão de menu' />
      <img src={marvel} alt='Logotipo da marvel em vermelho' />
      <img src={search} alt='Botão de pesquisa' />
    </header >
  )
}

export default Header;