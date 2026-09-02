import { Routes, Route } from "react-router-dom";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Loading from "./pages/components/Loading";

import Home from "./pages/home/Home";

import About from "./pages/about/About";

import Guides from "./pages/guides/Guides";
import UsageInfo from "./pages/guides/guides_components/UsageInfo";
import Admission from "./pages/guides/guides_components/Admission";
import Parking from "./pages/guides/guides_components/Parking";
import Rules from "./pages/guides/guides_components/Rules";

import Facilities from "./pages/facilities/Facilities";
import Attractions from "./pages/facilities/facilities_components/Attractions";
import RestArea from "./pages/facilities/facilities_components/RestArea";
import Amenities from "./pages/facilities/facilities_components/Amenities";
import Custom from "./pages/facilities/facilities_components/Custom";

import Support from "./pages/support/Support";

import Error from "./pages/Error/Error";
import AttractionDetail from "./pages/facilities/facilities_components/AttractionsDetail";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* 홈 */}
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />

        {/* 소개 */}
        <Route path="/about" element={<About />} />

        {/* 이용안내 */}
        <Route path="/guides" element={<Guides />}>
          <Route index element={<UsageInfo />} />
          <Route path="admission" element={<Admission />} />
          <Route path="parking" element={<Parking />} />
          <Route path="rules" element={<Rules />} />
        </Route>

        {/* 시설안내 */}
        <Route path="/facilities" element={<Facilities />}>
          <Route index element={<Attractions />} />
          <Route path="rest" element={<RestArea />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="custom" element={<Custom />} />
          <Route
            path="/facilities/attractions/:id"
            element={<AttractionDetail />}
          />
        </Route>

        {/* 문의 */}
        <Route path="/support" element={<Support />} />

        {/* 404 */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}
