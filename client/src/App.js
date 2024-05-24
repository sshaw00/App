import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/Home";

import { useSelector } from "react-redux";
import { SnackbarProvider } from "notistack";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// const PrivateRoutes = () => {
//   const { isAuth } = useSelector((state) => state.auth);

//   return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
// };

// const RestrictedRoutes = () => {
//   const { isAuth } = useSelector((state) => state.auth);

//   return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
// };

const App = () => {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;
