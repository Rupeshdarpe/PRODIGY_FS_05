import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword } from "./pages";
import {useSelector} from "react-redux";

function Layout() {
  const {user} = useSelector((state) => state.user);
  const location = useLocation();
  return user?.token ? (
    <Outlet/>
  ): (
    <Navigate to="/home" state={{from: location}} replace />
  );
}

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div data-theme={theme} className='w-full main-h[200vh]'>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword /> } />
     </Routes>  
    </div>
    );
}

export default App;