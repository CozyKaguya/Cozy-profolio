import React from 'react';
import SocialLink from './SocialLink';

const ProfileCard: React.FC = () => {
  return (
    <div className="glass rounded-[3.5rem] p-10 text-center text-white border-2 border-white/30 relative overflow-hidden group">
      {/* Dynamic Glow Effects */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-400/20 blur-[60px] rounded-full group-hover:bg-blue-300/30 transition-colors duration-700" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-400/20 blur-[60px] rounded-full group-hover:bg-purple-300/30 transition-colors duration-700" />

      {/* Avatar - Happy Cat */}
      <div className="relative inline-block mb-8">
        <div className="w-36 h-36 rounded-full border-4 border-white/70 overflow-hidden shadow-2xl ring-8 ring-white/10 transition-transform duration-500 hover:scale-105">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" 
            alt="Happy Cat Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-3 bg-green-400 w-7 h-7 rounded-full border-4 border-white/20 shadow-lg animate-pulse"></div>
      </div>

      {/* Branding */}
      <h1 className="text-6xl font-bold mb-3 tracking-tight drop-shadow-lg">
        Cozy 👋
      </h1>
      <p className="text-white/90 font-medium mb-12 text-xl italic tracking-wide">
        "Meow! Stay cozy and happy."
      </p>

      {/* Social Buttons */}
      <div className="space-y-5 relative z-10">
        <SocialLink 
          platform="Discord" 
          color="bg-[#5865F2]"
          icon="https://cdn-icons-png.flaticon.com/512/3670/3670157.png"
          href="https://discord.com/users/1076281528511893524"
        />
        <SocialLink 
          platform="Roblox" 
          color="bg-[#ffffff]"
          icon="https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg"
          href="https://www.roblox.com/users/1768838012/profile"
          customIconClass="brightness-0" 
          textColor="text-black"
        />
        <SocialLink 
          platform="GitHub" 
          color="bg-[#181717]"
          icon="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          href="https://github.com/CozyKaguya"
        />
      </div>
    </div>
  );
};

export default ProfileCard;