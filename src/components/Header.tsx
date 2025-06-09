
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { 
      name: "Rentals", 
      hasDropdown: true,
      items: ["Wheelchairs", "Scooters", "Powerchairs", "Lift Chairs", "Strollers"]
    },
    { name: "Repairs", hasDropdown: false },
    { 
      name: "Our Locations", 
      hasDropdown: true,
      items: ["Main Location", "North Branch", "South Branch", "East Branch"]
    },
    { name: "Conventions", hasDropdown: false },
    { name: "Services", hasDropdown: false },
    { name: "About", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a2594ff9-4e28-4521-ba29-2dc5e4d8fed2.png" 
              alt="One Stop Mobility Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[200px] gap-3 p-4">
                          {item.items?.map((subItem) => (
                            <div
                              key={subItem}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                            >
                              <div className="text-sm font-medium leading-none">{subItem}</div>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </Button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {item.name}
                  </Button>
                  {item.hasDropdown && item.items && (
                    <div className="ml-4 space-y-1">
                      {item.items.map((subItem) => (
                        <Button
                          key={subItem}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-gray-600 hover:text-blue-600"
                        >
                          {subItem}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
