import React from 'react'
import Home from './pages/Home'
import { Navigate, Route, Routes} from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login';
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
    </div>
  );
}

export default App