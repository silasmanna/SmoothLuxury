import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import Faq from "./Components/FAQ/Faq";
import Services from "./Components/Services/Services";
import Register from "./Components/RegisterLogin/Register";
import Login from "./Components/RegisterLogin/Login";
import { AuthProvider } from "./AuthProvider";
import UserDetails from "./Components/User/UserProfile";
import VisaApplicationForm from "./Components/User/VisaForm";
import ConfirmEmail from "./Components/RegisterLogin/ConfirmEmail";
import PaymentPage from "./Components/User/PaymentPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/visa-form" element={<VisaApplicationForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserDetails />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
