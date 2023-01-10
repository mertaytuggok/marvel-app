import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "./Components/Dashboard/Dashboard";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { DetailCard } from "./Components/DetailCard/DetailCard";
import { Comics } from "./Components/Comics/Comics";

function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Navigate to="/characters" replace />} />
          <Route path="/" element={<LandingPage />}>
            <Route path="characters" element={<Dashboard />} />
            <Route path="/char/:id" element={<DetailCard />} />
            <Route path="comics" element={<Comics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
