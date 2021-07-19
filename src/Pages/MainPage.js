import { useEffect } from "react";
import CharactersGrid from "../Components/CharactersGrid";
import Header from "../Components/Header"
import HeroesPanelFilter from "../Components/HeroesPanelFilter";
import Title from "../Components/Title"

const MainPage = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <Title title="Escolha o seu personagem" subtitle="Bem vindo ao Marvel Heroes" />
      <HeroesPanelFilter />
      <CharactersGrid type="Heroes" />
    </>
  )
}



export default MainPage