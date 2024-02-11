import React from "react";
import Single from "./../../public/img/mentor.jpeg";
import Double from "./../../public/img/dean.jpeg";

const Mentor = () => {
  return (
    <div className="destination my-16 mx-8 text-center md:my-16 md:mx-24 text-black">
      {/* <h1 className="font-bold text-5xl">Our Events</h1> */}
      <h1 className="relative text-center text-3xl font-semibold my-7 text-white">
        MENTORS
      </h1>

      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full bg-slate-500 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-full"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Sridhara H S
          </h2>
          <div className="text-center font-medium">
            <p className="  text-center py-2 border-b mx-8 mt-8 text-white">
              Robotics Lab Mentor
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-slate-500 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-transparent rounded-full"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Dr. V Siddeswara Prasad
          </h2>
          <div className="text-center font-medium">
            <p className=" text-center py-2 border-b mx-8 mt-8 text-white">
              Robotics Lab Co-ordinator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mentor;
