import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InstitutionsSection from './components/InstitutionsSection';
import WishlistSection from './components/WishlistSection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <InstitutionsSection />
        <WishlistSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;