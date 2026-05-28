import Window from '../decorator';
export default function Mechanics() {
	return (
		<>
		<div className="center">
			<h2>Stargazer mechanics</h2>
		</div>
		<div className='pages center'>
			<Window name="Dash" rout="/wiki/mechanics/dash" min='/wiki'> </Window>
			<Window name="Portals" rout="/wiki/mechanics/portals"min='/wiki'> </Window>
			<Window name="Stargazing" rout="/wiki/mechanics/stargazing"min='/wiki'> </Window>
		</div>
		</>
	)
}
