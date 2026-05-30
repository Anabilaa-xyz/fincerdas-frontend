import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import InputData from "./pages/InputData";
import HasilAnalisis from "./pages/HasilAnalisis";
import Rekomendasi from "./pages/Rekomendasi"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/input-data" element={<InputData />} />

        <Route path="/hasil-analisis" element={<HasilAnalisis />} />
         <Route path="/rekomendasi" element={<Rekomendasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;