import React from "react";
import FollowersName from "./FollowersName";

export default class FollowersList extends React.Component {
   
  render() {
    //console.log(this.props);
    return (
      <div>
        {this.props.followers.map(follower => {
          return <FollowersName key ={follower.id}followerData={follower} />;
        })}
      </div>
    );
  }
}
