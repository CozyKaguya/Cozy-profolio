import React, { useState, useEffect } from 'react';
import Snowfall from './components/Snowfall';
import ProfileCard from './components/ProfileCard';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Deep Blur - Snowy Path Aesthetic */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1477601263568-184e2c65358b?auto=format&fit=crop&q=80&w=2000')`,
          filter: isLoaded ? 'blur(12px) brightness(0.65)' : 'blur(0px) brightness(1)'
        }}
      />
      
      {/* Snowflake Particles */}
      <Snowfall />

      {/* Main Content Card */}
      <main className={`relative z-10 w-full max-w-md px-6 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
        <ProfileCard />
      </main>

      {/* Subtle Blue Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,10,30,0.4)_100%)] z-0" />
    </div>
  );
};

export default App;