import React, { Component } from "react";
import SwapiService from "../../services/swapi_service";
import Spinner from "../spinner";
import ErrorIndicator from "../error_indicator";
import ErrorButton from "../error_button";

import "./person_details.scss";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false,
      error: false
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  }

  render() {
    const { person, loading, error } = this.state;

    const hasData = !(loading || error);

    const errMessege = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonView person={person} /> : null;

    return (
      <div className="card_person">
        {errMessege}
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img
        src={`https:/starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="character"
      />
      <div className="info_person">
        <h3>{name}</h3>
        <ul>
          <li>
            <span>Gender</span>
            <span>{gender}</span>
          </li>
          <li>
            <span>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li>
            <span>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
