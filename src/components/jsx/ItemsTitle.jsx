import "../css/ItemsTitle.css";
import PropTypes from "prop-types";

function ItemsTitle({ title }) {
  return (
    <div className="items-title">
      {title == null ? "Headphones For You!" : title}
    </div>
  );
}

export default ItemsTitle;

ItemsTitle.propTypes = {
  title: PropTypes.string,
};
