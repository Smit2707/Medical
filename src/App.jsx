import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ClinicFaci from "./pages/ClinicFaci.jsx";
import Speciality from "./pages/Speciality.jsx";
import AskDoc from "./pages/AskDoc.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Clinics from "./pages/Clinics.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main>
          <Home />
          <ClinicFaci />
          <Speciality />
          <AskDoc />
          <Testimonials />
          <Clinics />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
