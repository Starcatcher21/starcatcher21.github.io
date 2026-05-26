import Window from "./decorator";
import images from "../images/pony";

export default function Gallery() {
	return (
		<div className="gallery">
		{images.map((img, index) => (
        	<div>
          		<img key={index} src={img} alt={img} />
        	</div>
      	))}
		</div>
	)
}
