import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import TermsDialog from "@/components/TermsDialog";
import PrivacyDialog from "@/components/PrivacyDialog";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <footer className="bg-[hsl(var(--navy))] text-primary-foreground py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Bhatia Educational</h3>
            <p className="opacity-90 leading-relaxed text-sm sm:text-base">
              Your trusted partner for quality educational books and materials
              across India.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:educationalbhatia@gmail.com"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="break-all">educationalbhatia@gmail.com</span>
              </a>
              <a
                href="tel:+917307097658"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+91 7307097658</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button
                  onClick={() => setTermsOpen(true)}
                  className="opacity-90 hover:opacity-100 transition-opacity text-sm sm:text-base text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="opacity-90 hover:opacity-100 transition-opacity text-sm sm:text-base text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  className="opacity-90 hover:opacity-100 transition-opacity text-sm sm:text-base"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6 text-center">
          <p className="opacity-80 text-xs sm:text-sm">
            © 2025 Bhatia Educational & Book Agencies. All rights reserved.
          </p>
        </div>
      </div>
      <TermsDialog open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </footer>
  );
};

export default Footer;
