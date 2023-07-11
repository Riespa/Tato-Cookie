import React from "react";
// import { stickyNavbar } from "./components/stickyNavbar";
import TopNavbar from "./components/topNavbar";
import Banner from "./scenes/Banner";
import SloganSection from "./scenes/sloganSection";
import ImageMosaic from "./scenes/imageMosaic";
import CallToAction from "./scenes/callToAction";
import ChocolateChipCarousel from "./scenes/ChocolateChipCarousel";
// import MakingCookies from "./scenes/makingCookies";
import MakingCookiesIngredients from "./components/ingredients"
import "./App.css";
// import MakingCookiesIngredients from "./scenes/makingCookies2";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Banner />
      <SloganSection />
      <ImageMosaic />
      <CallToAction />
      <ChocolateChipCarousel />
      <MakingCookiesIngredients />
    </div>
  );
}

// window.onscroll = function () {
//   stickyNavbar();
// };

export default App;
