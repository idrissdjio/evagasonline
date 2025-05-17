import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import YouTubeContent from './components/YouTubeContent';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <YouTubeContent />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;