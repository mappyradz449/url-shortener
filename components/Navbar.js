import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
//import logo from "@/public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center mx-auto">
      <Image
        className="cursor-pointer"
        src="/images/logo.png"
        width={208}
        height={152}
        alt="Logo"
      />
      <div className="flex-1 text-right">
        <ul>
          <li className="inline-block list-none px-2">
            <a href="#">
              <FaFacebook
                className={
                  "fill-blueGray-400 w-9 h-9 pt-2 mx-5 hover:fill-blueGray-100"
                }
              />
            </a>
          </li>
          <li className="inline-block list-none px-2">
            <a href="#">
              <RiInstagramFill
                className={
                  "fill-blueGray-400 w-9 h-9 pt-2 mx-5 hover:fill-blueGray-100"
                }
              />
            </a>
          </li>
          <li className="inline-block list-none px-2">
            <a
              className="text-3xl text-blueGray-400 font-semibold mx-5 hover:text-blueGray-100"
              href="#"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
