import React, { Component } from 'react';
import SwapiService from '../../services/swapi_service';
import Spinner from '../spinner';

import './item_list.scss';

class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapiService
            .getAllPeaple()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    };

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li
                    key={id}
                    onClick={() => this.props.OnItemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    };

    render() {

        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return (
            <div className="card_list" >
                <ul>
                    {items}
                </ul>
            </div>
        );
    };
};

export default ItemList;