import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import File from "./Component/File";
import Booking from "./Component/Booking";
import AddAnOption from "./Component/AddAnOption";
import BookingSummary from "./Component/BookingSummary";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Register from "./Component/Register";
function App() {
  return (
    <>
      {/* <File/> */}
      {/* <Booking/> */}
      {/* <AddAnOption/>  */}
      {/* <BookingSummary/> */}
      <Register/>
      <Router>
        <Routes>
          <Route path="/" element={<Booking />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 
            <Register/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
