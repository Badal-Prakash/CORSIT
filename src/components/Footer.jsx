import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Footer() {
  return (
    <footer className="relative bg-slate-400 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              CORSIT
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Get Social with us! Follow, Like and Connect on our Social Media
              Platforms
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagramSquare className="h-10 w-10 rounded" />
              </button>
              <button
                className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebook className="h-10 w-10 rounded" />
              </button>
              <button
                className=" text-red-600 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaYoutube className="h-10 w-10 rounded" />
              </button>
              <button
                className="text-blueGray-800 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <CiLinkedin className="h-10 w-10 rounded" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  EVENTS
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      RoboExpo
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Workshop
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Robocor
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Hackthon
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  NEED HELP?
                </span>
                <ul className="list-unstyled">
                  <li>
                    <div className="flex items-center my-2">
                      <FaWhatsapp />
                      <span className="text-[16px]">
                        Contact us on WhatsApp
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ">
                      <CiMail />
                      <span>Contact us on Gmail</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
