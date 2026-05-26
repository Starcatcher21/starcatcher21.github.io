import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './js/main.js';
import Window from './js/decorator.js';
import Playlist from './js/playlist.js';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<HashRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path='/playlist' element={<Window name="Fav Playlist" rout="/playlist"><Playlist /></Window>} />
		</Routes>
	</HashRouter>
  </React.StrictMode>
);
// DO NOT FORGOR TO ADD WHEN COMPILE
