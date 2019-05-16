import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { toast } from 'react-toastify';

class Createuser extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      userName: '',
    };
  }

  hideAlert = (e) => {
    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
  }

  handleClick = (e) => {
      toast(  <SweetAlert
                 success
                 title="Success"
                 onConfirm={this.hideAlert}
              >
                You have added details to the Smart Contract!
              </SweetAlert>);
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { address, userName } = this.state;

    axios.post('http://localhost:9000/gateway/createUser', { address, userName })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    const { address, userName } = this.state;
    const isInvalid = userName === '' || address === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="formgod"
          placeholder="UID"
          type="text"
          name="address"
          value={address}
          onChange={this.onChange}
        />
        <input
          className="formgod"
          placeholder="Name"
          type="text"
          name="userName"
          value={userName}
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.handleClick} disabled={isInvalid} className="btn btn-warning">Add</button>
      </form>
    );
  }
}

export default (Createuser);
