import { useState, useEffect } from "react";
import "./styles/MainPage.css";

export default function MainPage() {
    const [planet, setPlanet] = useState("")
    useEffect(() => {
        console.log(planet);
    }, [planet])

    const handlePlanetChange = (planetName, e) => {
        e.stopPropagation();
        setPlanet(planetName);
    }

    const handleMouseOver = (e) => {
        e.stopPropagation();
    }


    return (
        <section className="solar-system">
            <div className="planet neptune" onClick={(e) => handlePlanetChange("neptune", e)}>
                <div className="img-planet img-neptune"></div>

                <div className="planet uranus" onClick={(e) => handlePlanetChange("uranus", e)}>
                    <div className="img-planet img-uranus"></div>

                    <div className="planet saturn" onClick={(e) => handlePlanetChange("saturn", e)} onMouseEnter={e => handleMouseOver(e)} onMouseLeave={e => handleMouseOver(e)}>
                        <div className="img-planet img-saturn"></div>

                        <div className="planet jupiter" onClick={(e) => handlePlanetChange("jupiter", e)}>
                            <div className="img-planet img-jupiter"></div>

                            <div className="planet mars" onClick={(e) => handlePlanetChange("mars", e)}>
                                <div className="img-planet img-mars"></div>

                                <div className="planet earth" onClick={(e) => handlePlanetChange("earth", e)}>
                                    <div className="img-planet img-earth"></div>

                                    <div className="planet venus" onClick={(e) => handlePlanetChange("venus", e)}>
                                        <div className="img-planet img-venus"></div>

                                        <div className="planet mercury" onClick={(e) => handlePlanetChange("mercury", e)}>
                                            <div className="img-planet img-mercury"></div>

                                            <div className="sun" onClick={(e) => handlePlanetChange("sun", e)}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}