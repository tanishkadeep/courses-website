import { Link } from "react-router-dom";
import logo from "../assets/image.jpg";

export const Appbar = () => {
  return (
    <div className="bg-black py-4 px-8 text-white flex flex-col sm:flex-row justify-between items-center">
      <div className="flex justify-center items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-14" />
        </Link>
        <Link to={"/"} className="font-custom text-4xl pl-2 font-extrabold">
          Courses
        </Link>
      </div>
      <div className="flex justify-center items-center font-medium text-lg cursor-pointer pr-8">
        <Link
          to={"/dashboard"}
          className="font-semibold pl-16 hover:text-gray-300 hover:underline"
        >
          Dashboard &rarr;
        </Link>
      </div>
    </div>
  );
};
