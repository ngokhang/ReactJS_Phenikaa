let dataPokemon = [];
let listPokemons = document.querySelector('.list__pokemons');
let property_1 = document.querySelector('.property-1');
let property_2 = document.querySelector('.property-2');
const URL_API = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

const getPokemonList = async () => {
  dataPokemon = await axios.get(URL_API).then((res) => res.data.results);
  render();
};

const render = () => {
  let newDataPokemon = [...dataPokemon]
    .map((pokemon, index) => {
      return `<li class="border border-dark rounded px-2 py-1 pokemon__name">
              <a href="#" class="d-block text-decoration-none ps-3 text-dark fw-bold text-uppercase">${++index}) ${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }</a>
            </li>`;
    })
    .join('');
  listPokemons.innerHTML = newDataPokemon;

  const pokemonItem = document.querySelectorAll('.pokemon__name');
  const imagePokemon = document.querySelector('.image__pokemon');
  const propertiesPokemon = document.querySelector('.properties');

  pokemonItem.forEach((ele, index) => {
    ele.addEventListener('click', async (e) => {
      e.stopPropagation();
      const pokemonName = pokemonItem[index].childNodes[1].textContent
        .slice(pokemonItem[index].childNodes[1].textContent.indexOf(')') + 1)
        .trim()
        .toLowerCase();
      const pokemonProfile = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => res.data);
      const img_url = pokemonProfile.sprites.front_default;
      let props = pokemonProfile.types
        .map((e, index) => {
          return `<li class="bg-primary ${
            index % 2 === 0 && 'bg-danger'
          } rounded px-sm-0 text-center col-6 col-sm-12 col-lg-6"><span class="text-white text-uppercase">${
            e.type.name.charAt(0).toUpperCase() + e.type.name.slice(1)
          }</span></li>
              `;
        })
        .join('');
      imagePokemon.setAttribute('src', img_url);
      propertiesPokemon.innerHTML = props;
    });
  });
};

getPokemonList();
