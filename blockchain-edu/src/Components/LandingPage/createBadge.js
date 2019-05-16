import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { toast } from 'react-toastify';

class Createbadge extends Component {
  constructor() {
    super();
    this.state = {
      courseName: '',
      courseAuthor: '',
      courseCreationDate: '',
      courseCategory: ''
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
    const { courseName, courseAuthor, courseCreationDate, courseCategory } = this.state;

    axios.post('http://localhost:9000/gateway/createBadge', { courseName, courseAuthor, courseCreationDate, courseCategory })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    const { courseName, courseAuthor, courseCreationDate, courseCategory } = this.state;
    const isInvalid = courseName === '' || courseAuthor === '' || courseCreationDate === '' || courseCategory === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="formgod"
          placeholder="Course name"
          type="text"
          name="courseName"
          value={courseName}
          onChange={this.onChange}
        />
        <input
          className="formgod"
          placeholder="Course author"
          type="text"
          name="courseAuthor"
          value={courseAuthor}
          onChange={this.onChange}
        />
        <input
          className="formgod"
          placeholder="Creation Date"
          type="text"
          name="courseCreationDate"
          value={courseCreationDate}
          onChange={this.onChange}
        />
        <input
          className="formgod"
          placeholder="Course category"
          type="text"
          name="courseCategory"
          value={courseCategory}
          onChange={this.onChange}
        />
        <button id="btnShowHide" type="submit" disabled={isInvalid}  onClick={this.handleClick} className="btn btn-warning">Add</button>
      </form>
    );
  }
}

export default (Createbadge);
