import close from "../images/close.png";
import minimize from "../images/minimize.png";
import maximize from "../images/maximize.png";
import {Link} from "react-router-dom";
export const web = "https://starcatcher21.github.io";
export default function Window({name, rout, children, use = true, share = true}) {
	var fin;
	if (use) {
		fin = web + rout
	} else {
		fin = rout
	}
	return(
		<div className="window">
			<div className="top">
				<div className="left">
					{name}
				</div>
				<div className="right">
					<Link to="/"><img src={minimize} /></Link>
					{share ? <a onClick={() => window.navigator.clipboard.writeText(fin)}><img src={maximize} /></a> : <></>}
					<Link to="/"><img src={close} /></Link>
				</div>
			</div>
			<div className="bottom">
			{children}
			</div>
		</div>
	)
}
