
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyCallButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button 
        size="lg" 
        className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl animate-pulse hover:animate-none transition-all duration-300 px-6 py-6"
        onClick={() => window.open('tel:+15551234567', '_self')}
      >
        <Phone className="w-6 h-6 mr-2" />
        Call Now
      </Button>
    </div>
  );
};
