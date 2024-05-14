import axios from "axios";
import { useEffect, useState } from "react";

import { IoGrid } from "react-icons/io5";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import GridLayout from "../components/GridLayout";
import ColumnLayout from "../components/ColumnLayout";
const Queries = () => {
  const { user } = useState();
  const [queries, setQueries] = useState([]);
  const [layout, setLayout] = useState(null);
  const changeLayout = (e) => {
    setLayout(e);
  };
  console.log(layout);
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`);
    setQueries(data);
  };
  // console.log(queries);
  return (
    <main>
      <div className="flex gap-4 justify-end container mx-auto my-4">
        <button onClick={() => changeLayout("grid")}>
          <IoGrid size={28} />
        </button>
        <button onClick={() => changeLayout("column")}>
          <BsReverseListColumnsReverse size={28} />
        </button>
      </div>
      {layout === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto mb-24">
          {queries.map((query) => (
            <GridLayout key={query._id} query={query} />
          ))}
        </div>
      ) : (
        <div className="mb-16">
          <section className="container px-4 mx-auto pt-12">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg  text-black font-bold ">
                My Recommendation
              </h2>

              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
                {queries.length} Query
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
                        {queries.map((query) => (
                          <ColumnLayout key={query._id} query={query} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default Queries;
