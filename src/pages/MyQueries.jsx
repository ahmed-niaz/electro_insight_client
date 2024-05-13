import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QueryTable from "../components/QueryTable";

const MyQueries = () => {
  const { user } = useState();
  const [quires, setQuires] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`);
    setQuires(data);
  };

  return (
    <main>
      <div>
        <Link to="/add-queries">Add Queries</Link>
      </div>
      <div>
        <section className="container px-4 mx-auto pt-12">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg  text-black font-bold ">My Quires</h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
             {quires.length} Query
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
                          Query Title
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                        >
                          Update
                        </th>

                        <th className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold">
                          Delete
                        </th>
                        <th className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                     {
                        quires.map(query=> <QueryTable key={query._id} query={query}/>)
                     }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyQueries;
