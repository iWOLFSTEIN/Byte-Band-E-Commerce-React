import "./App.css";
import ConfigBar from "./components/jsx/ConfigBar";
import AppBar from "./components/jsx/AppBar";
import PromotionBanner from "./components/jsx/PromotionBanner";
import ItemsActionBar from "./components/jsx/ItemsActionBar";
import ItemsTitle from "./components/jsx/ItemsTitle";
import ProductsSection from "./components/jsx/ProductsSection";

function App() {
  return (
    <>
      <ConfigBar />
      <AppBar />
      <PromotionBanner />
      <ItemsActionBar />
      <ItemsTitle />
      <ProductsSection />
    </>
  );
}

export default App;
