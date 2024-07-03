import "./App.css";
import ConfigBar from "./components/jsx/ConfigBar";
import AppBar from "./components/jsx/AppBar";
import PromotionBanner from "./components/jsx/PromotionBanner";
import ItemsActionBar from "./components/jsx/ItemsActionBar";

function App() {
  return (
    <>
      <ConfigBar />
      <AppBar />
      <PromotionBanner />
      <ItemsActionBar />
    </>
  );
}

export default App;
