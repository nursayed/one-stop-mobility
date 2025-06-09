
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

export const About = () => {
  const achievements = [
    { icon: Users, title: "500+ Customers Served", description: "Trusted by individuals and healthcare facilities" },
    { icon: Award, title: "Certified Technicians", description: "Expert repairs and maintenance services" },
    { icon: Clock, title: "Quick Response", description: "Same-day service and emergency support" },
    { icon: CheckCircle, title: "Quality Guarantee", description: "All equipment thoroughly inspected and tested" }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">About one stop MobilityPro</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              15 Years of Dedicated Service to Our Community
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2009, MobilityPro Solutions has been the trusted choice for mobility equipment 
              in our community. We understand that mobility challenges shouldn't limit your independence, 
              which is why we provide reliable, affordable solutions with compassionate service.
            </p>
            <p className="text-gray-600">
              Our team of certified technicians and mobility specialists work tirelessly to ensure 
              every customer receives equipment that meets their specific needs. From temporary 
              rentals to permanent solutions, we're here to support your journey to independence.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="	https://www.onestopmobility.com/wp-content/uploads/2025/05/Go-Go-LX-Lifestyle.webp" 
              alt="Our professional team and facility" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="text-sm text-gray-600 mb-1">Customer Satisfaction</div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-500">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
