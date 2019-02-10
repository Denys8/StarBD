import React, { Component } from "react";
import ItemList from "../item_list";
import PersonDetails from "../person_details";

import "./people_page.scss";
import ErrorIndicator from "../error_indicator";
import SwapiService from "../../services/swapi_service";

const Row = ({ left, rigth }) => {
  return (
    <div className="card">
      {left}
      {rigth}
    </div>
  );
};

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        OnItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={itemList} rigth={personDetails} />;
  }
}
