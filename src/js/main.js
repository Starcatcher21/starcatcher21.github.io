import {Link, Scripts} from 'react-router-dom';
import Window from './decorator';
import { Banner } from './decorator';
import {useEffect, useState} from 'react';

export default function Main() {
	const [data, setData] = useState({});

  	useEffect(() => {
    	fetch('/gen.json')
      		.then(response => response.json())
      		.then(data => setData(data))
      		.catch(error => console.error('Error fetching data:', error));
  	}, []);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://transring.neocities.org/ring.js";
		script.async = true;

		// Find the container and append it
		const container = document.getElementById('webring-container');
		if (container) {
			container.appendChild(script);
		}

		// Clean up the script if the component unmounts
		return () => {
			if (container) {
				container.innerHTML = '';
			}
		};
	}, []);
	const blink = '<a href="http://starcatcher21.github.io"><img src="https://starcatcher21.github.io/blinkies/starcatcher.gif" /></a>'
	return (
		<>
			<Banner name="Stargazer out now in beta" link="https://modrinth.com/mod/stargazer" />
			{aboutme(data)}
			<div className='row'>
			{socials(data, "socials")}
			{diagnosis(data, "diagnosis")}
			{diagnosis(data, "intrests")}
			{diagnosis(data, "don't like")}
			</div>
			<Window name="Blinky" share={false} full={false} >
				Copy my blinky to your website.
				<a href="http://starcatcher21.github.io"><img src="https://starcatcher21.github.io/blinkies/starcatcher.gif" /></a>
				<textarea>{blink}</textarea>
			</Window>
			<Window name="More about me" share={false}>
				So you've gone so far so i think you want to know more about me. I'm linux user i use artix btw. I'm making a lot of diffrent types of art like programing you can see this website or minecraft mod on my modrinth page or any project on github. Also i make pixel art you can see examples on this website under pony gallery. I don't share a lot of 3d models anywhere but most of them are inside my minecraft mod so just look at it. Also i make music i share them mostly on youtube and bandcamp it's mostly just soundtrack. And i think that's all Ponies Forever.
			</Window>
			<Window name="Playlist link" rout="/playlist" share={false} full={true}>
			<Link to="/playlist">Pony Music playlist visit if you want</Link>
			</Window>
			{top5music(data)}
			<Window name="Pony Gallery" rout="/gallery" share={false} full={true}>
			<Link to="/gallery">visit all my pony drawings gallery</Link>
			</Window>
			<Window name="Stargazer Wiki" rout="/wiki" share={false} full={true}>
			<Link to="/wiki">Wiki to my minecraft mod called stargazer (Not finished wiki)</Link><a href='https://modrinth.com/mod/stargazer'>Link to mod</a>
			</Window>
			<Window name="Animations and video" rout="/animations" share={false} full={true}>
				<Link to="/animations">Raiting animations and videos i watched</Link>
			</Window>
			{top5(data, "animations")}
			<Window name="Games" rout="/games" share={false} full={true}>
				<Link to="/games">Raiting of games i played</Link>
			</Window>
			{top5(data, "games")}
			<Window name="Translator" rout="/translator" share={false} full={true}>
				<Link to="/translator">Translator to languages like braill, standard galactic alphabet or illuminati</Link>
			</Window>
			<Window name="Stamps" share={false} full={false}>
				<Window name="Countries" share={false} full={false}>{stamps(data, "country")}</Window>
				<Window name="Other" share={false} full={false}>{stamps(data, "stamps")}</Window>
			</Window>
			<Window name="Webrings" share={false} full={false}>
				<div id="webring-container"></div>
			</Window>
			<Window name="Cool sites" share={false} full={false}>
				{blinkies(data)}
			</Window>
		</>
	)
}
function stamps(data, stamp) {
	if(data === {} || data[stamp] === undefined) {
		return <></>
	}
	return <div className="stamps">
		{data[stamp].map((d) => {
			return (
				<img src={d}></img>
			)
		})}
	</div>
}

function blinkies(data) {
	if (data === {} || data["blinkies"] === undefined) {
		return <></>
	}

	return <div className="blinkies">
		{Object.entries(data["blinkies"]).map((a,d) => {
			return (
				<a href={a[1]}><img src={a[0]}></img></a>
			)
		})}
	</div>
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

function socials(data, what) {
	if (data[what] === undefined) {
		return (<></>)
	}
	return (
		<Window name={what.charAt(0).toUpperCase() + what.slice(1)} rout='/' share={false}>
			{data[what].map((d,i) => {
				var num = i + 1;
				return (
					<p>{num}. <a href={d["src"]}>{d["name"]}</a></p>
				)
			})}
		</Window>
	)
}

function top5music(data) {
	if (data["top5music"] === undefined) {
		return (<></>)
	}
	return (
		<Window name="Top 5 Music" rout='/' share={false}>
			<div className="topmusic">
			{data["top5music"].map((d,i) => {
				return <div className="topmusic2">
					<img src={"https://starcatcher21.github.io/music/"+d["img"]}></img><br />
					{d["name"]}<br />
					{d["author"]}
				</div>
			})}
			</div>
		</Window>
	)
}

function top5(data, what) {
	if (data[what] === undefined) {
		return (<></>)
	}
	var sorted = data[what].sort((a,b) => b["rating"] - a["rating"]);
	return (
		<Window name={"Top 5 " + what.charAt(0).toUpperCase() + what.slice(1)} rout='/' share={false}>
			<div className="topmusic">
				{sorted.map((d,i) => {
					if (i >= 5) {
						return <></>
					}
					return <div className="topmusic2">
						<img src={"https://starcatcher21.github.io/" + what + "/"+d["img"]} alt={d["name"]}></img><br />
					</div>
				})}
			</div>
		</Window>
	)
}
