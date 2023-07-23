import footer from "@/public/images/footer.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bottom-0 w-full">
      <div className="flex items-center w-full py-16 bg-blueGray-400">
        <Image
          className="px-3 py-3 mx-3 mt-5 cursor-pointer"
          src="/images/footer.png"
          width={334}
          height={62}
          alt="Footer"
        />
        <div className="flex justify-end flex-1">
          <ul className="flex">
            <li className="inline-block px-2 list-none">
              <a href="#">
                <FaFacebook
                  className={
                    "fill-blueGray-500 w-9 h-9 mx-2 hover:fill-blueGray-100"
                  }
                />
              </a>
            </li>
            <li className="inline-block px-2 list-none">
              <a href="#">
                <RiInstagramFill
                  className={
                    "fill-blueGray-500 w-9 h-9 mx-2 hover:fill-blueGray-100"
                  }
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
