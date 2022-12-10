const title = document.getElementById('title')
const pokemonDetais = document.getElementById('pokemonDetails')

function createDetails(pokemon) {
    return `
        <div class="pokemon-details ${pokemon.type}">
            <div class="detail">
                <ul class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ul>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </div> 
    `
}

function loadPokemonDetails(id) {
    pokeApi.getDetails(id).then((pokemon) => {
        const newHtml = createDetails(pokemon);
        title.innerHTML = `
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        `;
        pokemonDetais.innerHTML += newHtml;
    })
}

const urlParams = new URLSearchParams(location.search);

console.log()

loadPokemonDetails(urlParams.get('id'));
