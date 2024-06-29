import "../css/PromotionBanner.css";

function PromotionBanner() {
  return (
    <div className="promotion-container">
      <div className="promotion-banner">
        <div className="left-half">
          <p>
            Grab Upto 50% Off On <br /> Selected Headphones
          </p>
          <button>Buy Now</button>
        </div>
        <div className="right-half">
          <img
            src="https://www.pngfind.com/pngs/m/35-357459_collection-of-free-transparent-person-download-on-person.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PromotionBanner;
