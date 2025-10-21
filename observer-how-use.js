const list = document.getElementById('list'); // lista


async function fetchPokedex() {
    const url = 'https://pokeapi.co/api/v2/pokedex/1/';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const pokedex = await fetchPokedex();

const { pokemon_entries } = pokedex;

pokemon_entries.forEach((pokemon) => {
    const { pokemon_species } = pokemon;
    const { name } = pokemon_species;
    const li = document.createElement('li');
    li.classList = 'Pokemon'
    li.innerText = `${name}`
    list.appendChild(li);
})
console.log(pokemon_entries);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("Show");
        } else {
            entry.target.classList.remove("Show");
        }
    })
}, {})

const todoElements = document.querySelectorAll(".Pokemon");

todoElements.forEach(el => observer.observe(el))