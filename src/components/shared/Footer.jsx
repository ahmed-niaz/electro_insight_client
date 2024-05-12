import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="border-t-2 p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center container mx-auto">
        <div className="">
          <p className="font-jersey text-4xl font-extrabold text-black tracking-wide">
            <Link className=" text-3xl font-jersey tracking-wide flex items-start">
              ElectroInsight
            </Link>
          </p>
          <small className="text-black font-bold">All rights reserved ©️ 2024</small>
        </div>
        <div>
          <p className="text-black font-bold text-xl mb-4">Terms and Policy</p>
          <ul>
            <li className="text-black text-sm font-bold">Terms of Use</li>
            <li className="text-black text-sm font-bold">Code Of Conduct</li>
            <li className="text-black text-sm font-bold">Privacy</li>
            <li className="text-black text-sm font-bold">Policies</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="text-black font-bold text-xl mb-4">Details</p>
          <ul>
            <li className="text-black text-sm font-bold">About</li>
            <li className="text-black text-sm font-bold">Get Newsletters</li>
            <li className="text-black text-sm font-bold">Queries</li>
            <li className="text-black text-sm font-bold">Cookie Management</li>
          </ul>
        </div>
        <div>
          <p className="text-black font-bold text-xl mb-4">Contact Us</p>
          <ul className="flex gap-8">
            <li className="text-black">
              <FaFacebookSquare size={30} />
            </li>
            <li className="text-black">
              <TiSocialInstagram size={30} />
            </li>
            <li className="text-black">
              <FaXTwitter size={30} />
            </li>
            <li className="text-black">
              <FaLinkedin size={30} />
            </li>
          </ul>
          <div className="mt-8">
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
