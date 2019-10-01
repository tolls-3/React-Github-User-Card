import React from "react";
import styled from "styled-components";

export default class FollowerCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <FollowersCards>
        <img
          src={this.props.followerData.avatar_url}
          alt="Pictures of followers"
        />
        <h3>{this.props.followerData.login}</h3>
      </FollowersCards>
    );
  }
}

const FollowersCards = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #fff;
  margin-bottom: 30px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
    opacity: 0.7;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    :hover {
      height: 180px;
      opacity: 1;
    }
  }
  h3 {
    font-size: 1.4rem;
  }
`;
