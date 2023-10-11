import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/details.css";
import LayoutComponent from "../Layout";

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
    return <div>Loading...</div>; // or handle the absence of data differently
  }

  const handlePreviousPage = () => {
    navigate("/");
  };
  return (
    <LayoutComponent>
      {" "}
      <h1 className="det-title">Helicopter Details </h1>
      <main>
        <div>
          <button className="return-btn" onClick={handlePreviousPage}>
            <FaAngleLeft />
          </button>
        </div>
        <div className="img-div">
          <img
            src={selectHelicopter.image}
            alt={selectHelicopter.name}
            className="details-img"
          />
        </div>
        <div className="desc-div">
          <h1>{selectHelicopter.name}</h1>
          <h6>Price: {selectHelicopter.price} $</h6>
          <table>
            <tr>
              <td className="bg-white">
                <span> Model: </span>
                <span className="text-right">{selectHelicopter.model}</span>
              </td>
              <td className="bg-silver">
                <span>Carriage Capacity: </span>{" "}
                <span className="text-right">
                  {selectHelicopter.carriage_capacity}
                </span>
              </td>
              <td className="bg-white">
                <span>Contact: </span>
                <span className="text-right">{selectHelicopter.contact}</span>
              </td>
              <td className="bg-silver">
                <span>Color:</span>
                <span className="text-right"> Base Color</span>
              </td>
            </tr>
          </table>
          <button className="res-btn">Reserve</button>
        </div>
      </main>
    </LayoutComponent>
  );
};

export default Details;
