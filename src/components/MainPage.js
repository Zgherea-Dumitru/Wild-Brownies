import { useState, useEffect } from "react";
import "./styles/MainPage.css";

export default function MainPage() {
    const [planet, setPlanet] = useState("")
    useEffect(() => {
        console.log(planet);
    }, [planet])


    return (
        <section className="solar-system">
            <div className="planet neptune" onClick={(e) => setPlanet("neptune")}>
                <div className="img-planet img-neptune"></div></div>

            <div className="planet uranus" onClick={(e) => setPlanet("uranus")}>
                <div className="img-planet img-uranus"></div></div>

            <div className="planet saturn" onClick={(e) => setPlanet("saturn")} >
                <div className="img-planet img-saturn"></div></div>

            <div className="planet jupiter" onClick={(e) => setPlanet("jupiter")}>
                <div className="img-planet img-jupiter"></div></div>

            <div className="planet mars" onClick={(e) => setPlanet("mars")}>
                <div className="img-planet img-mars"></div></div>

            <div className="planet earth" onClick={(e) => setPlanet("earth")}>
                <div className="img-planet img-earth"></div></div>

            <div className="planet venus" onClick={(e) => setPlanet("venus")}>
                <div className="img-planet img-venus"></div></div>

            <div className="planet mercury" onClick={(e) => setPlanet("mercury")}>
                <div className="img-planet img-mercury"></div></div>

            <div className="sun" onClick={(e) => setPlanet("sun")}>
            </div>
        </section>
    )
}