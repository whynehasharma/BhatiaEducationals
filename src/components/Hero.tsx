import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import TermsDialog from "@/components/TermsDialog";
import PrivacyDialog from "@/components/PrivacyDialog";
import heroIllustration from "@/assets/hero-student-illustration.png";


const Hero = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <section className="bg-[hsl(var(--navy))] py-0 sm:py-1 md:py-2 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
          <div className="space-y-3 sm:space-y-4 animate-fade-in order-2 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Your trusted partner for{" "}
              <span className="text-[hsl(var(--accent))]">
                educational excellence
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
              Affordable learning, endless possibilities
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="accent" size="lg" className="gap-3 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white focus:bg-[#25D366] focus:text-white active:bg-[#1ebe57] active:text-white text-base sm:text-lg md:text-xl font-extrabold px-6 py-4" asChild>
                <a href="https://wa.me/917307097658" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Shop Now on WhatsApp
                </a>
              </Button>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto" onClick={() => setTermsOpen(true)}>
                  <span className="hidden sm:inline">View Terms & Conditions</span>
                  <span className="sm:hidden">Terms & Conditions</span>
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto" onClick={() => setPrivacyOpen(true)}>
                  Privacy Policy
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center animate-scale-in order-1 md:order-2 p-4">
            <img 
              src={heroIllustration} 
              alt="Student reading with floating books and educational symbols" 
              className="w-full max-w-xs sm:max-w-sm h-auto animate-float object-contain"
            />
          </div>
        </div>
      </div>
      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </section>
  );
};

export default Hero;
