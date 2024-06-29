import "../css/AppBar.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactLogo from "../../assets/react.svg";

function AppBar() {
  return (
    <div className="app-bar">
      <div className="left-nav-half">
        <div className="logo">
          <img src={ReactLogo} alt="" />
        </div>
        <ul>
          <li>
            <div className="drop-down">
              <p>Categories</p>
              <ExpandMoreIcon className="action-icon" fontSize="small" />
            </div>
          </li>
          <li>Deal</li>
          <li>What`s New</li>
          <li>Delivery</li>
        </ul>
      </div>

      <div className="right-nav-half">
        <div className="search">
          <input
            type="search"
            className="search-input"
            name="search"
            id=""
            placeholder="Search Product"
          />
          <div className="search-icon">
            <SearchIcon className="icon" fontSize="small" />
          </div>
        </div>

        <div className="drop-down">
          <p>Account</p>
          <ExpandMoreIcon className="action-icon" fontSize="small" />
        </div>
        <div className="drop-down">
          <p>Cart</p>
          <ExpandMoreIcon className="action-icon" fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default AppBar;
