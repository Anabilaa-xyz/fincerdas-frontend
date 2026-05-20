import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import InputData from "./pages/InputData";
import HasilAnalisis from "./pages/HasilAnalisis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/input-data" element={<InputData />} />

        <Route path="/hasil-analisis" element={<HasilAnalisis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;