import React, { useState, useEffect } from 'react';
import fmImage from '../constants/images/fm.png';

export default function Hero() {
  const [isWide, setIsWide] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const igclick = () => {
    window.open("https://ig.me/m/friendshipmelody", "_blank");
  };  

  return (
    <div className="relative min-h-screen">
      <div
        className={`absolute inset-0 bg-center bg-no-repeat ${isWide ? 'bg-contain' : 'bg-cover'}`}
        style={{
          backgroundImage: `url(${fmImage}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70"></div>
      <div className="relative flex items-center justify-center min-h-screen text-center">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-indigo-300">FriendshipMelody</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            A friendly Toram Online guild focused on helping each other grow while creating lasting friendships through adventures.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              onClick={igclick}
            >
              Join Our Guild
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}