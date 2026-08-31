import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";

import Guides from "./pages/guides/Guides";
import UsageInfo from "./pages/guides/guides_components/UsageInfo";
import Admission from "./pages/guides/guides_components/Admission";
import Parking from "./pages/guides/guides_components/Parking";
import Rules from "./pages/guides/guides_components/Rules";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Support from "./pages/support/Support";

export default function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/guides" element={<Guides />}>
        <Route index element={<UsageInfo />} />
        <Route path="admission" element={<Admission />} />
        <Route path="parking" element={<Parking />} />
        <Route path="rules" element={<Rules />} />
      </Route>
      <Route path="/support" element={<Support />} />
    </Routes>
    <Footer />
    </div>
  );
}