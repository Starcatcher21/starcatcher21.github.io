import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './js/main.js';
import Window from './js/decorator.js';
import Playlist from './js/playlist.js';
import Gallery from './js/gallery.js';
import Wiki from './js/wiki';
import Biomes from './js/wiki/biomes.js';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<HashRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path='/playlist' element={<Window name="Fav Playlist" rout="/playlist"><Playlist /></Window>} />
			<Route path='/gallery' element={<Window name="Gallery" rout="/gallery"><Gallery /></Window>} />
			<Route path='/wiki' element={<Window name="Wiki" rout="/wiki"><Wiki /></Window>} />
			<Route path='/wiki/biomes' element={<Window name="Wiki" rout="/wiki/biomes" min='/wiki'><Biomes /></Window>} />
		</Routes>
	</HashRouter>
  </React.StrictMode>
);
