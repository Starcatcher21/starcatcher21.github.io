import Window from '../decorator';
import mf from './images/biomes/moon_forest.png';
import bf from './images/biomes/bone_forest.png';
import asp from './images/biomes/amethyst_spikes.png';
import mw from './images/biomes/moon_wastes.png';
export default function Biomes() {
	return (
		<>
		<div className="center">
			<h2>Stargazer biomes</h2>
		</div>
		<div className='pages center'>
		<Window name="Moon Forest" rout="/wiki/biomes/moon_forest" min='/wiki' full><img src={mf} /></Window>
		<Window name="Bone Forest" rout="/wiki/biomes/bone_forest" min='/wiki' full><img src={bf} /></Window>
		<Window name="Moon Wastes" rout="/wiki/biomes/moon_wastes" min='/wiki' full><img src={mw}/></Window>
		<Window name="Amethyst Spikes" rout="/wiki/biomes/amethyst_spikes" min='/wiki' full><img src={asp}/></Window>
		</div>
		</>
	)
}
