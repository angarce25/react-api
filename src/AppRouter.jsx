import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/react-api/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>

            {/* Redirigir a la página de inicio si la ruta no coincide */}
            <Route path='*' element={<Navigate to='/react-api/' />} />
		</Routes>
	);
};
