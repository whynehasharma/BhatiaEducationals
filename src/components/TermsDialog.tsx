import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsDialog = ({ open, onOpenChange }: TermsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold text-primary">
              Terms & Conditions
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
          {/* General */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">1. General</h3>
            <p className="leading-relaxed">
              Bhatia Educational is owned and operated by Bhatia Educational and
              Book Agencies, a sole proprietorship registered in India. By
              purchasing from our services, you agree to these Terms &
              Conditions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              2. Products
            </h3>
            <p className="leading-relaxed">
              We sell new and pre-owned books. All books are described as
              accurately as possible regarding edition, condition, and price.
              Minor wear and tear on pre-owned books may be present.
            </p>
          </div>

          {/* Orders and Payments */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              3. Orders and Payments
            </h3>
            <p className="leading-relaxed">
              All prices are listed in INR (₹) and are inclusive/exclusive of
              GST (as applicable). Orders will only be processed after full
              payment is received.
            </p>
          </div>

          {/* Shipping and Delivery */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              4. Shipping and Delivery
            </h3>
            <p className="leading-relaxed">
              Orders are shipped within 3 working days of payment confirmation.
              Delivery times may vary depending on location and courier service.
            </p>
          </div>

          {/* Returns and Refunds */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              5. Returns and Refunds
            </h3>
            <p className="leading-relaxed">
              Returns are only accepted if the book delivered does not match the
              description. Customers must raise a return request within 3 days
              of receiving the order.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              6. Contact Information
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:educationalbhatia@gmail.com"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Mail className="w-5 h-5" />
                <span>educationalbhatia@gmail.com</span>
              </a>
              <a
                href="tel:+917307097658"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7307097658</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
