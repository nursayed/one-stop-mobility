
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FeaturedProducts = () => {
  const products = [
    {
      name: "Manual Wheelchair",
      category: "Wheelchairs",
      price: "$25/day",
      salePrice: "$299",
      image: "https://www.onestopmobility.com/wp-content/uploads/2017/09/Motorized-Cart.jpg",
      features: ["Lightweight aluminum frame", "Removable footrests", "Adjustable armrests"],
      badge: "Most Popular"
    },
    {
      name: "Power Mobility Scooter",
      category: "Scooters", 
      price: "$45/day",
      salePrice: "$1,299",
      image: "https://www.onestopmobility.com/wp-content/uploads/2017/06/City-Mini-Gt-Single-Stroller.jpg",
      features: ["25-mile range", "4-wheel stability", "LED headlights"],
      badge: "Premium"
    },
    {
      name: "Transport Chair",
      category: "Wheelchairs",
      price: "$20/day", 
      salePrice: "$199",
      image: "https://www.onestopmobility.com/wp-content/uploads/2017/07/400KDB.jpg",
      features: ["Compact & foldable", "Attendant propelled", "Travel-friendly"],
      badge: "Budget Friendly"
    },
    {
      name: "Heavy-Duty Power Chair",
      category: "Wheelchairs",
      price: "$65/day",
      salePrice: "$2,499", 
      image: "https://www.onestopmobility.com/wp-content/uploads/2018/01/Zoom-Walker.jpg",
      features: ["400lb weight capacity", "Elevating leg rests", "Joystick control"],
      badge: "Heavy Duty"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular mobility solutions available for rental or purchase.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">Rent: {product.price}</div>
                      <div className="text-sm text-gray-500">Buy: {product.salePrice}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Rent Now
                    </Button>
                    <Button size="sm" className="btn-hover gradient-bg bg-green-600 hover:bg-green-700 text-white">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
