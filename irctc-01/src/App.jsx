import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import LiveStatusSidebar from './components/LiveStatusSidebar';
import Holidays from './components/Holidays';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import ContactModal from './components/ContactModal';
import ForeignTouristModal from './components/ForeignTouristModal';
import ConnectingJourneyModal from './components/ConnectingJourneyModal';
import PNREnquiry from './pages/PNREnquiry';
import TrainSchedule from './pages/TrainSchedule';
import AlertsPage from './pages/AlertsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutEWallet from './pages/AboutEWallet';
import EWalletGuide from './pages/EWalletGuide';
import AboutLoyalty from './pages/AboutLoyalty';
import CompareCards from './pages/CompareCards';
import AboutSBICard from './pages/AboutSBICard';
import AboutBOBCard from './pages/AboutBOBCard';
import CancelTicket from './pages/CancelTicket';
import TrackTrain from './pages/TrackTrain';
import FTRBooking from './pages/FTRBooking';
import PetsBooking from './pages/PetsBooking';
import EPantry from './pages/EPantry';
import IRCTCiPay from './pages/IRCTCiPay';
import HolidayPackages from './pages/HolidayPackages';
import Gallery from './pages/Gallery';
import EWheelchair from './pages/EWheelchair';
import Promotions from './pages/Promotions';
import { LanguageProvider } from './context/LanguageContext';

function HomePage({ onOpenStatus }) {
  return (
    <>
      <main>
        <Hero onOpenStatus={onOpenStatus} />
        <BentoGrid />
        <Holidays />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="app-container">
        {/* Full-screen Vande Bharat background */}
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundImage: "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.88)), url('https://thelivenagpur.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-09-at-7.00.11-PM.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1
        }} />

        {/* Overlay when sidebar is open */}
        <div
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            transition: 'opacity 0.3s ease',
            opacity: isSidebarOpen ? 1 : 0,
            pointerEvents: isSidebarOpen ? 'auto' : 'none',
            zIndex: 40
          }}
          onClick={() => setIsSidebarOpen(false)}
        />

        <LiveStatusSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Floating Ask Disha Chatbot Button */}
        <div
          style={{ position: 'fixed', bottom: '24px', right: '24px', width: '64px', height: '64px', backgroundColor: 'var(--orange-primary)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 30px rgba(255,109,0,0.6)', zIndex: 90, color: 'white', transition: 'transform 0.3s, box-shadow 0.3s', gap: '2px' }}
          className="hover-scale"
          onClick={() => alert('Ask Disha Chatbot Launched!')}
          title="Ask Disha - AI Chatbot"
        >
          <Bot size={26} strokeWidth={2.2} />
          <span style={{ fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.5px' }}>DISHA</span>
        </div>

        <Routes>
          {/* Main home page */}
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage onOpenStatus={() => setIsSidebarOpen(true)} />
            </>
          } />

          {/* Modals as overlays on home */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<><Navbar /><HomePage onOpenStatus={() => setIsSidebarOpen(true)} /><ContactModal /></>} />
          <Route path="/foreign-tourist" element={<><Navbar /><HomePage onOpenStatus={() => setIsSidebarOpen(true)} /><ForeignTouristModal /></>} />
          <Route path="/connecting-journey" element={<><Navbar /><HomePage onOpenStatus={() => setIsSidebarOpen(true)} /><ConnectingJourneyModal /></>} />

          {/* Full pages with own Navbar + Footer */}
          <Route path="/pnr-enquiry" element={<PNREnquiry />} />
          <Route path="/train-schedule" element={<TrainSchedule />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/about-ewallet" element={<AboutEWallet />} />
          <Route path="/ewallet-guide" element={<EWalletGuide />} />
          <Route path="/loyalty" element={<AboutLoyalty />} />
          <Route path="/compare-cards" element={<CompareCards />} />
          <Route path="/loyalty-sbi" element={<AboutSBICard />} />
          <Route path="/loyalty-bob" element={<AboutBOBCard />} />
          <Route path="/cancel-ticket" element={<CancelTicket />} />
          <Route path="/track-train" element={<TrackTrain />} />
          <Route path="/ftr-booking" element={<FTRBooking />} />
          <Route path="/pets-booking" element={<PetsBooking />} />
          <Route path="/book-food" element={<EPantry />} />
          <Route path="/e-catering" element={<EPantry />} />
          <Route path="/irctc-ipay" element={<IRCTCiPay />} />
          <Route path="/holidays" element={<HolidayPackages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/e-wheelchair" element={<EWheelchair />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
