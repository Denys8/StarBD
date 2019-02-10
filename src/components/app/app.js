import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random_planet";
import ErrorButton from "../error_button";
import ErrorIndicator from "../error_indicator";
import PeoplePage from "../people_page";
import SwapiService from "../../services/swapi_service";
import ItemList from "../item_list";
import PersonDetails from "../person_details";

import "./app.scss";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="app">
        <Header />
        {planet}

        <div>
          <button className="btn_toggle" onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />

        <div className="card">
          <ItemList
            OnItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={item => (
              <span>
                {item.name} <button>!</button>
              </span>
            )}
          />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
        
        <div className="card">
          <ItemList
            OnItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={item => item.name}
          />
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default App;
