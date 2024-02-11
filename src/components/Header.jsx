import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-slate-200 shadow-md fixed w-screen z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          {/* <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">COR</span>
            <span className="text-red-700">SIT</span>
          </h1> */}
          <img
            src="./../../public/corsitlogo.png"
            alt="img"
            className="h-10 w-10"
          />
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/robocor">
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">
              <span>Robocor-24</span>
            </li>
          </Link>
          {/* <Link to="/heckfest">
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">
              Heckfest
            </li>
          </Link> */}
          <Link to="/projects">
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">
              Projects
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/ourteam">
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">
              OurTeam
            </li>
          </Link>
          <Link to="/contact">
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">
              Contact
            </li>
          </Link>
          <Link to="/alumini">
            <li className=" sm:inline text-slate-700 hover:underline cursor-pointer">
              Alumini
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
