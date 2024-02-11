import Mentor from "./Mentor";
import Single from "./../../public/img/team1a.jpg";
import Double from "./../../public/img/team1b.jpg";
import Triple from "./../../public/img/team1c.jpg";

const About = () => {
  return (
    <div className="w-full bg-slate-700 pt-32 pb-1 px-4">
      <h1 className="relative text-center text-3xl font-bold my-7 text-white">ABOUT US</h1>
      <div className=" max-w-full py-32  mx-auto grid gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className=" text-white whitespace-normal text-justify font-semibold  ">
            Under the auspices of IIT Bombay's E-yantra cell, SIT's Robotics
            Club stands alone as the only club of its type. The club is
            dedicated to promoting robotics and related activities.
          </p>
        </div>

        <div className="sm:flex flex-col justify-center ">
          <div className="flex flex-col justify-center">
            <div className="flex  ">
              <p className="py-2 text-white text-justify font-semibold">
                CORSIT, the robotics club of SIT, is a community of like-minded
                individuals who share a passion for robotics and come together
                to learn, build, and have fun with robots. Established in 2006,
                CORSIT has organized national-level workshops and actively
                participated in various national-level events. The club's
                mission is to empower students by providing hands-on
                opportunities to learn about robotics through practical
                experience. As the official body overseeing all robotics
                activities at SIT, CORSIT aims to foster a culture of creativity
                and innovation in the field of robotics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mentor />
      <h1 className="relative text-center text-3xl font-semibold my-7 text-white">
        FOUNDERS
      </h1>

      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full bg-slate-500 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-full"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">Kiran B K</h2>
          <div className="text-center font-medium">
            <p className="  text-center py-2 border-b mx-8 mt-8 text-white">
              Product Owner at Bosch Global Software{" "}
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
            Shivaswaroop P
          </h2>
          <div className="text-center font-medium">
            <p className=" text-center py-2 border-b mx-8 mt-8 text-white">
              Procurement Specialist at ZF Group{" "}
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-500 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" mx-auto mt-[-3rem] bg-white rounded-full h-24 w-24"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-white">
            Divyanshu Sahay
          </h2>
          <div className="text-center font-medium">
            <p className="   text-center py-2 border-b mx-8 mt-8 text-white">
              Firmware Engineer at Intel Corporation{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
