import React, {useState} from "react";

const PokemonApi = () =>{
    let [pokemonsList, setPokemonsList] = useState([]);

    let count = 0;
    const getPokemons = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then( (response) => {
                return response.json();
            })
            .then( (response) =>{
                console.log('got pokemons');
                //add to list of all pokemons got
                setPokemonsList(response.results)
                console.log(pokemonsList);
                //add pokemons to the list
            })
            .catch((err) =>{
                console.log("error getting pokemons");
            })


    }
    


    return <>
        <button  onClick={getPokemons}>fetch Pokemons</button>
        <div>
            {
                pokemonsList.map((pokemon)=>{
                    return <>
                    <h1>{pokemon.name}</h1>
                    {count++}
                    </>
                })
            }

        </div>
    </>
}
export default PokemonApi
