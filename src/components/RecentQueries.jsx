import PropTypes from 'prop-types'
const RecentQueries = ({ query }) => {
  const { imgURL, product_name, brand, queries_title, reason, user_info } =
    query;
  //   console.log(user_info);
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-full mx-auto ">
        <div
          className="w-full h-[400px] bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{ backgroundImage: `url(${imgURL})` }}
        ></div>

        <div className="w-11/12 border-2 border-red-500 -mt-10 overflow-hidden  rounded-lg shadow-lg dark:bg-white">
          <div className="flex justify-center items-center gap-2">
            <h3 className="py-2 font-bold tracking-wide text-center text-black uppercase dark:text-black">
              {product_name}
            </h3>
            <span className="px-3 py-1 text-xs text-white bg-black rounded-full ">
              {brand}
            </span>
          </div>

          <div className="flex justify-around items-center">
            <div>
              <p className="text-xl font-extrabold">
                Reason:{" "}
                <span className="font-bold text-gray-500">{reason}</span>
              </p>
              <p className="text-xl font-extrabold">
                {" "}
                Query Title:{" "}
                <span className="font-bold text-gray-500">{queries_title}</span>
              </p>
              <p className="text-xl font-extrabold">
                Date Posted:{" "}
                <span className="font-bold text-gray-500">
                  {new Date(user_info?.current_time).toDateString()}
                </span>
              </p>
            </div>
            {/* user data */}
            <div>
              <p className="text-gray-400 font-bold">{user_info?.name}</p>
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  <img src={user_info?.profile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
RecentQueries.propTypes = {
    query: PropTypes.object
};
export default RecentQueries;
