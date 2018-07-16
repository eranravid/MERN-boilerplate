import React, { Component } from 'react';
import 'whatwg-fetch';

class NewOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
        orders: []
    };

    this.newOrder = this.createNewOrder.bind(this);
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

  createNewOrder(event) {
    event.preventDefault();
    const form = event.target;
    fetch('/api/newOrder', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.orders;
        data.push(json);

        this.setState({
            orders: data
        });
      });
  }

  render() {
    return (
      <>
        <p>Shipping Address:</p>

        {<form onSubmit={this.newOrder}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" />
            <br></br>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" />
            <br></br>
            <label htmlFor="address">Adress</label>
            <input id="address" name="address" type="text" />
            <br></br>
            <label htmlFor="zipcode">zipcode</label>
            <input id="zipcode" name="zipcode" type="text" />
            <br></br>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" type="text" />
            <br></br>
            <label htmlFor="notes">Adress</label>
            <input id="notes" name="notes" type="text" />
            <br></br>
            <button>Send Order!</button>
        </form>}
      </>
    );
  }
}

export default NewOrder;
