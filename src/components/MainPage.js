import InfoPlanets from "./InfoPlanets";
import { Link, Route, Switch } from 'react-router-dom';
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



    return (
        <section className="solar-system">
            {starsPositionn.map(e => <div style={{ top: `${e[0]}%`, left: `${e[1]}%` }} className="star"></div>)}
            <div className="star"></div>
            <Link to="/planets" className={planet !== "" ? " neptune orbit-active" : "planet neptune"} style={{ animationDuration: `${3300 / speed}s` }} onClick={() => setPlanet("neptune")}>
                <div className={planet === "neptune" ? "img-planet img-neptune clicked" : "img-planet img-neptune"}></div></Link>

            <div className={planet !== "" ? "uranus orbit-active" : "planet uranus"} style={{ animationDuration: `${1680 / speed}s` }} onClick={() => setPlanet("uranus")}>
                <div className={planet === "uranus" ? "img-planet img-uranus clicked" : "img-planet img-uranus"}></div></div>

            <div className={planet !== "" ? " saturn orbit-active" : "planet saturn"} style={{ animationDuration: `${580 / speed}s` }} onClick={() => setPlanet("saturn")} >
                <div className={planet === "saturn" ? "img-planet img-saturn clicked" : "img-planet img-saturn"}></div></div>

            <div className={planet !== "" ? " jupiter orbit-active" : "planet jupiter"} style={{ animationDuration: `${240 / speed}s` }} onClick={() => setPlanet("jupiter")}>
                <div className={planet === "jupiter" ? "img-planet img-jupiter clicked" : "img-planet img-jupiter"}></div></div>

            <div className={planet !== "" ? " mars orbit-active" : "planet mars"} style={{ animationDuration: `${37.6438 / speed}s` }} onClick={() => setPlanet("mars")}>
                <div className={planet === "mars" ? "img-planet img-mars clicked" : "img-planet img-mars"}></div></div>

            <div className={planet !== "" ? " earth orbit-active" : "planet earth"} style={{ animationDuration: `${20 / speed}s` }} onClick={() => setPlanet("earth")}>
                <div className={planet === "earth" ? "img-planet img-earth clicked" : "img-planet img-earth"}></div></div>

            <div className={planet !== "" ? " venus orbit-active" : "planet venus"} style={{ animationDuration: `${12.3287 / speed}s` }} onClick={() => setPlanet("venus")}>
                <div className={planet === "venus" ? "img-planet img-venus clicked" : "img-planet img-venus"}></div></div>

            <div className={planet !== "" ? " mercury orbit-active" : "planet mercury"} style={{ animationDuration: `${4.8219 / speed}s` }} onClick={() => setPlanet("mercury")}>
                <div className={planet === "mercury" ? "img-planet img-mercury clicked" : "img-planet img-mercury"}></div></div>

            <div className={planet !== "" ? "sun orbit-active" : "planet sun"} onClick={() => setPlanet("sun")}>
                <span className={planet === "sun" ? "img-planet img-sun clicked" : "img-planet img-sun"}></span></div>

            <div className={planet !== "" ? "info-active" : "info"}>
                <InfoPlanets setPlanet={setPlanet} planetName={planet} />
            </div>

            <div className={planet !== "" ? "buttons-speed-hidden" : "buttons-speed"} >
                <button className="orbit-speed" onClick={() => setSpeed(1)} >x1</button>
                <button className="orbit-speed" onClick={() => setSpeed(5)} >x5</button>
                <button className="orbit-speed" onClick={() => setSpeed(10)}>x10</button>
                <button className="orbit-speed" onClick={() => setSpeed(100)}>x100</button>
            </div>
        </section>
    )
}