import React, { Component } from "react";
import Spinner from "../spinner";
import "./item_list.scss";

class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <li key={id} onClick={() => this.props.OnItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <div className="card_list">
        <ul>{items}</ul>
      </div>
    );
  }
}

export default ItemList;
