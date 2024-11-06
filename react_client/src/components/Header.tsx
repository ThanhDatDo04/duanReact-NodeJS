import { Link, useNavigate } from "react-router-dom";
import { cartItemsCount } from "./../pages/cart/selectors";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export function Header() {
  const nav = useNavigate();
  const countItem = useSelector(cartItemsCount);

  const carttt = useSelector((state) => state.cart.cartItems);
  console.log(carttt);

  const handleGioHang = () => {
    nav("/cart");
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-white shadow-sm ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="https://4menshop.com/logo.png?v=1" width={100} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <input
          type="search"
          placeholder="Search"
          className=" border-danger-subtle rounded-3"
        />
        <div className="me-5">
          <SearchIcon />
        </div>

        <ShoppingCartIcon onClick={handleGioHang} />
        <div className="text-danger mb-4 ml-1">{countItem}</div>
      </div>
    </nav>
  );
}
