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
        <h3>{this.props.user.name}</h3>
        <h3>{this.props.user.login}</h3>
        <img src={this.props.user.avatar_url} alt="Tolu" />
        <h3>No of Followers: {this.props.user.followers}</h3>
      </UserCards>
    );
  }
}

const UserCards = styled.div`
  border: 2px solid red;
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #fff;
  margin-bottom: 30px;
  height:auto;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    width: 40%;
    border-radius: 5px 5px 0 0;
    margin-right: 20px;
  }
  h3{
    font-size: 1.4rem;

  }
`;
