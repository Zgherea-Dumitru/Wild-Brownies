import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InfoPlanets.css';

//import icons and pictures of planets
import angle from '../assets/angle.svg'
import gravity from '../assets/gravity.svg'
import orbite from '../assets/orbite.svg'
import satellites from '../assets/satellites.svg'
import tour from '../assets/tour.svg'
import jupiter from '../assets/jupiter.jpg'
import mars from '../assets/mars.jpg'
import mercure from '../assets/mercure.jpg'
import neptune from '../assets/neptune.jpg'
import saturne from '../assets/saturne.jpg'
import soleil from '../assets/soleil.jpg'
import terre from '../assets/terre.jpg'
import uranus from '../assets/uranus.jpg'
import venus from '../assets/venus.jpg'

const images = {
    jupiter,
    mars,
    mercure,
    neptune,
    saturne,
    soleil,
    terre,
    uranus,
    venus
};

export default function InfoPlanets({ setPlanet, planetName }) {
    const [planetInfo, setPlanetInfo] = useState([]);

    useEffect(() => {
        console.log(planetName);
        axios
            .get(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`)
            .then((response) => {
                setPlanetInfo(response.data);
                console.log(response.data);
            })
    }, [planetName]);

    return (
        <div className="planet-box">
            <div className="planet-info-box">
                <div className="close" onClick={() => setPlanet("")}>&#x2716;</div>
                <h2 className="planet-text planet-title">{planetInfo.name}</h2>
                <div className="info-box">
                    <img src={angle} className="icones" alt="axis" />
                    <p className="planet-text">Inclinaison de {planetInfo.axialTilt} degrés</p>
                </div>
                <div className="info-box">
                    <img src={orbite} className="icones" alt="orbite" />
                    <p className="planet-text">{planetInfo.name} prend {planetInfo.sideralOrbit} jours pour faire le tour de son orbite.</p>
                </div>
                <div className="info-box">
                    <img src={tour} className="icones" alt="turn" />
                    <p className="planet-text"> Il lui faut {planetInfo.sideralRotation} jours pour faire un tour complet sur elle-même.</p>
                </div>
                <div className={planetInfo.moons ? 'info-box' : 'hide-box'}>
                    <img src={satellites} className="icones" alt="satellite" />
                    <p className="planet-text"> Satellites :
                        {planetInfo.moons
                            ? planetInfo.moons.map(element => {
                                return (
                                    <li>{element.moon}</li>
                                )
                            }).slice(0, 5)
                            : null
                        }
                    </p>
                </div>
                <div className="info-box">
                    <img src={gravity} className="icones" alt="gravity" />
                    <p className="planet-text"> Il a une force gravitationnelle de {planetInfo.gravity} N.</p>
                </div>
            </div>
        </div>
    )
}