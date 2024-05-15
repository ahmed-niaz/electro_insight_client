import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";
import RecentQueries from "../components/RecentQueries";
import QA from "../components/QA";
import Reviews from "../components/Reviews";
const Home = () => {
  const { user } = useState();
  const [recentQuires, setRecentQuires] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`,{ withCredentials: true });
    setRecentQuires(data);
  };


  console.log(recentQuires);
  return (
    <main>
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-24">
        {recentQuires.slice(0, 8).map((query) => (
          <RecentQueries key={query._id} query={query} />
        ))}
      </div>
      <div className="mb-24 container mx-auto">
        <QA/>
      </div>
      <div className="bg-black py-10">
        <Reviews />
      </div>

    </main>
  );
};

export default Home;
