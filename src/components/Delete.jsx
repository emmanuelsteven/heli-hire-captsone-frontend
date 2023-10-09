import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelicopters, deleteHelicopter } from "../features/helicopters/helicopterSlice";

const DeleteComponent = () => {
    const dispatch = useDispatch();
    const helicopters = useSelector((state) => state.helicopter);
    console.log(helicopters);
    const handleDelete = (e) => {
        //display the id of the helicopter to be deleted
        console.log(e.target.parentElement.id);
        console.log(helicopters.helicopter.filter((helicopter) => helicopter.id !== +e.target.parentElement.id));
        //dispatch the deleteHelicopter action here
        dispatch(deleteHelicopter(e.target.parentElement.id));
    };
    useEffect(() => {
        dispatch(fetchHelicopters());
    }, [dispatch]);
    return (
      <>
        <h1>This is the delete page</h1>
        <ul>
          {helicopters.helicopter.map((helicopter) => {
            const { id, name, image, description } = helicopter;
            return (
              <li key={id} id={id}>
                <div>
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
                    <p>{description}</p>
                </div>
                <div onClick={(e) => handleDelete(e)}>delete helicopter</div>
              </li>
            );
          })}
        </ul>
      </>
    );
}
 
export default DeleteComponent;
