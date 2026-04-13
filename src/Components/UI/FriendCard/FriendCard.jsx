import React from "react";

const FriendCard = ({ friend }) => {
  const { name, picture, status, tags, days_since_contact } = friend;
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="text-center space-y-3">
        <div>
          <img className="mx-auto" src={picture} alt={name} />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-xl">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
