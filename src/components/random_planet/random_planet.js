import React from 'react';

import './random_planet.scss';

const RandomPlanet = () => {
    return (
        <div className='block_random'>
            <img src="https:/starwars-visualguide.com/assets/img/planets/2.jpg" alt="#" />
            <div className="info_card">
                <h3>
                    Planet Earth
                </h3>
                <ul>
                    <li>
                        <span>
                            Population
                        </span>
                        <span>
                            123122223213
                        </span>
                    </li>
                    <li>
                        <span>
                            Rotaion Period
                        </span>
                        <span>
                            43
                        </span>
                    </li>
                    <li>
                        <span>
                            Diameter
                        </span>
                        <span>
                            100
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default RandomPlanet;