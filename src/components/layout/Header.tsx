import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kaareva-logo.png";

const navLinks = [
  { to: "/", label: "Etusivu" },
  { to: "/palvelut", label: "Palvelut" },
  { to: "/referenssit", label: "Referenssit" },
  { to: "/tiimi", label: "Tiimi" },
  { to: "/yhteystiedot", label: "Yhteystiedot" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container-narrow flex items-center justify-between py-2 px-4 md:px-8 text-sm">
          <div className="flex items-center gap-4 md:gap-6 text-muted-foreground">
            <a href="tel:+358401234567" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">040 123 4567</span>
            </a>
            <a href="mailto:info@kaareva.fi" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@kaareva.fi</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/kaareva_oy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <span className="text-muted-foreground hidden md:inline">Nurmijärvi | Uusimaa</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-narrow flex items-center justify-between py-3 px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Kaareva Oy logo" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Päänavigaatio">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/yhteystiedot">
              <Button variant="hero" size="sm" className="ml-2">
                Ota yhteyttä
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Avaa valikko"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-background border-t border-border px-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-base font-medium border-b border-border/50 ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/yhteystiedot" onClick={() => setMobileOpen(false)}>
              <Button variant="hero" size="lg" className="w-full mt-4">
                Ota yhteyttä
              </Button>
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
