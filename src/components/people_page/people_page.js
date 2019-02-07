import React, { Component } from 'react';
import ItemList from '../item_list';
import PersonDetails from '../person_details';

import './people_page.scss';
import ErrorIndicator from '../error_indicator';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        if (this.state.hasError){
            return <ErrorIndicator />
        }
        
        return (
            <div className="card">
                <ItemList OnItemSelected={this.onPersonSelected} />
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        )
    };
};