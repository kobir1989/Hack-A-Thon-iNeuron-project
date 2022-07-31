import React, { useCallback } from 'react';
import Dashboard from './Component/StudentDashboard/Dashboard';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import Header from './Component/Header/Header';

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div>
      <Header>
        <Particles options={particlesOptions} init={particlesInit} />
      </Header>
      <Dashboard />
    </div>
  );
}

export default App;
