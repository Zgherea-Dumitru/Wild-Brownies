import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./styles/Satelites.css";

export default function Satelites({ setPlanet, planetName }) {
    const [planetSat, setPlanetSat] = useState([]);
    const satelitesParents = ["neptune", "uranus", "saturn", "jupiter", "mars", "earth", "venus", "mercure"]
    const handleChangeStelite = (str) => {
        return str === "La Lune" ? "lune" : str.normalize("NFD");
    }

    useEffect(() => {
        axios
            .get(`https://api.le-systeme-solaire.net/rest/bodies/${planetName.split(" ")[0]}`)
            .then((response) => {
                if (satelitesParents.includes(planetName.toLowerCase())) {
                    setPlanetSat(response.data)
                }
                console.log(response.data);
            })
    }, [planetName]);

    return (
        <div className={planetName !== "" ? "satelites" : "satelitesClose"}>
            {planetSat.moons !== null && planetSat.moons !== undefined
                ? planetSat.moons.filter((e, i) => i < 3).map(e => {
                    return (
                        <div onClick={() => setPlanet(handleChangeStelite(e.moon) + " " + planetName)} style={{ animationDuration: "3s" }} className="satelite-img"></div>
                    )
                })
                : null
            }
        </div>
    )
}