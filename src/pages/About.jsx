function About() {
  return (
    <div className="h-screen	w-screen	">
      <div className="flex">
        <span className="font-bold text-sm sm:text-xl mx-auto p-3">
          ABOUT US
        </span>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 mx-5 justify-center items-center text-justify my-auto ">
          Under the auspices of IIT Bombay's E-yantra cell, SIT's Robotics Club
          stands alone as the only club of its type. The club is dedicated to
          promoting robotics and related activities.
        </div>
        <div className="w-1/2 mx-5 justify-center items-center text-justify	 ">
          CORSIT, the robotics club of SIT, is a community of like-minded
          individuals who share a passion for robotics and come together to
          learn, build, and have fun with robots. Established in 2006, CORSIT
          has organized national-level workshops and actively participated in
          various national-level events. The club's mission is to empower
          students by providing hands-on opportunities to learn about robotics
          through practical experience. As the official body overseeing all
          robotics activities at SIT, CORSIT aims to foster a culture of
          creativity and innovation in the field of robotics.
        </div>
      </div>
      <div className="flex">
        <span className="font-bold text-sm sm:text-xl mx-auto p-3">
          MENTORS
        </span>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 mx-5 justify-center items-center text-justify my-auto">
          Sridhara H S
        </div>
        <div className="w-1/2 mx-5 justify-center items-center text-justify my-auto">
          Dr. V Siddeswara Prasad
        </div>
      </div>
    </div>
  );
}

export default About;
