import React, { useState } from "react";
import { useParams } from "react-router";
import useFriends from "../../Hooks/useFriends";
import Loading from "../../Components/Loading/Loading";
import {
  RiArchiveLine,
  RiDeleteBinLine,
  RiNotificationSnoozeLine,
} from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { Id } = useParams();
  const { friends, loading } = useFriends();

  const targetFriend = friends.find((friend) => friend.id === Number(Id));
  // console.log(targetFriend, "t");

  const [call, setCall] = useState([]);
  const [test, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (targetFriend) => {
    console.log(targetFriend, "audio call");
    toast.success(`${targetFriend.name} is calling Now!`, {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const handleText = (targetFriend) => {
    console.log(targetFriend, "text");
    toast.success(`${targetFriend.name} is texting Now!`, {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const handleVideo = (targetFriend) => {
    console.log(targetFriend, "Video call");
    toast.success(`${targetFriend.name} is video calling Now!`, {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="bg-[#F8FAFC]">
          <div className="max-w-277.5 mx-auto px-2 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* left side culm */}
            <div className="md:col-span-">
              <div className="space-y-4">
                <div className=" space-y-4 bg-white p-6 rounded-lg shadow">
                  <img className="mx-auto" src={targetFriend.picture} alt="" />

                  <div className="space-y-3 text-center">
                    <h2 className="font-semibold text-xl text-[#1F2937]"></h2>

                    <p
                      className={`font-medium w-fit mx-auto text-[14px] px-2.5 py-1 rounded-full text-white ${targetFriend.status == "On-Track" ? "bg-[#244D3F]" : targetFriend.status == "Overdue" ? "bg-[#EF4444]" : targetFriend.status == "Almost Due" ? "bg-[#EFAD44]" : ""}`}
                    >
                      {targetFriend.status}
                    </p>

                    <div className="flex justify-center gap-2">
                      {targetFriend.tags.map((tag, i) => (
                        <p
                          key={i}
                          className="font-medium text-[14px] px-2.5 py-1 rounded-full text-[#244D3F] bg-[#CBFADB]"
                        >
                          {tag.toUpperCase()}
                        </p>
                      ))}
                    </div>

                    <p className="font-medium italic text-[#64748B]">
                      {targetFriend.bio}
                    </p>

                    <p className="text-[#64748B] text-[14px]">
                      Preferred: email
                    </p>
                  </div>
                </div>

                {/* left culms tree btns */}
                <div className="font-medium text-[#1F2937] flex flex-col gap-2">
                  <div className="p-4 border border-[#E9E9E9] rounded-md cursor-pointer w-full flex justify-center bg-white">
                    <button className="flex gap-2 items-center">
                      <RiNotificationSnoozeLine /> Snooze 2 Weeks
                    </button>
                  </div>

                  <div className="p-4 border border-[#E9E9E9] rounded-md cursor-pointer w-full flex justify-center bg-white">
                    <button className="flex gap-2 items-center">
                      <RiArchiveLine /> Archive
                    </button>
                  </div>

                  <div className="p-4 border border-[#E9E9E9] rounded-md cursor-pointer w-full flex justify-center bg-white">
                    <button className="flex gap-2 items-center text-[#EF4444]">
                      <RiDeleteBinLine /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side culm */}
            <div className="md:col-span-2 space-y-6">
              {/* day, goal, next due section */}
              <div className="flex flex-wrap justify-center md:justify-between gap-6">
                <div className="bg-white p-8 rounded-lg space-y-2 text-center w-full md:w-fit">
                  <h2 className="text-[#244D3F] font-semibold text-3xl">
                    {targetFriend.days_since_contact}
                  </h2>
                  <p className="text-[#64748B] text-lg">Days Since Contact</p>
                </div>

                <div className="bg-white p-8 rounded-lg space-y-2 text-center w-full md:w-fit">
                  <h2 className="text-[#244D3F] font-semibold text-3xl">
                    {targetFriend.goal}
                  </h2>
                  <p className="text-[#64748B] text-lg">Goal (Days)</p>
                </div>

                <div className="bg-white p-8 rounded-lg space-y-2 text-center w-full md:w-fit">
                  <h2 className="text-[#244D3F] font-semibold text-3xl">
                    {targetFriend.next_due_date}
                  </h2>
                  <p className="text-[#64748B] text-lg">Next Due</p>
                </div>
              </div>

              {/* Relationship Goal */}
              <div className="bg-white p-6 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium text-[#244D3F]">
                    Relationship Goal
                  </h2>

                  <button className="btn text-[#1F2937] font-medium text-[14px]">
                    Edit
                  </button>
                </div>

                <p className="text-lg">
                  Connect every{" "}
                  <span className="text-[#1F2937] font-bold">
                    {targetFriend.goal} days
                  </span>
                </p>
              </div>

              {/* Quick Check-In  */}
              <div className="bg-white p-6 rounded-lg space-y-4">
                <h2 className="font-medium text-xl text-[#244D3F]">
                  Quick Check-In
                </h2>

                <div className="flex flex-col md:flex-row justify-between gap-4 text-[#1F2937] text-xl">
                  <button
                    className="btn flex-1 gap-2 py-4 md:py-7"
                    onClick={() => handleCall(targetFriend)}
                  >
                    <FiPhoneCall className="text-2xl" /> Call
                  </button>

                  <button
                    className="btn flex-1 gap-2 py-4 md:py-7"
                    onClick={() => handleText(targetFriend)}
                  >
                    <MdOutlineTextsms className="text-2xl" /> Text
                  </button>

                  <button
                    className="btn flex-1 gap-2 py-4 md:py-7"
                    onClick={() => handleVideo(targetFriend)}
                  >
                    <LuVideo className="text-2xl" /> Video
                  </button>
                </div>
              </div>

              {/* Recent Interactions */}
              <div className="bg-white p-6 rounded-lg space-y-5">
                <div className=" flex justify-between items-center text-[#1F2937]">
                  <h2 className="text-[#244D3F] font-medium text-xl">
                    Recent Interactions
                  </h2>
                  <button className="btn px-2 md:px-4">
                    <FaHistory /> Full History
                  </button>
                </div>

                <div className="divide-y divide-[#E9E9E9]">
                  {/* call */}
                  <div className=" flex justify-between items-center py-3">
                    <div className="flex gap-2 items-center">
                      <FiPhoneCall className="text-3xl" />

                      <div>
                        <h3 className="text-lg text-[#1F2937]">Call</h3>
                        <p className="text-[#64748B]">
                          Asked for career advice
                        </p>
                      </div>
                    </div>

                    <p className="text-[#64748B] text-[14px]">
                      {targetFriend.next_due_date}
                    </p>
                  </div>

                  {/* Massage */}
                  <div className=" flex justify-between items-center py-3">
                    <div className="flex gap-2 items-center">
                      <MdOutlineTextsms className="text-3xl" />

                      <div>
                        <h3 className="text-lg text-[#1F2937]">Text</h3>
                        <p className="text-[#64748B]">
                          Asked for career advice
                        </p>
                      </div>
                    </div>

                    <p className="text-[#64748B] text-[14px]">
                      {targetFriend.next_due_date}
                    </p>
                  </div>

                  {/* Video */}
                  <div className=" flex justify-between items-center py-3">
                    <div className="flex gap-2 items-center">
                      <LuVideo className="text-3xl" />

                      <div>
                        <h3 className="text-lg text-[#1F2937]">Video</h3>
                        <p className="text-[#64748B]">
                          Industry conference meetup
                        </p>
                      </div>
                    </div>

                    <p className="text-[#64748B] text-[14px]">
                      {targetFriend.next_due_date}
                    </p>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendDetails;
