import axios from "axios";
import { useEffect, useState } from "react";
import ListedProduct from "../components/ListedProduct";

const Suggestion = () => {
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/suggest-product`
    );
    setSuggestion(data);
  };

  console.log(suggestion);
  return (
    <main className="container mx-auto my-32">
      <h2 className="flex items-center justify-center font-extrabold text-4xl text-center mb-4">
        Top Listed Products
      </h2>
      <p className="flex items-center justify-center  text-sm text-center">
        Uncover the hottest rides. Explore top-rated cars, trucks, and SUVs
        based on features, performance, and value
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {suggestion.map((product) => <ListedProduct key={product._id} product={product}/>)}
      </div>
    </main>
  );
};

export default Suggestion;
