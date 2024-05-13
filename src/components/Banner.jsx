import { Link } from "react-router-dom";
import banner from "../assets/banner/banner.jpg";

const Banner = () => {
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="h-[400px] lg:h-[700px] bg-cover  w-full"
      >
        <div className=" text-white flex flex-col  justify-center h-[400px] lg:h-[700px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="flex items-center justify-center flex-col space-y-2">
            <p className="text-2xl font-extrabold">Have any Quires?</p>
            <h1 className="font-extrabold  text-4xl text-center lg:text-5xl w-11/12 lg:w-2/4  mb-8 m-0 lg:ml-16">
              Expand Your Knowledge by Exploring Automotive Questions
            </h1>
            <div className="flex gap-6   m-0 lg:ml-16 justify-center lg:justify-start">
              <Link to="/add-queries">
                <button className="btn btn-wide glass bg-[#0000] text-white">
                  Add Quires
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
