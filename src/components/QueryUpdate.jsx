import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const QueryUpdate = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const query = useLoaderData();
  const { _id, product_name, brand, imgURL, queries_title, reason } = query;

  const handleSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.name.value;
    const brand = form.brand.value;
    const imgURL = form.imgURL.value;
    const queries_title = form.queries_title.value;
    const reason = form.reason.value;
    const email = user?.email;
    const name = user?.displayName;
    const profile = user?.photoURL;
    const current_time = user?.metadata?.creationTime;

    const queryData = {
      product_name,
      brand,
      imgURL,
      queries_title,
      reason,
      user_info: {
        email,
        name,
        profile,
        current_time,
      },
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/queries/${_id}`,
        queryData
      );
      console.log(data);
      navigate("/my-queries");
      toast.success(`Query Updated Successfully`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <main>
      <div className="flex justify-center items-center my-12 ">
        <section className=" p-2 md:p-6 mx-auto  rounded-md shadow-md bg-black  z-10">
          <h2 className="text-lg font-semibold text-white text-center ">
            Update Queries
          </h2>

          <form onSubmit={handleSubmission}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white " htmlFor="name">
                  Product Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={product_name}
                  className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white " htmlFor="brand">
                  Product Brand
                </label>
                <input
                  id="brand"
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white " htmlFor="emailAddress">
                  Product ImageURL
                </label>
                <input
                  id="imgURL"
                  type="text"
                  name="imgURL"
                  defaultValue={imgURL}
                  className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white " htmlFor="emailAddress">
                  Queries Title
                </label>
                <input
                  id=""
                  type="text"
                  name="queries_title"
                  defaultValue={queries_title}
                  className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 ">
              <label className="text-white " htmlFor="description">
                Boycotting Reason Details
              </label>
              <textarea
                className="block w-full min-h-[120px] px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="reason"
                id="reason"
                defaultValue={reason}
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button className="btn glass  bg-white px-8 py-2.5 leading-5 text-black transition-colors duration-300 transhtmlForm  rounded-md font-bold focus:outline-none ">
                Update Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default QueryUpdate;
