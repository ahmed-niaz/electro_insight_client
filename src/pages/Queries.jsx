import axios from "axios";
import { useEffect, useState } from "react";
import TotalQuery from "../components/TotalQuery";


const Queries = () => {
    const { user } = useState();
    const [queries,setQueries] = useState([]);
    useEffect(() => {
      getData();
    }, [user]);
  
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`);
      setQueries(data);
    };
    console.log(queries);
    return (
        <main>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto my-24">
        {queries.map((query) => (
          <TotalQuery key={query._id} query={query} />
        ))}
      </div>
        </main>
    );
};

export default Queries;