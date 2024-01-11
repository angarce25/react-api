import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();
	console.log(location)

	const { globalPokemons } = useContext(PokemonContext);

	// Verificar si location.state es válido antes de usarlo
	const searchValue = location.state ? location.state.toLowerCase() : '';
	
	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(searchValue)
	);

	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};