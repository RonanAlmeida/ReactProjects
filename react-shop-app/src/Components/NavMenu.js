import React from "react";
import { Link } from "react-router-dom";

function NavMenu(props) {
  return (
    <div>
      <div className="font-bold p-3 py-3"> ReactShop Pages  </div>

      <ul className="p-3">
        <li>
          <Link onClick={props.closeMenu} to="/" className="text-blue-500 py-3 border-t border-b block">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.closeMenu} to="/about" className="text-blue-500 py-3 border-b block">
            About{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
