import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/be-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`border-b border-border py-3 sm:py-4 px-4 sm:px-6 md:px-12 sticky top-0 z-50 backdrop-blur-sm shadow-sm transition-all duration-300 ${
      isScrolled ? 'bg-white/90' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="BE Educational Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300" />
          <div className="ml-3 sm:ml-4">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[hsl(var(--accent))] leading-tight font-gilroy">Bhatia</div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[hsl(var(--accent))] leading-tight font-gilroy">Educational</div>
          </div>
        </div>
        <Button variant="accent" size="lg" className="gap-2 sm:gap-3 text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white focus:bg-[#25D366] focus:text-white active:bg-[#1ebe57] active:text-white font-extrabold px-4 sm:px-6 py-3 sm:py-4" asChild>
          <a href="https://wa.me/917307097658" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">Sell on WhatsApp</span>
            <span className="xs:hidden">Sell</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
