import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddRecommendation = ({ query, user_info }) => {
  const { user } = useAuth();
  console.log(user, user_info);
  const navigate = useNavigate();
  const handleSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const reason = form.reason.value;
    const rec_product = form.rec_product.value;
    const rec_imgURL = form.rec_imgURL.value;
    const email = user?.email;
    const name = user?.displayName;
    const current_time = user?.metadata?.creationTime;
    const recData = {
      title,
      rec_imgURL,
      rec_product,
      reason,
      email,
      name,
      current_time,
      query: {
        queryID: query._id,
        query_title: query.queries_title,
        query_product_name: query.product_name,
        query_email: query.user_info.email,
        query_user_name: query.user_info.name,
      },
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-recommendation`,
        recData
      );
      console.log(data);
      navigate("/my-queries");
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
            Add Recommendation
          </h2>

          <form onSubmit={handleSubmission}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white " htmlFor="name">
                  Recommendation Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white " htmlFor="rec_name">
                  Recommended Product Name
                </label>
                <input
                  id="rec_product"
                  type="text"
                  name="rec_product"
                  className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-white " htmlFor="emailAddress">
                Recommended Product ImageURL
              </label>
              <input
                id="imgURL"
                type="text"
                name="rec_imgURL"
                className="block w-full px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 ">
              <label className="text-white " htmlFor="description">
                Recommendation Reason
              </label>
              <textarea
                className="block w-full min-h-[120px] px-4 py-2 mt-2 text-gray font-bold bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="reason"
                id="reason"
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              {user.email === user_info ? (
                <button
                  className="disabled btn glass bg-white px-8 py-2.5 leading-5 text-black transition-colors duration-300 transhtmlForm rounded-md font-bold focus:outline-none"
                  disabled 
                >
                  Add Recommendation
                </button>
              ) : (
                <button className="btn glass bg-white px-8 py-2.5 leading-5 text-black transition-colors duration-300 transhtmlForm rounded-md font-bold focus:outline-none">
                  Add Recommendation
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default AddRecommendation;
