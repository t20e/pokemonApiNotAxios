import React, {useState} from "react";
import axios from "axios";
// install axios wiht `npm install axois`

const PokemonApiWithAxois = ()=>{
    //array for pokemon
    let [pokemonList, setPokemonList] = useState([]);
    //set useState to [] or th dom will try to get that info when it doesnt exists!
    const getPokemons = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        //theres also POST AND GET methods
            .then( (response) => {
                console.log('got response');
                setPokemonList(response.data.results);
                //the result is where the data is embeded in the api
            })
            //doest wait for the top to .then fuctions to run it runs next line, the .then loads when it gets the data 
            .catch((error) =>{
                //.catch will run if the fetch() process breaks fro any reason
                console.log("error when fetching!");
            })

    }
    return<div>
        <button onClick={getPokemons}>Click her to get pokemons</button>
        {
            pokemonList.map( (name) =>{
                return <div>
                    <h1>{name.name}</h1>
                </div>
            })
        }
    </div>

}


export default PokemonApiWithAxois