import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import AllDestinations from "./pages/AllDestinations";
import DestinationsDetails from "./pages/DestinationsDetails";

function App() {
  return (
    <>
      <NavBar />
      <section id="main-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="all-Destinations" element={<AllDestinations />} />
          <Route
            path="/destination/:destinationId"
            element={<DestinationsDetails />}
          />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
