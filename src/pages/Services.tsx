import { CheckCircle, Phone } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import Layout from "@/components/layout/Layout";

const newBuildFeatures = [
  "Räätälöity arkkitehtisuunnittelu",
  "Kokonaisvaltainen projektointi",
  "Tarkka aikataulutus ja budjetointi",
  "Laadukkaat ja kestävät materiaalit",
  "Säännöllinen raportointi ja yhteydenpito",
  "Avaimet käteen -toimitus",
  "Takuutyöt ja jälkihoito",
  "Yhteistyö Jetta-Talon kanssa",
];

const renovationFeatures = [
  "Peruskorjaukset ja -parannukset",
  "Kylpyhuone- ja keittiöremontit",
  "Julkisivu- ja kattoremontit",
  "Laajennukset ja muutostyöt",
  "Energiatehokkuusremontit",
  "LVI- ja sähkötyöt yhteistyökumppanein",
  "Kosteuskartoitukset ja korjaukset",
  "Asiantunteva materiaalivalinta",
];

const includes = [
  {
    title: "Projektointi",
    desc: "Hallitsemme koko hankkeen alusta loppuun – suunnittelusta lupa-asioihin ja alihankkijoiden koordinointiin.",
  },
  {
    title: "Aikataulutus",
    desc: "Laadimme realistisen aikataulun ja pidämme siitä kiinni. Tiedät aina, missä vaiheessa projektisi on.",
  },
  {
    title: "Materiaalit",
    desc: "Käytämme laadukkaita, kestäviä materiaaleja luotettavilta toimittajilta. Autamme sinua valinnoissa.",
  },
  {
    title: "Yhteydenpito",
    desc: "Olemme aina tavoitettavissa. Säännölliset tilannekatsaukset ja avoin viestintä ovat toimintamme kulmakiviä.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ammattitaitoista rakentamista <span className="text-gradient">joka tarpeeseen</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tarjoamme kattavat rakennuspalvelut uudisrakentamisesta korjausrakentamiseen. Jokainen projektimme toteutetaan samalla huolellisuudella ja ammattitaidolla.
          </p>
        </div>
      </section>

      {/* New builds */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Uudisrakentaminen</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Omakotitalon rakentaminen on elämän suurimpia päätöksiä – ja me olemme täällä tekemässä siitä mahdollisimman helppoa ja nautinnollista. Suunnittelemme ja rakennamme talosi juuri sinun toiveidesi mukaisesti, yhteistyössä luotettavan kumppanimme Jetta-Talon kanssa.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                15 vuoden kokemuksella tiedämme, mitä laadukas rakentaminen vaatii. Hoidamme kaiken suunnittelusta luovutukseen, jotta sinun tarvitsee vain odottaa avaimia uuteen kotiisi.
              </p>
              <HoverButton
                to="/yhteystiedot"
                size="lg"
                backgroundColor="#000000"
                textColor="#ffffff"
                hoverTextColor="#ffffff"
                glowColor="rgba(0,0,0,0.5)"
                redCornerAccent
              >
                Kysy lisää uudisrakentamisesta
              </HoverButton>
            </div>
            <div className="pt-12 lg:pt-0">
              <h3 className="text-xl font-display font-bold mb-6">Mitä palveluun sisältyy</h3>
              <ul className="space-y-3">
                {newBuildFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Renovations */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Korjausrakentaminen</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Remontti ei aina ole yksinkertaista – mutta meidän kanssa se on. Toteutamme kaikenkokoiset remontit ammattitaidolla, olipa kyseessä keittiön uudistus tai kokonaisvaltainen peruskorjaus.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Arvioimme kohteen huolellisesti, laadimme selkeän suunnitelman ja toteutamme työn sovitussa aikataulussa. Pidämme sinut ajan tasalla joka vaiheessa.
              </p>
              <HoverButton
                to="/yhteystiedot"
                size="lg"
                backgroundColor="#000000"
                textColor="#ffffff"
                hoverTextColor="#ffffff"
                glowColor="rgba(0,0,0,0.5)"
                redCornerAccent
              >
                Kysy lisää remonteista
              </HoverButton>
            </div>
            <div className="lg:order-1 pt-12 lg:pt-0">
              <h3 className="text-xl font-display font-bold mb-6">Remonttivalikoimamme</h3>
              <ul className="space-y-3">
                {renovationFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14">
            Mitä jokaiseen projektiin sisältyy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {includes.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Suunnitellaan projektisi yhdessä
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Kerro meille toiveistasi, niin laadimme sinulle kustannusarvion ja aikataulun veloituksetta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <HoverButton
              to="/yhteystiedot"
              size="xl"
              backgroundColor="#000000"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              glowColor="rgba(0,0,0,0.5)"
              redCornerAccent
            >
              Pyydä tarjous
            </HoverButton>
            <a
              href="tel:+358401234567"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Soita meille
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
