import React from 'react';

interface SocialLinkProps {
  platform: string;
  color: string;
  icon: string;
  href: string;
  customIconClass?: string;
  textColor?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
  platform, 
  color, 
  icon, 
  href, 
  customIconClass = "invert",
  textColor = "text-white"
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center p-4 rounded-[2rem] transition-all duration-300 transform hover:scale-[1.05] hover:-translate-y-1 active:scale-95 border-b-4 border-black/10 ${color} shadow-lg`}
    >
      <div className="bg-black/5 rounded-2xl p-2 mr-6 transition-transform group-hover:rotate-6">
        <img 
          src={icon} 
          alt={platform} 
          className={`w-8 h-8 object-contain ${customIconClass}`}
        />
      </div>
      <div className="text-left">
        <p className={`text-2xl font-bold tracking-tight ${textColor}`}>
          {platform}
        </p>
      </div>
      <div className={`ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={textColor}>
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </a>
  );
};

export default SocialLink;