import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Bot } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const scrollToEarlyAccess = () => {
    const earlyAccessSection = document.getElementById("early-access");
    if (earlyAccessSection) {
      earlyAccessSection.scrollIntoView({ behavior: "smooth" });
    } else if (location !== "/") {
      window.location.href = "/#early-access";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-2">
              <Bot size={20} />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              AI Career Architect
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={scrollToEarlyAccess} className="mr-2">Get Early Access</Button>
            <Link href="/auth">
              <Button variant="outline">Admin Login</Button>
            </Link>
          </nav>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-2 text-lg transition-colors ${
                      location === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToEarlyAccess();
                  }}
                  className="mt-4"
                >
                  Get Early Access
                </Button>
                <Link href="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full mt-4">Admin Login</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
