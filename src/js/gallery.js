import Window from "./decorator";
import { imageRegistry } from "../imageRegistry";

export default function Gallery() {
	const emotes = Object.values(imageRegistry.emotes || {});
	const emotesw = Object.values(imageRegistry.w || {});
	const photos = Object.values(imageRegistry.photos || {})
	return (
		<div className="gallery">
		{photos.map((img, index) => (
        	<div>
				<Window name={Object.keys(imageRegistry.photos || {})[index].split(".")[0]} rout={"./photos/"+Object.keys(imageRegistry.photos || {})[index].split(".")[0]}>
          		<img className="image" key={index} src={img} alt={img} />
				</Window>
        	</div>
      	))}
		{emotes.map((img, index) => (
        	<div>
				<Window name={Object.keys(imageRegistry.emotes || {})[index].split(".")[0]} rout={"./emotes/"+Object.keys(imageRegistry.emotes || {})[index].split(".")[0]}>
          		<img className="image" key={index} src={img} alt={img} />
				</Window>
        	</div>
      	))}
		{emotesw.map((img, index) => (
        	<div>
				<Window name={Object.keys(imageRegistry.w || {})[index].split(".")[0]} rout={"./emotes/w/"+Object.keys(imageRegistry.w || {})[index].split(".")[0]}>
          		<img className="image" key={index} src={img} alt={img} />
				</Window>
        	</div>
      	))}
		</div>
	)
}
