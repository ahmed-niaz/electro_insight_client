import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
const QueryTable = ({ query }) => {
  const { product_name, brand, imgURL, queries_title } = query;
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
      <td>
        <FaRegEdit size={28} />
      </td>
      <td className="px-4 py-4 text-center whitespace-nowrap">
        <MdDeleteOutline size={28} />
      </td>
      <td>
        <TbListDetails size={28} />
      </td>
    </tr>
  );
};

export default QueryTable;
