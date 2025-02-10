import React from 'react'
import Home from './pages/Home'
import { Navigate, Route, Routes} from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login';
import { Toaster, ToastBar } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/VibeNest/home"}></Navigate>}
        ></Route>
        <Route path="/VibeNest/home" element={<Home />}></Route>
        <Route path="/VibeNest/home/profile" element={<Profile />}></Route>
        <Route path="/VibeNest/login" element={<Login />}></Route>
        <Route
          path="*"
          element={<Navigate to={"/VibeNest/home"}></Navigate>}
        ></Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App