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
            src="https://png.pngtree.com/png-vector/20240123/ourlarge/pngtree-smiling-guy-in-earphones-listen-music-on-mobile-png-image_11486394.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PromotionBanner;
