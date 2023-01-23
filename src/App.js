import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Header from "./components/Header/Header";
// import SignUp from "./Features/SignUp";
// import SignIn from "./Features/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          {/* <SignUp /> */}
          {/* <SignIn /> */}
          {/* <ContactUs /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
