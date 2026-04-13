import React from "react";
import useFriends from "../../../../Hooks/useFriends";
import FriendCard from "../../../UI/FriendCard/FriendCard";
import Loading from "../../../Loading/Loading";

const Friends = () => {
  const { friends, loading } = useFriends();
  // console.log(friends, loading);

  return (
    <div className="max-w-277.5 mx-auto px-2 pt-10 pb-20">
      <div>
        <h2 className="font-semibold text-2xl text-[#1F2937]">Yours Friends</h2>

        <div>
          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend}></FriendCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
