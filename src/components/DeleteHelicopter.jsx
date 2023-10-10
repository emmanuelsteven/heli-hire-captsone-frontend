import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHelicopters,
  deleteHelicopter,
} from "../features/helicopters/helicopterSlice";

const DeleteHelicopterComponent = () => {
  const dispatch = useDispatch();
  const helicopters = useSelector((state) => state.helicopter);
  console.log(helicopters);
  const handleDelete = (e) => {
    dispatch(deleteHelicopter(e.target.parentElement.id));
  };
  useEffect(() => {
    dispatch(fetchHelicopters());
  }, [dispatch, handleDelete]);
  return (
    <>
      <div style={{ maxHeight: "600px" }}>
        <table
          className="min-w-full leading-normal"
          style={{
            overflowY: "scroll",
            maxHeight: "300px",
          }}
        >
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Helicopter
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Price (USD)
              </th>
              {/* <th
  									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
  									Status
  								</th> */}
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {helicopters.helicopter.map((helicopter) => {
              const { id, name, image, description, price } = helicopter;
              return (
                <tr key={id} id={id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={image}
                          alt={name}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {description}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{price}</p>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{price}</p>
                      </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-black-900 bg-[#dc2626] rounded-full leading-tight cursor-pointer"
                      onClick={(e) => handleDelete(e)}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeleteHelicopterComponent;
