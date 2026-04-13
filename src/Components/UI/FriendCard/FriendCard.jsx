import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { id, name, picture, status, tags, days_since_contact } = friend;
  return (
    <Link
      to={`/friend-details/${id}`}
      className="rounded-lg bg-white p-6 shadow-sm"
    >
      <div className="text-center space-y-3.5">
        <div>
          <img className="mx-auto" src={picture} alt={name} />
        </div>

        <div className="space-y-2.5">
          <h2 className="font-semibold text-xl">{name}</h2>

          <p className="text-[14px] text-[#64748B]">
            {days_since_contact}d ago
          </p>

          <div className="flex justify-center gap-2">
            {tags.map((tag, i) => (
              <p
                key={i}
                className="font-medium text-[14px] px-2.5 py-1 rounded-full text-[#244D3F] bg-[#CBFADB]"
              >
                {tag.toUpperCase()}
              </p>
            ))}
          </div>

          <p
            className={`font-medium w-fit mx-auto text-[14px] px-2.5 py-1 rounded-full text-white ${status == "On-Track" ? "bg-[#244D3F]" : status == "Overdue" ? "bg-[#EF4444]" : status == "Almost Due" ? "bg-[#EFAD44]" : ""}`}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
