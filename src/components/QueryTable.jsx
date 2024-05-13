import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import PropTypes from "prop-types";
const QueryTable = ({ query, handleDelete }) => {
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
      <td className="px-4 py-4  whitespace-nowrap">
        <button>
          <FaRegEdit size={28} />
        </button>
      </td>
      <td className="px-4 py-4  whitespace-nowrap">
        <button onClick={() => handleDelete(query._id)}>
          <MdDeleteOutline size={28} />
        </button>
      </td>
      <td className="px-4 py-4  whitespace-nowrap">
        <button>
          <TbListDetails size={28} />
        </button>
      </td>
    </tr>
  );
};

QueryTable.propTypes = {
  query: PropTypes.shape({
    product_name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    queries_title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default QueryTable;
