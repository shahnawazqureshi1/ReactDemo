import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../src/screen/Home';
import News from '../src/screen/News';
import Contact from '../src/screen/Contact';
import About from '../src/screen/About';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="news" element={<News />} />
    <Route path="contact" element={<Contact />} />
    <Route path="about" element={<About />} />
  </Routes>
  );
}
export default App;
