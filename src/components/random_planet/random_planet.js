import React, { Component } from 'react';
import SwapiService from '../../services/swapi_service';
import Spinner from '../spinner';
import ErrorIndicator from '../error_indicator';

import './random_planet.scss';

export default class RandomPlanet extends Component {

    constructor() {
        super();
        this.updatePlanet();
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errMessege = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;


        return (
            <div className='block_random'>
                {errMessege}
                {spinner}
                {content}
            </div>
        );
    };
};

const PlanetView = ({ planet }) => {

    const { id, name, population,
        rotationPeriod, diameter } = planet;


    return (
        <React.Fragment>
            <img src={`https:/starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="#" />
            <div className="info_card">
                <h3>
                    {name}
                </h3>
                <ul>
                    <li>
                        <span>Population</span>
                        <span>{population} </span>
                    </li>
                    <li>
                        <span> Rotaion Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li>
                        <span>Diameter</span>
                        <span>{diameter}</span>
                    </li>

                </ul>
            </div>
        </React.Fragment>
    );
};