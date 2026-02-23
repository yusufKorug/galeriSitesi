import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./Carousel";
import './App.css'
import Header from './Header';
import VehicleLogos from './VehicleLogos';
import Footer from './Footer';
import About from "./About";
import Contact from "./Contact";
import Vehicles from "./Vehicles";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <VehicleLogos />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car" element={<Vehicles/>} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
