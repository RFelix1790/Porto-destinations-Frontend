import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Page";
import AboutUs from "./pages/AboutUs";
import AllDestinations from "./pages/AllDestinations";
import DestinationsDetails from "./pages/DestinationsDetails";
import NotFound from "./pages/NotFound";
import AddDestination from "./pages/AddDestination";

function App() {
  return (
    <>
      <NavBar />
      <section id="main-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-destinations" element={<AllDestinations />} />
          <Route
            path="/destination/:destinationId"
            element={<DestinationsDetails />}
          />
          <Route path="/add-destination" element={<AddDestination />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
