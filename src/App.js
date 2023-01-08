import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "./Components/Dashboard/Dashboard";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { DetailCard } from "./Components/DetailCard/DetailCard";

function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={<LandingPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/char/:id" element={<DetailCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
