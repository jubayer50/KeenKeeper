import React from "react";
import { useParams } from "react-router";
import useFriends from "../../Hooks/useFriends";

const FriendDetails = () => {
  const { Id } = useParams();
  const { friends, setFriends, loading } = useFriends();

  const targetFriend = friends.find((friend) => friend.id === Number(Id));
  console.log(targetFriend);

  return (
    <div>
      <div></div>

      <div></div>
    </div>
  );
};

export default FriendDetails;
