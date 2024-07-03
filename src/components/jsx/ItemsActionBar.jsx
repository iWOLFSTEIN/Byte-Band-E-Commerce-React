import "../css/ItemsActionBar.css";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "@mui/icons-material/Tune";

function ItemsActionBar() {
  let filters = [
    "Headphones Types",
    "Price",
    "Review",
    "Color",
    "Material",
    "Offer",
    "All Filters",
  ];

  const listAllIcons = () => {
    return filters.map((filter, index) => (
      <CustomIcon
        key={index}
        iconType={filter == "All Filters" ? "tuneIcon" : "expandMoreIcon"}
        title={filter}
        action={() => {}}
      />
    ));
  };
  return (
    <div className="items-action-bar">
      <div className="left-half">{listAllIcons()}</div>
      <div className="right-half">
        <CustomIcon
          iconType="expandMoreIcon"
          title="Sort by"
          action={() => {}}
          customStyle={{
            backgroundColor: "transparent",
            border: "#eaeded 2px solid",
          }}
        />
      </div>
    </div>
  );
}

export default ItemsActionBar;

function CustomIcon({ iconType, title, action, customStyle }) {
  const renderIcon = () => {
    if (iconType == "expandMoreIcon") {
      return <ExpandMoreIcon fontSize="small" />;
    } else if (iconType == "tuneIcon") {
      return <TuneIcon fontSize="small" />;
    }
  };
  return (
    <div style={customStyle} className="action-bar-button" onClick={action}>
      <p>{title}</p>
      {renderIcon()}
    </div>
  );
}

CustomIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
  customStyle: PropTypes.object,
};
