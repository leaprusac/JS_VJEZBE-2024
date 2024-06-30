import React, { Component } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import "./App.css";

class App extends Component {
  state = {
    user: null,
    repos: [],
  };

  fetchUserData = async (username) => {
    try { 
      console.log(username);
      const userResponse = await
  axios.get("https://api.github.com/users/" + username);
      const reposResponse = await
  axios.get("https://api.github.com/users/" + username + "/repos");
      this.setState({
        user: userResponse.data,
        repos: reposResponse.data,
      });
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  handleReset = () => {
    this.setState({
      user: null,
      repos: [],
    });
  };

  render() {
    const { user, repos } =
this.state;
    return (
      <div className="container">
        <h1>GitHub User Info</h1>
        <UserForm
        onSubmit={this.fetchUserData} />
        <UserDetails
        user={user}
        repos={repos}
        onReset={this.handleReset} />
      </div>
    );
  }
}

export default App;
