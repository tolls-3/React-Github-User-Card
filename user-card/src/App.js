import React from "react";
import axios from "axios";
import User from "./Components/User";
import FollowersList from "./Components/FollowersList";
import styled from 'styled-components'

const usersApi = "https://api.github.com/users/tolls-3";
// const options = {
//   headers: { Authorization: "7c4321c5bf19dd2fb3f367648a9a1b7c391a6ba4" }
// };
const followersApi = "https://api.github.com/users/tolls-3/followers";
export default class App extends React.Component {
  constructor() {
    //debugger;
    super();
    this.state = {
      users: {},
      followers: []
    };
  }

  componentDidMount() {
    const usersApiPromise = axios.get(usersApi);
    const followersApiPromise = axios.get(followersApi);
    Promise.all([usersApiPromise, followersApiPromise]).then(
      ([usersAxiosRes, followersAxiosRes]) => {
        this.setState({
          users: usersAxiosRes.data,
          followers: followersAxiosRes.data
        });
      }
    );
  }

  render() {
    //debugger;
    return (
      <ContainerStyle>
        <User user={this.state.users} />
        <FollowersList followers={this.state.followers} />
      </ContainerStyle>
    );
  }
}

const ContainerStyle = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
