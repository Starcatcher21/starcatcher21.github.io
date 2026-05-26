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
			{diagnosis(data, "diagnosis")}
			{diagnosis(data, "intrests")}
			<Window name="Playlist link" rout="/playlist" share={false} full={true}>
			<Link to="/playlist">Pony Music playlist visit if you want</Link>
			</Window>
			<Window name="Pony Gallery" rout="/gallery" share={false} full={true}>
			<Link to="/gallery">visit all my pony drawings</Link>
			</Window>
			<Window name="Stargazer Wiki" rout="/wiki" share={false} full={true}>
			<Link to="/wiki">Wiki to my minecraft mod called stargazer</Link>
			</Window>
		</>
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
