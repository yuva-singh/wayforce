
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import EmployerCreateAccount from './Page/Employer/EmployerAccount';
import Login from "./Page/Login/Login";
import MainPowerRegisterForm from "./Page/Mainpower/MainPowerRegisterForm";
import MainPowerLIsting from "./Page/Mainpower/MainPowerLIsting";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employerCreateAccount" element={<EmployerCreateAccount />}></Route>
        {/* mainPower */}
        <Route path="/mainPowerRegisterForm" element={<MainPowerRegisterForm />}></Route>
        <Route path="/mainPowerLIsting" element={<MainPowerLIsting />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
