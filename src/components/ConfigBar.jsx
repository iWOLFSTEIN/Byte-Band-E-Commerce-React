import "./ConfigBar.css";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ConfigBar() {
  return (
    <div className="config-bar">
      <div>
        <CallOutlinedIcon className="icon content" fontSize="small" />
        <p className="content">+001234567890</p>
      </div>

      <p className="content">Get 50% Off on Selected Items | Shop Now</p>

      <div>
        <div className="content spacer">
          <p className="content">Eng</p>
          <KeyboardArrowDownIcon
            className="content down-arrow"
            fontSize="large"
          />
        </div>

        <p className="content">Location</p>
        <KeyboardArrowDownIcon
          className="content down-arrow"
          fontSize="large"
        />
      </div>
    </div>
  );
}

export default ConfigBar;
