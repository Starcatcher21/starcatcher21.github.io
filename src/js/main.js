import {Link} from 'react-router-dom';
import Window from './decorator';
import {useEffect, useState} from 'react';

export default function Main() {
	const [data, setData] = useState({});

  	useEffect(() => {
    	fetch('/gen.json')
      		.then(response => response.json())
      		.then(data => setData(data))
      		.catch(error => console.error('Error fetching data:', error));
  	}, []);
	return (
		<>
			{aboutme(data)}
			{socials()}
			{diagnosis(data, "diagnosis")}
			{diagnosis(data, "intrests")}
			<Window name="Playlist link" rout="/playlist" share={false} full={true}>
			<Link to="/playlist">Pony Music playlist visit if you want</Link>
			</Window>
			<Window name="Pony Gallery" rout="/gallery" share={false} full={true}>
			<Link to="/gallery">visit all my pony drawings</Link>
			</Window>
			<Window name="Stargazer Wiki" rout="/wiki" share={false} full={true}>
			<Link to="/wiki">Wiki to my minecraft mod called stargazer</Link><a href='https://modrinth.com/mod/stargazer'>Link to mod</a>
			</Window>
		</>
	)
}

function socials() {
	return (
		<Window name="Socials" rout="/" share={false}>
			<p>1. <a href='https://discordapp.com/users/398872083053936640'>Discord</a></p>
			<p>2. <a href='https://modrinth.com/user/Starcatcher'>Modrinth</a></p>
			<p>3. <a href='https://www.instagram.com/bonnie_starcatcher/'>Instagram</a></p>
			<p>4. <a href='https://toyhou.se/Starcatcher_'>Toyhouse</a></p>
			<p>5. <a href='https://steamcommunity.com/id/star_catcher_/'>Steam</a></p>
			<p>6. <a href='https://github.com/Starcatcher21'>Github</a></p>
			<p>7. <a href='https://m.youtube.com/@bonnie_starcatcher'>Youtube</a></p>
			<p>8. <a href='https://starcatcher21.bandcamp.com/'>Bandcamp</a></p>
		</Window>
	)
}

function aboutme(data) {
	if (data === {}) {
		return (<></>)
	}
	var about = String(data["aboutme"]).replace("${name}", data["name"]).replace("${pronounce}", data["pronounce"])
	return (
		<Window name="About me" rout="/">
		<div className='aboutme'>
			<div className='left'>
			{about}
			</div>
			<div className='right'>
			<img src={data["image"]} />
			</div>
		</div>
		</Window>
	)
}

function diagnosis(data, what) {
	if (data[what] === undefined) {
			return (<></>)
	}
	return (
		<Window name={what.charAt(0).toUpperCase() + what.slice(1)} rout='/' share={false}>
			{data[what].map((d,i) => {
				var num = i + 1;
				return (
					<p>{num}. {d}</p>
				)
			})}
		</Window>
	)
}
