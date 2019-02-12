import React, { Component } from "react";
import ItemList from "../item_list";
import PersonDetails from "../person_details";
import ErrorBoundry from "../error_boundry";
import SwapiService from "../../services/swapi_service";
import "./people_page.scss";

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
    selectedPerson: 3
  };

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        OnItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name}`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} rigth={personDetails} />;
  }
}
