import "./App.css";
import HomePage from "./Components/HomePage/homepage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./Components/Loginpage/loginpage";
import DashBoard from "./Components/DashBoard/dashboard";
import ForgotPass from "./Components/ForgotPass/forgotpass";
import { AuthProvider } from "react-auth-kit";
import Datacharts from "./Components/DataCharts/Datacharts";
import Ddashboard from "./Components/Docter/Ddashboard/Ddashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      <Route path="/forgotpass" element={<ForgotPass />}></Route>
      <Route path="/datacharts" element={<Datacharts />}></Route>
      <Route path="/docterd" element={<Ddashboard />}></Route>
    </Route>
  )
);
function App() {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <RouterProvider router={router}></RouterProvider>;
    </AuthProvider>
  );
}

export default App;
