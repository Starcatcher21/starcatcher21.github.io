import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './js/main.js';
import Window from './js/decorator.js';
import { Banner } from './js/decorator.js';
import Playlist from './js/playlist.js';
import Gallery from './js/gallery.js';
import Animations from "./js/animations";
import Games from "./js/games";
import Translator from "./js/apps/translator";
import Wiki from './js/wiki';
import Biomes from './js/wiki/biomes.js';
import Mechanics from './js/wiki/mechanics.js';
import Craftings from './js/wiki/craftings.js';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<HashRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path='/playlist' element={<Window name="Fav Playlist" rout="/playlist"><Playlist /></Window>} />
			<Route path='/gallery' element={<Window name="Gallery" rout="/gallery"><Gallery /></Window>} />
			<Route path='/animations' element={<Window name="Animations" rout="/animations"><Animations /></Window>} />
			<Route path='/games' element={<Window name="Games" rout="/games"><Games /></Window>} />
			<Route path='/translator' element={<Window name="Translator" rout="/translator"><Translator /></Window>} />
			<Route path='/wiki' element={<><Banner name="This Wiki is incompleat" link="https://modrinth.com/mod/stargazer"/><Window name="Wiki" rout="/wiki"><Wiki /></Window></>} />
			<Route path='/wiki/biomes' element={<Window name="Wiki" rout="/wiki/biomes" min='/wiki'><Biomes /></Window>} />
			<Route path='/wiki/mechanics' element={<Window name="Wiki" rout="/wiki/mechanics" min='/wiki'><Mechanics /></Window>} />
			<Route path='/wiki/craftings' element={<Window name="Wiki" rout="/wiki/craftings" min='/wiki'><Craftings /></Window>} />
		</Routes>
	</HashRouter>
  </React.StrictMode>
);
