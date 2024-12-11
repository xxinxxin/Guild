import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sword, Users, MessageCircle, Calendar, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-900/95 text-white fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
           {/* <Sword className="w-6 h-6 text-indigo-300" /> */}
           <img src="/src/constants/images/fm.png" alt="Logo" className="w-10 h-10 mr-[-15px]" />
            <span className="font-bold text-xl">FriendshipMelody</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/members" icon={<Users />} text="Members" />
            <NavLink to="/events" icon={<Calendar />} text="Events" />
            <NavLink to="/recruitment" icon={<MessageCircle />} text="Recruitment" />
          </div>
          
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md hover:bg-indigo-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-indigo-800">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/members" icon={<Users />} text="Members" />
              <MobileNavLink to="/events" icon={<Calendar />} text="Events" />
              <MobileNavLink to="/recruitment" icon={<MessageCircle />} text="Recruitment" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-1 hover:text-indigo-300 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-2 px-4 py-2 hover:bg-indigo-800 rounded-md transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}