import { fireAlert } from "./dependencies/alert";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BooksWeb
        </Link>
        <div className="navbar-links">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/authors">
                  Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addbook">
                  Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/license">
                      License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => {
                        localStorage.setItem("token", "");
                        fireAlert("Success", "Logged out", "success");
                      }}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
