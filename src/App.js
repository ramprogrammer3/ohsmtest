import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import AddBussiness from "./pages/AddBussiness";
import Inventory from "./pages/Inventory";
import PrivateRoute from "./components/PrivateRoute";
import OpenRoute from "./components/OpenRoute";

const App = () => {
  return (
    <div>
      {/* nabar or header section  */}
      <Navbar />

      {/* pages  */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/solution"
          element={
            <OpenRoute>
              <Solution />{" "}
            </OpenRoute>
          }
        />
        <Route
          path="/company"
          element={
            <OpenRoute>
              {" "}
              <Company />{" "}
            </OpenRoute>
          }
        />
        <Route
          path="/resource"
          element={
            <OpenRoute>
              {" "}
              <Resources />
            </OpenRoute>
          }
        />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/addbusiness"
          element={
            <PrivateRoute>
              <AddBussiness />
            </PrivateRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <PrivateRoute>
              {" "}
              <Inventory />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* footer section  */}
    </div>
  );
};

export default App;
