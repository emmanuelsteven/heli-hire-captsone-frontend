import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHelicopters } from "../features/helicopters/helicopterSlice";
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

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
            <div className="back"><Icon icon="grommet-icons:caret-next" rotate={2} /></div>
            <div className="choppers">
                {helicopter.map((helicopter) => {
                    const { id } = helicopter
                    return <Helicopter helicopter={helicopter} key={id} />
            })}
            </div>
            <div className="next"><Icon icon="grommet-icons:caret-next" /></div>
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

Helicopter.propTypes = {
    helicopter: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
};

export default HelicopterList;