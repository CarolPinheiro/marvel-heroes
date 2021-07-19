export const fetchCharacters = async () => {
  try {
    const getCharactersApi = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=70c87204642d5b6222cbb1f2fdf631c5&hash=c9a026c09c0c7766e52521aca6c85dbe&limit=20&offset=0`);
    const response = await getCharactersApi.json();
    return response;
  }
  catch (err) {
    console.error('We got a problem to fetch the information', err);
  }
}