import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-[hsl(var(--navy))] text-primary-foreground py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 sm:top-10 right-10 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 sm:bottom-10 left-10 sm:left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">
          Ready to find your perfect book?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in px-4">
          Connect with us on WhatsApp to browse our collection and place your
          order today
        </p>
        <Button variant="accent" size="lg" className="gap-3 w-full sm:w-auto sm:min-w-[320px] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white animate-scale-in text-lg sm:text-xl md:text-2xl font-extrabold px-8 py-5" asChild>
          <a href="https://wa.me/917307097658" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            Start Shopping on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
