import React from "react";
import styled from "styled-components";

export default class FollowerCard extends React.Component {
  render() {
    const { followerData } = this.props;
    return (
      <FollowersCards>
        <img src={followerData.avatar_url} alt="Pictures of followers" />
        <h3>{followerData.login}</h3>
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
  img {
    width: 150px;
    height: 150px;
    border-radius: 3px;
    margin-right: 20px;
  }
  h3{
    font-size: 1.4rem;
  }
`;
