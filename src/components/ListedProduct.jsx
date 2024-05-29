const ListedProduct = ({ product }) => {
  const { name, image ,brand,query,suggestion} = product;
  return (
    <div className="card bg-base-100 shadow-xl image-full h-[300px]">
      <figure>
       
        <img  className='w-full bg-cover' src={image} alt={image} />
      </figure>
      <div className="card-body flex items-center justify-center">
        <h2 className="card-title text-white font-extrabold text-2xl">{name}</h2>
        <p className="font-extrabold">{brand}</p>
       <div className="text-white ">
       <p className="font-bold text-xl">Query: <span>{query}</span></p>
        <p>{suggestion}</p>
       </div>
       
      </div>
    </div>
  );
};

export default ListedProduct;
