import React from 'react';
import styled from "styled-components";

export default class FollowerCard extends React.Component {
    render() {
        const { followerData } = this.props;
        return (
            <FollowersCards>
                <img src={followerData.avatar_url} alt='Pictures of followers'/>
                <h1>{followerData.login}</h1>
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
`;