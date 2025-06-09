import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
export const Hero = () => {
  return <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop')"
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-green-50/90"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl gradient-c lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600 block">Wheelchair &amp; Scooter Rental Repairs &amp; Sales</span>
              <span className="text-green-600 block text-base">
            </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional mobility equipment rentals with free delivery. 
              We provide quality scooters, wheelchairs, powerchairs, lift chairs, and strollers 
              to enhance your independence and comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hover gradient-bg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Browse Equipment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (555) 123-4567
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">FREE</div>
                <div className="text-sm text-gray-600">Delivery & Setup</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img alt="Mobility scooter and wheelchair equipment display" src="https://www.onestopmobility.com/wp-content/uploads/2025/05/Go-Go-LX-Lifestyle.webp" className="rounded-lg shadow-2xl w-full object-fill" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-sm text-gray-600">Starting from</div>
              <div className="text-2xl font-bold text-green-600">$25/day</div>
              <div className="text-sm text-gray-500">Rental options available</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};