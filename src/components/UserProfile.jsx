import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
  }

  componentDidMount() {
    console.log("UserProfile componentDidMount")
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <p>{this.state.email}</p>
      </div>
    );
  }
}

export default UserProfile;