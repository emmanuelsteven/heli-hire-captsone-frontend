import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../assets/styles/details.css";
import LayoutComponent from "../components/Layout";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchHelicopters());
    if (!window.localStorage.getItem('logged_in')) {
      navigate('/login');
    }
  }, [dispatch]);
  const { helicopter } = useSelector((state) => state.helicopter);
  const { id } = useParams();
  const selectHelicopter = helicopter.find((item) => item.id === Number(id));
  
  if (!selectHelicopter) {
    return <div>Loading...</div>;
  }

  const handlePreviousPage = () => {
    navigate("/helicopters");
  };
  return (
    <LayoutComponent>
      <div className="h-[100vh] md:w-[100%] flex-col">
        <figure className="flex flex-col md:grow md:flex-row h-[90%]">
          <img
            src={selectHelicopter.image}
            alt={selectHelicopter.name}
            className="w-full h-[55%]  md:w-[70%] md:h-full rounded-md shadow-xl"
          />
          <figcaption className="prose w-full justify-between items-center md:w-[30%] flex flex-col grow gap-2  pt-10">
          <h1 className="text-2xl">{selectHelicopter.name}</h1>
          <p>{selectHelicopter.description}</p>

          <h3 className="border-solid border-2 pr-10 rounded-md border-gray-400 flex w-[300px] md:w-full items-center justify-between p-0">
            <span className="bg-[#97bf0f] text-white p-2 rounded-r-md">Price per day</span>
            {selectHelicopter.price} USD
          </h3>
          <table className="md:w-full p-0">
            <tr className="flex flex-col w-[300px]  md:w-[100%]">
              <td className="">
                <h3 className="border-solid border-2 pr-10 rounded-md border-gray-400 flex w-[300px] md:w-full items-center justify-between p-0">
                  <span className="bg-gray-400 p-2 rounded-r-md">Model </span>
                  {selectHelicopter.model}
                </h3>
              </td>
              <td className="">
                <h3 className="border-solid border-2 pr-10 rounded-md border-gray-400 flex w-[300px] md:w-full items-center justify-between p-0">
                  <span className="bg-gray-400 p-2 rounded-r-md">Carriage capacity </span>
                  {selectHelicopter.carriage_capacity}
                </h3>
              </td>
              <td className="">
                <h3 className="border-solid border-2 pr-10 rounded-md border-gray-400 flex w-[300px] md:w-full items-center justify-between p-0">
                  <span className="bg-gray-400 p-2 rounded-r-md">Contact</span>
                  {selectHelicopter.contact}
                </h3>
              </td>
            </tr>
          </table>
          <Link to='/new-reservation' className="p-2 rounded-full bg-[#97bf0f] text-white w-[300px] md:w-full">Reserve</Link>
          </figcaption>
        </figure>
        <div>
          <button className="p-5 bg-[#96be0d] rounded-l-full" onClick={handlePreviousPage}>
            <FaAngleLeft />
          </button>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Details;
