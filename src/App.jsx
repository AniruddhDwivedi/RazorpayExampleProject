import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Join from "./pages/Join";
import GiveMoney from "./pages/GiveMoney";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Tract from "./pages/Tract";
import sound from "../public/assets/backing_track.mp3";
import { useEffect, useRef } from "react";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(sound);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    audio.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/join" element={<Join />} />
          <Route path="/money" element={<GiveMoney />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tract" element={<Tract />} />
          <Route path="/money" element={<GiveMoney />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
