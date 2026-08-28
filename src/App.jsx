import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./pages/components/Header";
import Guides from "./pages/guides/Guides";
import Facilities from "./pages/facilities/Facilities";
import Support from "./pages/support/Support";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
