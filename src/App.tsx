import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Clients from './components/sections/Clients';
import Statistics from './components/sections/Statistics';
import SecondaryCTA from './components/sections/SecondaryCTA';
import Footer from './components/layout/Footer';
import AboutUs from './components/sections/AboutUs';
import Contact from './components/sections/Contact';
import Login from './components/sections/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProblemSolution />
              <Features />
              <Pricing />
              <AboutUs />
              <Contact />
              <Clients />
              <Statistics />
              <SecondaryCTA />
            </main>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;