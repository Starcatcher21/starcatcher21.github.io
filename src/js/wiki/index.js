import {Link} from 'react-router-dom';
import Window from '../decorator';
import mf from './images/biomes/moon_forest.png';
export default function wiki() {
	return (
		<>
		<div className="center">
			<h2>Welcome to stargazer minecraft mod wiki</h2>
		</div>
		<div className='pages center'>
		<Window name="Biomes" rout="/#/wiki/biomes" min='/wiki' full><Link to="/wiki/biomes"><img src={mf} /></Link></Window>
		<Window name="Mobs" rout="/#/wiki/mobs" min='/wiki' full></Window>
		<Window name="Trees" rout="/#/wiki/trees" min='/wiki' full></Window>
		<Window name="Mechanics" rout="/#/wiki/mechanics" min='/wiki' full></Window>
		<Window name="Craftings" rout="/#/wiki/Craftings" min='/wiki' full></Window>
		</div>
		</>
	)
}
