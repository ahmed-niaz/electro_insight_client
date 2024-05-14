

const ColumnLayout = ({ query }) => {
  const { _id, imgURL, product_name, brand, queries_title, reason, user_info } =
    query;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        <div className="avatar">
          <div className="w-8 mask mask-hexagon">
            <img src={imgURL} />
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {product_name}
      </td>

      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {brand}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">{queries_title}</td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        {" "}
        {new Date(user_info.current_time).toDateString()}
      </td>
    </tr>
  );
};

export default ColumnLayout;
