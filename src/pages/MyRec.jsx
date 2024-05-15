import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import MyRecTable from "../components/MyRecTable";
import { useNavigate } from "react-router-dom";

const MyRec = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const [myRec, setMyRec] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/my-rec/${user.email}`,
      { withCredentials: true }
    );

    setMyRec(data);
    navigate("/my-recommendation");
  };

  // console.log(myRec);

  return (
    <div className="mb-16">
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg  text-black font-bold ">My Recommendation</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {myRec.length} Query
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-black ">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm  text-left rtl:text-right text-white font-bold"
                      >
                        <div className="flex items-center gap-x-3 text-white font-bold">
                          <span>Product</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                      >
                        <span>Product Name</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Product Brand</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                      >
                        Query Product Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                      >
                        Query Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                      >
                        Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {myRec.map((rec) => (
                      <MyRecTable key={rec._id} rec={rec} recommendationID = {rec._id}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRec;
