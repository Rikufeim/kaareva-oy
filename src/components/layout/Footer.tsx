import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Contact bar */}
      <div className="bg-primary">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 gap-3">
          <p className="text-primary-foreground font-semibold text-lg font-display">
            Kiinnostuitko? Ota yhteyttä – suunnitellaan yhdessä.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+358401234567"
              className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity font-medium"
            >
              <Phone className="w-4 h-4" />
              040 123 4567
            </a>
            <a
              href="mailto:info@kaareva.fi"
              className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity font-medium"
            >
              <Mail className="w-4 h-4" />
              info@kaareva.fi
            </a>
          </div>
        </div>
      </div>

      <div className="container-narrow px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company info */}
        <div>
          <h3 className="text-lg font-bold font-display text-foreground mb-4">Kaareva Oy</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Nurmijärveläinen rakennusliike, joka toteuttaa unelmiesi kodin ammattitaidolla ja sydämellä. 15 vuoden kokemus räätälöidystä rakentamisesta Uudellamaalla.
          </p>
          <a
            href="https://www.instagram.com/kaareva_oy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Instagram className="w-4 h-4" />
            @kaareva_oy
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold font-display text-foreground mb-4">Sivusto</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Etusivu" },
              { to: "/palvelut", label: "Palvelut" },
              { to: "/referenssit", label: "Referenssit" },
              { to: "/tiimi", label: "Tiimi" },
              { to: "/yhteystiedot", label: "Yhteystiedot" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold font-display text-foreground mb-4">Yhteystiedot</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>Keskustie 14, 01900 Nurmijärvi</span>
            </li>
            <li>
              <a href="tel:+358401234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                040 123 4567
              </a>
            </li>
            <li>
              <a href="mailto:info@kaareva.fi" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                info@kaareva.fi
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-narrow px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} Kaareva Oy. Kaikki oikeudet pidätetään.</p>
          <p>Y-tunnus: 1234567-8</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
