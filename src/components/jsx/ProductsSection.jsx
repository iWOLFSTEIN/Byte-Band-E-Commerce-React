import "../css/ProductsSection.css";

function ProductsSection() {
  return (
    <div className="products-section">
      <Product />
    </div>
  );
}

export default ProductsSection;

function Product() {
  return (
    <div className="product">
      <div className="product-image"></div>
      <div className="product-details"></div>
    </div>
  );
}
