import React  from "react";
import Navbar from "./components/navbar"
import HomeContainer from "./components/homeContainer"
import DetailContainer from "./components/detailContainer"
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
      <>
      <Navbar />
      <ScrollToTop>
        <Routes>
            <Route path="/" exact element={<HomeContainer />} />
            <Route path="/products/:id" element={<DetailContainer />} />
        </Routes>
      </ScrollToTop>
      </>
  );
}

export default App;
