import { useState, useEffect } from "react";
import "./styles/MainPage.css";

export default function MainPage() {
    const [planet, setPlanet] = useState("")
    const [starsPositionn, setStarsPositionn] = useState([]);
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        const tempA = [];
        for (let i = 0; i < 400; i++) {
            const x = Math.floor(Math.random() * 101);
            const y = Math.floor(Math.random() * 101);
            tempA.push([x, y]);
        }
        setStarsPositionn(tempA);
    }, [])

    useEffect(() => {
        console.log(planet);
    }, [planet])

    return (
        <section className="solar-system">
            {starsPositionn.map(e => <div style={{ top: `${e[0]}%`, left: `${e[1]}%` }} className="star"></div>)}
            <div className="star"></div>
            <div className="planet neptune" style={{ animationDuration: `${3300 / speed}s` }} onClick={() => setPlanet("neptune")}>
                <div className="img-planet img-neptune"></div></div>

            <div className="planet uranus" style={{ animationDuration: `${1680 / speed}s` }} onClick={() => setPlanet("uranus")}>
                <div className="img-planet img-uranus"></div></div>

            <div className="planet saturn" style={{ animationDuration: `${580 / speed}s` }} onClick={() => setPlanet("saturn")} >
                <div className="img-planet img-saturn"></div></div>

            <div className="planet jupiter" style={{ animationDuration: `${240 / speed}s` }} onClick={() => setPlanet("jupiter")}>
                <div className="img-planet img-jupiter"></div></div>

            <div className="planet mars" style={{ animationDuration: `${37.6438 / speed}s` }} onClick={() => setPlanet("mars")}>
                <div className="img-planet img-mars"></div></div>

            <div className="planet earth" style={{ animationDuration: `${20 / speed}s` }} onClick={() => setPlanet("earth")}>
                <div className="img-planet img-earth"></div></div>

            <div className="planet venus" style={{ animationDuration: `${12.3287 / speed}s` }} onClick={() => setPlanet("venus")}>
                <div className="img-planet img-venus"></div></div>

            <div className="planet mercury" style={{ animationDuration: `${4.8219 / speed}s` }} onClick={() => setPlanet("mercury")}>
                <div className="img-planet img-mercury"></div></div>

            <div className="sun" onClick={(e) => setPlanet("sun")}>
            </div>
            <div className="buttons-speed">
                <button className="orbit-speed" onClick={() => setSpeed(1)} >x1</button>
                <button className="orbit-speed" onClick={() => setSpeed(5)} >x5</button>
                <button className="orbit-speed" onClick={() => setSpeed(10)}>x10</button>
                <button className="orbit-speed" onClick={() => setSpeed(100)}>x100</button>
            </div>
        </section>
    )
}