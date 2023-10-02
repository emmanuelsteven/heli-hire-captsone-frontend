import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faUser,
  faHelicopter,
  faCartPlus,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <div className="side-bar">
        <ul>
          <li>
            <Link className="my-link">
              <FontAwesomeIcon className="icon" icon={faUser} />
            </Link>
          </li>
        </ul>
        <ul className="main-nav">
          <li>
            <Link className="my-link">
              <FontAwesomeIcon className="icon" icon={faHouse} /> <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="my-link">
              {" "}
              <FontAwesomeIcon className="icon" icon={faHelicopter} />
              <p>HeliCopters</p>
            </Link>
          </li>
          <li>
            <Link className="my-link">
              <FontAwesomeIcon className="icon" icon={faCartPlus} />
              <p>Add Helicopter</p>
            </Link>
          </li>
          <li>
            <Link className="my-link">
              <FontAwesomeIcon className="icon" icon={faTrash} />
              <p>Delete</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="my-link">
              <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
