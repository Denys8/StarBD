import React, { Component } from 'react';
import SwapiService from '../../services/swapi_service';
import Spinner from '../spinner';

import './random_planet.scss';

export default class RandomPlanet extends Component {

    constructor() {
        super();
        this.updatePlanet();
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
    };

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    };

    render() {

        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

        return (
            <div className='block_random' >
                <Spinner />
            </div>
        )
    };
};