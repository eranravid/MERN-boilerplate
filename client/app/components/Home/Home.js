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
    fetch('/api/orders')
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
        this._modifyOrder(index, null);
      });
  }

  _modifyOrder(index, data) {
    let prevData = this.state.orders;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.splice(index, 1);
    }

    this.setState({
      orders: prevData
    });
  }

  render() {
    return (
      <>
        <p>All Orders:</p>

        <ul>
          { this.state.orders.map((order, i) => (
            <li key={i}>
              <span>{order.firstName} </span>
              <span>{order.LastName} </span>
              <button onClick={() => this.deleteOrder(i)}>x</button>
            </li>
          )) }
        </ul>

      </>
    );
  }
}

export default Home;
