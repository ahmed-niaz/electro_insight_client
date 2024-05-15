import axios from "axios";
import { useEffect, useState } from "react";
import grid from "../assets/logo/grid.png";
import column from "../assets/logo/column.png";

import GridLayout from "../components/GridLayout";
import ColumnLayout from "../components/ColumnLayout";
const Queries = () => {
  const { user } = useState();
  const [search, setSearch] = useState();
  const [queries, setQueries] = useState([]);
  const [layout, setLayout] = useState(null);
  // const [lowercase,setLowercase] = useState()
  const changeLayout = (e) => {
    setLayout(e);
  };
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`);
    setQueries(data);
  };

  return (
    <main>
      <div className="flex  container mx-auto">
        <div className="flex w-1/2 mx-auto items-center">
          <div>
            <form>
              <label className="input  input-bordered flex items-center gap-2">
                <input
                  name="search"
                  type="text"
                  className="grow"
                  placeholder="Search Here"
                  defaultValue='Product Name'
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </form>
          </div>
          <div className="flex gap-4 justify-end items-center container mx-auto my-4">
            <small className="font-extrabold">Change layout</small>
            <button onClick={() => changeLayout("grid")}>
              <img className="w-16" src={grid} alt="" />
            </button>
            <button onClick={() => changeLayout("column")}>
              <img className="w-12" src={column} alt="" />
            </button>
          </div>
        </div>
      </div>
      {layout === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto mb-24">
          {queries
            
            .map((query) => (
              <GridLayout key={query._id} query={query} />
            ))}
        </div>
      ) : (
        <div className="mb-16">
          <section className="container px-4 mx-auto pt-12">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg  text-black font-bold ">All Quires</h2>

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
                            Query Title
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                          >
                            Timestamp
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm  text-left rtl:text-right text-white font-bold"
                          >
                            Recommended
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        {queries
                          .filter((item) => {
                            return search === ""
                              ? item
                              : item.product_name
                                  .toLowerCase()
                                  .includes(search);
                          })
                          .map((query) => (
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
