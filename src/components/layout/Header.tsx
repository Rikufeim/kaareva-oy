import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Instagram } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? "px-4" : "px-0"}`}>
      {/* Top contact bar */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out bg-secondary/95 backdrop-blur-sm ${
          scrolled ? "rounded-t-2xl" : ""
        }`}
      >
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
      <header
        className={`overflow-hidden transition-all duration-500 ease-out ${
          scrolled ? "rounded-b-2xl bg-background/95 backdrop-blur-md" : "bg-background/95 backdrop-blur-md"
        }`}
      >
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
                    ? "text-primary hover:bg-black hover:text-primary"
                    : "text-muted-foreground hover:bg-black hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <HoverButton
              to="/yhteystiedot"
              size="sm"
              className="ml-2"
              backgroundColor="#000000"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              glowColor="rgba(0,0,0,0.5)"
              redCornerAccent
            >
              Ota yhteyttä
            </HoverButton>
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
          <nav className="lg:hidden border-t border-border/20 px-4 pb-6 pt-2 bg-background/95">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 px-4 -mx-4 text-base font-medium border-b border-border/20 rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-primary hover:bg-black hover:text-primary"
                    : "text-muted-foreground hover:bg-black hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <HoverButton
              to="/yhteystiedot"
              size="lg"
              className="w-full mt-4"
              onClick={() => setMobileOpen(false)}
              backgroundColor="#000000"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              glowColor="rgba(0,0,0,0.5)"
              redCornerAccent
            >
              Ota yhteyttä
            </HoverButton>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
