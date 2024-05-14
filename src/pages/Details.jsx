import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {  useLoaderData } from "react-router-dom";


const Details = () => {
  const query = useLoaderData();
  const { product_name, imgURL, brand, queries_title, reason, user_info } =
    query;
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${imgURL})` }}
        className="h-[400px] lg:h-[800px] bg-cover  w-full"
      >
        <div className=" text-white flex flex-col  justify-center h-[400px] lg:h-[800px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="flex items-center justify-around  space-y-2">
            <div>
              <p className="text-7xl font-extrabold">{product_name}</p>
              <p className="text-3xl font-bold">{brand}</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-extrabold w-10/12">{queries_title}</p>
              <p className="text-2xl font-extrabold text-gray-400 w-10/12">{reason}</p>
              <p className="text-7xl font-extrabold">
                {new Date(user_info.current_time).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="flex gap-2 mt-16 flex-col">
                <small className="font-bold text-sm text-gray-300 flex  items-center gap-4">
                  <FaRegUserCircle size={28}/>
                  <span>{user_info.name}</span>
                </small>
                <small className="font-bold text-sm text-gray-300 flex  items-center gap-4">
                  <MdOutlineAlternateEmail size={28}/>
                  <span>{user_info.email}</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
