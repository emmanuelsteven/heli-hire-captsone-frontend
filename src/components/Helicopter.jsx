import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import { Icon } from '@iconify/react';

const HelicopterList = () => {
    const { helicopter } = useSelector((state) => state.helicopter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHelicopters());
    }, [dispatch]);


     return (
        <section className="home-page">
            <h1 className="latest-models">LATEST MODELS</h1>
            <p className="description-1">Please select a chopper to hire</p>
            <div className="span">...............</div>
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
            <div className="image">
            <img src={image} alt={name} />
            </div>
            <h2 className="name">{name}</h2>
            <div className="span">.........</div>
            <p className="description">{description}</p>
            <ul className="icons">
                <li><Icon icon="la:facebook" /></li>
                <li><Icon icon="jam:twitter-circle" /></li>
                <li><Icon icon="entypo-social:instagram-with-circle" /></li>
            </ul>
        </article>
    )
}

export default HelicopterList;