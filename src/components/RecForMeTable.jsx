const RecForMeTable = ({ rec }) => {
  const { title, rec_imgURL, rec_product, query, current_time } = rec;
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        <div className="avatar">
          <div className="w-8 mask mask-hexagon">
            <img src={rec_imgURL} />
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {title}
      </td>
      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {rec_product}
      </td>
      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {query.query_product_name}
      </td>
      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {query.query_title}
      </td>
      <td className="px-4 py-4 text-sm text-black font-bold  whitespace-nowrap">
        {new Date(current_time).toDateString()}
      </td>
    </tr>
  );
};

export default RecForMeTable;
