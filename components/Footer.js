import footer from "@/public/images/footer.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-blueGray-400 h-56 mt-14 flex items-center">
        <Image
          className="py-3 mx-3 px-3 cursor-pointer"
          src="/images/footer.png"
          width={334}
          height={62}
          alt="Footer"
        />
        <div className="flex-1 flex justify-end">
          <ul className="flex">
            <li className="inline-block list-none px-2">
              <a href="#">
                <FaFacebook
                  className={
                    "fill-blueGray-500 w-9 h-9 mx-2 hover:fill-blueGray-100"
                  }
                />
              </a>
            </li>
            <li className="inline-block list-none px-2">
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
      </footer>
    </div>
  );
};

export default Footer;
