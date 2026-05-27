import {Link} from 'react-router-dom';
import Window from '../decorator';
import mf from './images/biomes/moon_forest.png';
import mt from './images/Trees/moon_tree.png';
import pt from './images/Mechanics/portal.png';
import ght from './images/mobs/ghost.png';
import ls from './images/craftings/loadstone.png';

export default function wiki() {
	return (
		<>
		<div className="center">
			<h2>Welcome to <a href='https://modrinth.com/mod/stargazer'>stargazer</a> minecraft mod wiki</h2>
		</div>
		<div className='pages center'>
		<Window name="Biomes" rout="/wiki/biomes" min='/wiki' full><Link to="/wiki/biomes"><img src={mf} /></Link></Window>
		<Window name="Mobs" rout="/wiki/mobs" min='/wiki' full><Link to="/wiki/mobs"><img src={ght} /></Link></Window>
		<Window name="Trees" rout="/wiki/trees" min='/wiki' full><Link to="/wiki/trees"><img src={mt} /></Link></Window>
		<Window name="Mechanics" rout="/wiki/mechanics" min='/wiki' full><Link to="/wiki/mechanics"><img src={pt} /></Link></Window>
		<Window name="Craftings" rout="/wiki/craftings" min='/wiki' full><Link to="/wiki/craftings"><img src={ls} /></Link></Window>
		</div>
		</>
	)
}
