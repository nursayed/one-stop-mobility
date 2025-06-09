
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Bike, Wrench, ShoppingCart } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Accessibility,
      title: "Wheelchairs & Powerchairs",
      description: "Manual wheelchairs and electric powerchairs for all mobility needs. From basic transport to advanced power models.",
      features: ["Manual wheelchairs", "Electric powerchairs", "Transport chairs", "Heavy-duty options"]
    },
    {
      icon: Bike,
      title: "Mobility Scooters",
      description: "3-wheel and 4-wheel mobility scooters for independence and freedom. Perfect for shopping, travel, or daily activities.",
      features: ["3 & 4-wheel scooters", "Travel scooters", "Heavy-duty models", "Indoor/outdoor use"]
    },
    {
      icon: ShoppingCart,
      title: "Lift Chairs & Strollers",
      description: "Comfortable lift chairs for easy sitting and standing, plus medical strollers for transport needs.",
      features: ["Power lift chairs", "Medical strollers", "Reclining options", "Various sizes available"]
    },
    {
      icon: Wrench,
      title: "FREE Delivery & Setup",
      description: "Complimentary delivery, setup, and pickup service. We ensure your equipment is ready to use when you need it.",
      features: ["Free delivery", "Professional setup", "Usage training", "Free pickup service"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Mobility Equipment Rental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rent Scooters, Wheelchairs, Powerchairs, Lift Chairs, & Strollers with FREE delivery and setup service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="gradient-bg w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className=" w-8 h-8 service-icon-c" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
