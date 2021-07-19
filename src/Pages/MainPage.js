import { useState, useEffect } from "react";
import { fetchCharacters } from "../Api";
import CharactersGrid from "../Components/CharactersGrid";
import Header from "../Components/Header"
import HeroesPanelFilter from "../Components/HeroesPanelFilter";
import Title from "../Components/Title"

const MainPage = () => {
  const [apiReturn, setApiReturn] = useState({})

  useEffect(() => {
    fetchCharacters().then(e => setApiReturn(e.data.results));
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