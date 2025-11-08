import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyDialog = ({ open, onOpenChange }: PrivacyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold text-primary">
              Privacy Policy
            </DialogTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 text-muted-foreground py-4">
          <p className="text-sm">
            <strong>Last Updated:</strong> 30th September, 2025
          </p>
          
          <p className="leading-relaxed">
            At Bhatia Educational, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you use our website and services.
          </p>

          {/* Information We Collect */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              1. Information We Collect
            </h3>
            <p className="leading-relaxed mb-3">
              When you use our website, we may collect the following types of
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, billing/shipping address, and payment details when
                you purchase or sell books.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, such as pages visited, time spent, and
                browsing patterns.
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                operating system, and cookies.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              2. How We Use Your Information
            </h3>
            <p className="leading-relaxed mb-3">
              We use the information collected for purposes including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing your book purchases and sales.</li>
              <li>
                Communicating with you regarding orders, offers, and updates.
              </li>
              <li>
                Improving our website, services, and customer experience.
              </li>
              <li>Preventing fraud and ensuring secure transactions.</li>
              <li>Complying with legal and regulatory requirements.</li>
            </ul>
          </div>

          {/* Sharing of Information */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              3. Sharing of Information
            </h3>
            <p className="leading-relaxed mb-3">
              We do not sell or rent your personal information. We may share
              your data only in these cases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With trusted service providers (payment gateways, delivery
                partners) to fulfill your orders.
              </li>
              <li>When required by law, regulation, or court order.</li>
              <li>
                To protect the safety, rights, or property of our business,
                users, or the public.
              </li>
            </ul>
          </div>

          {/* Cookies & Tracking Technologies */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              4. Cookies & Tracking Technologies
            </h3>
            <p className="leading-relaxed mb-3">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences.</li>
              <li>Improve website performance.</li>
              <li>Provide personalized recommendations.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You may disable cookies in your browser, but some features may not
              function properly.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              5. Data Security
            </h3>
            <p className="leading-relaxed">
              We use reasonable technical and organizational measures to protect
              your personal information from unauthorized access, misuse, or
              disclosure.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              6. Your Rights
            </h3>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request corrections or updates.</li>
              <li>
                Request deletion of your data (subject to legal and
                transactional obligations).
              </li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              7. Children's Privacy
            </h3>
            <p className="leading-relaxed">
              Our services are intended for individuals aged 13 years and above.
              We do not knowingly collect data from children.
            </p>
          </div>

          {/* Changes to this Policy */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              8. Changes to this Policy
            </h3>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with the updated date.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyDialog;
