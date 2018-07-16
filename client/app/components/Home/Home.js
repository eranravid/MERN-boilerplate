import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };

    this.deleteOrder = this.deleteOrder.bind(this);
  }

  componentDidMount() {
    fetch('/api/counters')
      .then(res => res.json())
      .then(json => {
        this.setState({
          orders: json
        });
      });
  }

  deleteOrder(index) {
    const id = this.state.orders[index]._id;

    fetch(`/api/orders/${id}`, { method: 'DELETE' })
      .then(_ => {
        this._modifyCounter(index, null);
      });
  }

  render() {
    return (
      <>
        <p>All Orders:</p>

        <ul>
          { this.state.orders.map((order, i) => (
            <li key={i}>
              <span>{order.shippingAddress.firstName} </span>
              <span>{order.shippingAddress.LastName} </span>
              <button onClick={() => this.deleteOrder(i)}>x</button>
            </li>
          )) }
        </ul>

      </>
    );
  }
}

export default Home;
