import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './InfoPlanets.css';

//import icons and pictures of planets
import angle from '../assets/angle.svg'
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

export default function InfoPlanets(props) {
    const params = props.match.params;
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.le-systeme-solaire.net/rest/bodies/${params.id}`)
            .then((response) => {
                setPlanet(response.data)
            })
    }, []);

    return (
        <div className="planet-box">
            <div className="close">
                <Link to = '/'>&#10005;</Link>
            </div>

            <div>
                <img
                    src={images[planet.id]}
                    alt="planet"
                    className="planet-img"
                />
            </div>
            <div>
                <h2 className="planet-text planet-title">{planet.name}</h2>
                <div className="info-box">
                    <img src={angle} className="icones" alt="axis"/>
                    <p className="planet-text">Inclinaison de {planet.axialTilt} degrés</p>
                </div>
                <div className="info-box">
                    <img src={orbite} className="icones" alt="orbite"/>
                    <p className="planet-text">{planet.name} prend {planet.sideralOrbit} jours pour faire le tour de son orbite.</p>
                </div>
                <div className="info-box">
                    <img src={tour} className="icones" alt="turn"/>
                    <p className="planet-text"> Il lui faut {planet.sideralRotation} jours pour faire un tour complet sur elle-même.</p>
                </div>
                <div className={planet.moons ? 'info-box' : 'hide-box'}>
                    <img src={satellites} className="icones" alt="satellite"/>
                    <p className="planet-text"> Satellites :
                        {planet.moons
                            ? planet.moons.map(element => {
                                return (
                                    <li>{element.moon}</li>
                                )
                            }).slice(0, 5)
                            : null
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}