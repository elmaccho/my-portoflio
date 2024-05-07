import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './OpenMenuBtn.css'

export default function OpenMenuBtn({onClick}) {
    return (
      <button className="openMenuBtn" onClick={onClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    );
  }
  