import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyProcess from "./pages/MyProcess";
import DesignTips from "./pages/DesignTips";
import Contact from "./pages/Contact";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-process" element={<MyProcess />} />
          <Route path="/design-tips" element={<DesignTips />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
