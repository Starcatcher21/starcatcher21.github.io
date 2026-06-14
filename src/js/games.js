import Window from "./decorator";
import {useEffect, useState} from "react";

export default function Games() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/gen.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (data === undefined || data["games"] === undefined) {
        return <></>
    }
    return (
        <div className="games">
            {data["games"].map((d,i) => {
                var full = d["rating"];
                var empty = 10-d["rating"];
                var stars = ""+("★".repeat(full)) + ("☆".repeat(empty))
                return (
                    <Window name={d["name"]} share={false}>
                        <div className="gam">
                            <img src={"https://starcatcher21.github.io/games/"+d["img"]}></img>
                            <p>{stars}</p>
                        </div>
                    </Window>
                )
            })}
        </div>
    )
}