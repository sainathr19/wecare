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
import Ddashboard from "./Components/Docter/Ddashboard/Ddashboard";
import LoggedDash from "./Components/LoggedDash/LoggedDash";
import ProfileUpdate from "./Components/ProfileUpdate/ProfileUpdate";
import ModeSelector from "./Components/ModeSelector/ModeSelector";
import DoctorDashboard from "./Components/DocterDashboard/DoctorDashboard";
import Dataset from "./Components/Dataset/Dataset";
import Location from "./Components/Location/Location";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/login/doctor"
        element={<LoginPage isDoctor={true} />}
      ></Route>
      <Route
        path="/login/patient"
        element={<LoginPage isDoctor={false} />}
      ></Route>
      <Route path="/forgotpass" element={<ForgotPass />}></Route>
      <Route path="/dashboard/doctor" element={<DoctorDashboard />}></Route>

      <Route path="/docterd" element={<Ddashboard />}></Route>
      <Route path="/login/selectuser" element={<ModeSelector />}></Route>
      <Route path="/dashboard" element={<DashBoard />}>
        <Route path="/dashboard/data" element={<LoggedDash />}></Route>
        <Route path="/dashboard/profile" element={<ProfileUpdate />}></Route>
        <Route path="/dashboard/monitor" element={<Dataset />}></Route>
        <Route path="/dashboard/location" element={<Location />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
