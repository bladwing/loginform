import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Registration from "./Register";
import DemotText from "./DemoText";



const Nav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/terms" element={<DemotText />} />
        <Route path="/policy" element={<DemotText />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Nav;
