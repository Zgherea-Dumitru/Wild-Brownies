import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InfoPlanets.css';

import jupiter from '../assets/jupiter.jpg'
import terre from '../assets/terre.jpg'

const images = {
    jupiter,
    terre,
};


export default function InfoPlanets() {
    const params = 'jupiter';
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.le-systeme-solaire.net/rest/bodies/${params}`)
            .then((response) => {
                setPlanet(response.data)
            })
    }, []);


    
    // useEffect(() => {
    //     axios
    //         .get('https://www.datastro.eu/api/records/1.0/search/?dataset=donnees-systeme-solaire-solar-system-data')
    //         .then((response) => {
    //             setPlanetImg(response.data.records)
    //         })
    // }, []);

    return (
        <div className="planet-box">
            <div>
                <img
                    src={images[planet.id]}
                    alt=''
                />
            </div>
            <div>
                <h2 className="planet-text">Nom : {planet.name}</h2>
                <p className="planet-text">Inclinaison : {planet.axialTilt}</p>
                <p className="planet-text">Période de révolution autour du Soleil : {planet.sideralOrbit}</p>
                <p className="planet-text">Période de rotation sur lui-même : {planet.sideralRotation}</p>
                <p className="planet-text">Découverte par : {planet.discoveredBy}</p>
                <p className="planet-text">Découverte le : {planet.discoveryDate}</p>
                {
                    //<p className="planet-text">Satellites : {planet.moons.map(element => element.moon)}</p>
                }
                <p className="planet-text">identifiant : {planet.id}</p>
            </div>
        </div>
    )
}