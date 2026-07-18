import close from "../close.png";
import minimize from "../minimize.png";
import maximize from "../maximize.png";
import shareimg from "../share.png";
import {Link} from "react-router-dom";
export const web = "https://starcatcher21.github.io";
export default function Window({name, rout, children, min="/", use = true, share = true, full = false}) {
	var fin;
	if (use) {
		fin = web + rout
	} else {
		fin = rout
	}
	return(
		<div className="window">
			<div className="top" id="pixel">
				<div className="left">
					{name}
				</div>
				<div className="right">
					<Link to={min}><img src={minimize} /></Link>
					{share ? <a onClick={() => window.navigator.clipboard.writeText(fin)}><img src={shareimg} /></a> : <></>}
					{full ? <Link to={rout}><img src={maximize} /></Link> : <></>}
					<Link to="/"><img src={close} /></Link>
				</div>
			</div>
			<div className="bottom">
			{children}
			</div>
		</div>
	)
}
export function Banner({name, link}) {
	return (
		<div className="banner">
			<div className="left">
				{name}
			</div>
			<div className="right">
				<a className="here" href={link}>Click Here</a>
			</div>
		</div>
	)
}
