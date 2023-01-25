import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Header from "./components/Header/Header";
import SignUp from "./Features/SignUp";
import SignIn from "./Features/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";

import Records from "./pages/records/Records";
import Services from "./pages/services/Services";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Records" element={<Records />} />
          <Route path="/Services" element={<Services />} />
        </Route>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <ContactUs /> */}
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
