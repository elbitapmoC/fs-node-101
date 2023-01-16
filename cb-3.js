// TODO: Create a callback for pokemon, using the fetch api
const getPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => cb(data));
};

getPokemon(56, (pokemon) => {
  console.log(pokemon);
});
