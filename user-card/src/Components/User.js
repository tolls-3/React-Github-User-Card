import React from "react";
import styled from "styled-components";

export default class User extends React.Component {
  //   constructor(props) {
  //     //debugger;
  //     super(props);
  //     //console.log(props);
  //   }
  render() {
    return (
      <UserCards>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.login}</p>
        <img src={this.props.user.avatar_url} alt="Tolu" />
        <p>No of Followers: {this.props.user.followers}</p>
      </UserCards>
    );
  }
}

const UserCards = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #fff;
  margin-bottom: 30px;
`;
