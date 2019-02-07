import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random_planet';
import ErrorButton from '../error_button';
import ErrorIndicator from '../error_indicator';
import PeoplePage from '../people_page';

import './app.scss';

class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            };
        });
    };



    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        };

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
                <ErrorButton />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        )
    };
};

export default App;