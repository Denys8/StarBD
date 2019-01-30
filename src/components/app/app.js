import React from 'react';

import Header from '../header';
import RandomPlanet from '../random_planet';
import ItemList from '../item_list';
import PersonDetails from '../person_details';

import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <RandomPlanet />
            <div className="card">
                <ItemList />
                <PersonDetails />
            </div>
        </div>
    )
};

export default App;