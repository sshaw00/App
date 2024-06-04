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
import { GoogleOAuthProvider } from "@react-oauth/google";

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
    <GoogleOAuthProvider clientId="4397980195-ie0es4f203k7u5laels9kt486jt08hg1.apps.googleusercontent.com">
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
    </GoogleOAuthProvider>
  );
};

export default App;
