import React from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  const { Id } = useParams();
  console.log(Id, "from use params");
  return <div>Friend details is coming soon.</div>;
};

export default FriendDetails;
