import React, { useCallback } from 'react';
import Dashboard from './Component/StudentDashboard/Dashboard';
import PartnerCompany from './Component/PartnerCompany/PartnerCompany';
import OurProduct from './Component/PartnerCompany/OurProduct/OurProduct';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import Header from './Component/Header/Header';
import HallOfFame from './Component/HallOfFame/HallOfFame';
import LivePrograms from './Component/LivePrograms/LivePrograms';
import LiveCourseSlider from './Component/LivePrograms/LiveCourseSlider';
import HackAthon from './Component/Hackathon/HackAthon';
import TechAvengers from './Component/TechAvengers/TechAvengers';
import Institutions from './Component/Institutions/Institutions';
import Footer from './Component/Footer/Footer';

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div>
      <Header />
      <Particles options={particlesOptions} init={particlesInit} />
      <Dashboard />
      <PartnerCompany />
      <HallOfFame />
      <LivePrograms />
      <LiveCourseSlider />
      <HackAthon />
      <OurProduct />
      <TechAvengers />
      <Institutions />
      <Footer />
    </div>
  );
}

export default App;
