import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random_planet';
import ItemList from '../item_list';
import PersonDetails from '../person_details';

import './app.scss';

class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 1,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            };
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div className="app">
                <Header />
                {planet}
                <button
                    className="btn_toggle"
                    onClick={this.toggleRandomPlanet}
                >
                    Toggle Random Planet
                </button>

                <div className="card">
                    <ItemList OnItemSelected={this.onPersonSelected} />
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    };
};

export default App;