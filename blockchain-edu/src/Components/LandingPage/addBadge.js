import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { toast } from 'react-toastify';

class Addbage extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      badge: '',
    };
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
    const { address, badge } = this.state;

    axios.post('http://localhost:9000/gateway/addBadgeToUser', { address, badge })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    const { address, badge } = this.state;
    const isInvalid = badge === '' || address === '';
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
          placeholder="Badge"
          type="text"
          name="badge"
          value={badge}
          onChange={this.onChange}
        />
        <button id="btnShowHide" type="submit"  disabled={isInvalid} onClick={this.handleClick} className="btn btn-warning">Add</button>
      </form>
    );
  }
}

export default (Addbage);
