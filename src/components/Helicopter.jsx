import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";

const HelicopterList = () => {
    const { helicopter } = useSelector((state) => state.helicopter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHelicopters());
    }, [dispatch]);


     return (
        <section className="home-page">
            <h1>LATEST MODELS</h1>
            <p>Please select a chopper to hire</p>
            <div className="choppers">
                {helicopter.map((helicopter) => {
                    const { name, image, description, id } = helicopter
                    return <Helicopter helicopter={helicopter} key={id} />
            })}
            </div>
        </section>
     )
}

const Helicopter = (props) => {
    const { name, image, description } = props.helicopter;
    return (
        <article className="chopper">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </article>
    )
}

export default HelicopterList;