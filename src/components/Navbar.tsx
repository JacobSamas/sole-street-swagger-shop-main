
import { useState, useEffect } from "react";
import { Menu, ShoppingBag, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className={`text-2xl font-montserrat font-black tracking-tight ${isScrolled ? "text-black" : "text-white"}`}>
              SOLE<span className="text-electric-500">STREET</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#new-arrivals" className={`font-medium hover:text-electric-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              New Arrivals
            </a>
            <a href="#best-sellers" className={`font-medium hover:text-electric-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              Best Sellers
            </a>
            <a href="#limited-drops" className={`font-medium hover:text-electric-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              Limited Drops
            </a>
            <a href="#collections" className={`font-medium hover:text-electric-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              Collections
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-1 rounded-full hover:bg-black/10 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              <Search size={20} />
            </button>
            <button className={`p-1 rounded-full hover:bg-black/10 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}>
              <User size={20} />
            </button>
            <button className={`p-1 rounded-full hover:bg-black/10 transition-colors relative ${isScrolled ? "text-gray-700" : "text-white"}`}>
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-electric-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button className={`p-1 rounded-full hover:bg-black/10 transition-colors relative ${isScrolled ? "text-gray-700" : "text-white"}`}>
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-electric-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button 
              className={`p-2 rounded-md ${isScrolled ? "text-gray-700" : "text-white"}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-50 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#new-arrivals" className="text-white text-2xl font-montserrat" onClick={() => setIsMenuOpen(false)}>
            New Arrivals
          </a>
          <a href="#best-sellers" className="text-white text-2xl font-montserrat" onClick={() => setIsMenuOpen(false)}>
            Best Sellers
          </a>
          <a href="#limited-drops" className="text-white text-2xl font-montserrat" onClick={() => setIsMenuOpen(false)}>
            Limited Drops
          </a>
          <a href="#collections" className="text-white text-2xl font-montserrat" onClick={() => setIsMenuOpen(false)}>
            Collections
          </a>
          <div className="flex space-x-6 mt-8">
            <button className="text-white">
              <Search size={24} />
            </button>
            <button className="text-white">
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
