import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQueries = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  console.log(user);
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

    console.table(queryData);

    try {
      const { data } = await axios.post(
        `http://localhost:3000/add-query`,
        queryData
      );
      console.log(data);
      navigate('/my-queries')
      toast.success(`Query Added Successfully`);
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
            Add Queries
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
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button className="btn glass  bg-white px-8 py-2.5 leading-5 text-black transition-colors duration-300 transhtmlForm  rounded-md font-bold focus:outline-none ">
                Add Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default AddQueries;
