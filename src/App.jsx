import "./App.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./auth/PrivateRoutes";
import Overwrite from "./pages/Overwrite";

function App() {
  return (
    <>
      {/* Public routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Private routes */}
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Overwrite/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
