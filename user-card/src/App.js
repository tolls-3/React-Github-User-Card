import React from "react";
import axios from "axios";
import User from "./Components/User";

const userApi = "https://api.github.com/users/tolls-3";

export default class App extends React.Component {
  constructor() {
    //debugger;
    super();
    this.state = {
      name: "",
      login: "",
      picture: ""
    };
  }

  componentDidMount = () => {
    axios.get(userApi).then(res => {
      //debugger;
      this.setState({
        name: res.data.name,
        login: res.data.login,
        picture: res.data["avatar_url"]
      });
    });
  };

  render() {
    return (
      <div>
        <User
          name= {this.state.name}
          login={this.state.login}
          picture={this.state.picture}
        />
      </div>
    );
  }
}
