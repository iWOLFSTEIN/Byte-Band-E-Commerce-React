import "./AppBar.css";
import SearchIcon from "@mui/icons-material/Search";
import ReactLogo from "../assets/react.svg";

function AppBar() {
  return (
    <div className="app-bar">
      <div>
        <img src={ReactLogo} alt="" />
        <ul>
          <li>Categories</li>
          <li>Deal</li>
          <li>What`s New</li>
          <li>Delivery</li>
        </ul>
      </div>

      <div className="textfield">
        <input type="search" name="search" id="" placeholder="Search Product" />
        {/* <SearchIcon className="icon" fontSize="small" /> */}
      </div>
    </div>
  );
}

export default AppBar;
