import { Link } from "react-router-dom";

const Dropdown = ({toggle}) => {

  return (
    <div className="grid grid-rows-4 text-center items-center bg-yellow-500" onClick={toggle}>
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="menu">
        Menu
      </Link>
      <Link className="p-4" to="about">
        About
      </Link>
      <Link className="p-4" to="contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
