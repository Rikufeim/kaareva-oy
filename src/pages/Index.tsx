import { Link } from "react-router-dom";
import { HoverButton } from "@/components/ui/hover-button";
import { GradientCardShowcase, type CardItem } from "@/components/ui/gradient-card-showcase";
import { FeatureCard } from "@/components/ui/feature-card";
import { Phone, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

import ref1 from "@/assets/ref-1.jpg";
import ref2 from "@/assets/ref-2.jpg";
import ref3 from "@/assets/ref-3.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { value: "15+", label: "vuoden kokemus" },
  { value: "106", label: "tyytyväistä asiakasta" },
  { value: "3", label: "ammattilaista" },
  { value: "100%", label: "omistautumista" },
];

const uspCards: CardItem[] = [
  {
    title: "15 vuoden kokemus",
    desc: "Olemme rakentaneet uusmaalaisille perheille laadukkaita koteja jo yli vuosikymmenen ajan.",
    gradientFrom: "#0a0a0a",
    gradientTo: "#171717",
    href: "/palvelut",
  },
  {
    title: "Luotettava kumppani",
    desc: "106 tyytyväistä asiakasta kertoo puolestaan – pidämme lupauksemme ja aikataulumme.",
    gradientFrom: "#0a0a0a",
    gradientTo: "#262626",
    href: "/palvelut",
  },
  {
    title: "Räätälöity laatu",
    desc: "Jokainen kohde suunnitellaan ja toteutetaan juuri sinun toiveidesi ja tarpeidesi mukaan.",
    gradientFrom: "#171717",
    gradientTo: "#262626",
    href: "/palvelut",
  },
];

const faqs = [
  {
    q: "Kuinka pitkä on tyypillinen rakennusaika omakotitalolle?",
    a: "Omakotitalon rakentaminen kestää tyypillisesti 6–10 kuukautta kohteen koosta ja varustelutasosta riippuen. Laadimme aina tarkan aikataulun projektin alussa.",
  },
  {
    q: "Toimitteko koko Uudenmaan alueella?",
    a: "Kyllä! Kotipesämme on Nurmijärvellä, mutta palvelemme asiakkaita koko Uudenmaan alueella – Helsingistä Hyvinkäälle.",
  },
  {
    q: "Voiko talon suunnitelmia muokata projektin aikana?",
    a: "Toki, joustavuus on vahvuutemme. Käymme muutokset aina yhdessä läpi ja arvioimme vaikutukset aikatauluun ja budjettiin.",
  },
  {
    q: "Miten yhteydenpito hoidetaan rakennusprojektin aikana?",
    a: "Pidämme sinut ajan tasalla säännöllisin väliajoin – sovimme yhteydenpitotavan projektin alussa. Olemme aina tavoitettavissa puhelimitse ja sähköpostilla.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-48 md:pt-56 lg:pt-64 bg-muted">
        <div className="absolute inset-0 bg-muted" />
        <div className="relative z-10 container-narrow px-4 md:px-8 text-left ml-4 md:ml-8 mr-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span>Rakennamme unelmiesi kodin</span>
            <br />
            <span className="bg-black/90 px-3 py-1 rounded-xl inline-block text-white align-middle mt-1">ammattitaidolla</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/95 max-w-xl mb-6 animate-fade-in leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ animationDelay: "0.3s" }}>
            Kaareva Oy on luotettava rakennuskumppanisi Uudellamaalla. Räätälöityjä omakotitaloja ja laadukkaita remontteja 15 vuoden kokemuksella.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-fade-in" style={{ animationDelay: "0.45s" }}>
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
              className="inline-flex items-center gap-2 text-base font-medium text-foreground/95 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Soita meille
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="container-narrow px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 ml-auto mr-4 md:mr-8">
          {stats.map((s) => (
            <div key={s.label} className="text-right">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">{s.value}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section className="section-padding">
        <div className="container-narrow text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">
            Kokemus, laatu ja luotettavuus
          </h2>
          <GradientCardShowcase cards={uspCards} />
        </div>
      </section>

      {/* Services overview - Feature 108 style */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16">
            Kattavaa rakennusosaamista
          </h2>
          <div className="space-y-20 md:space-y-28">
            <FeatureCard
              label="Avaimet käteen"
              title="Rakennamme unelmiesi omakotitalon."
              description="Räätälöity suunnittelu, projektointi ja aikataulutus – yhteistyökumppanimme Jetta-Talon kanssa löydämme juuri sinulle sopivan ratkaisun. Laadukkaat materiaalit ja huolellinen toteutus joka askeleella."
              buttonText="Lue lisää"
              to="/palvelut"
              graphic="house"
            />
            <FeatureCard
              label="Remontit"
              title="Muunnamme remontit helppoon muotoon."
              description="Toteutamme remontit ammattitaidolla – keittiöremontista kokonaisiin peruskorjauksiin. Jokainen remontti on meille yhtä tärkeä ja suunnittelemme sen juuri sinun toiveidesi mukaan."
              buttonText="Lue lisää"
              to="/palvelut"
              graphic="renovation"
              reverse
            />
          </div>
        </div>
      </section>

      {/* References highlight */}
      <section className="section-padding">
        <div className="container-narrow text-left">
          <div className="mb-14">
            <div className="w-12 h-1 bg-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Kohteita
            </h2>
            <p className="text-muted-foreground text-lg">
              Tutustu referensseihimme.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-xl border border-border">
              <div className="overflow-hidden">
                <img
                  src={ref1}
                  alt="Moderni omakotitalo Nurmijärvellä, vaalea julkisivu ja suuret ikkunat"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-display font-bold text-lg mb-1">Omakotitalo, Nurmijärvi</h3>
                <p className="text-muted-foreground text-sm">Moderni 150 m² perhetalo räätälöitynä asiakkaan toiveiden mukaan.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-border">
              <div className="overflow-hidden">
                <img
                  src={ref2}
                  alt="Tummapuuverhoiltu omakotitalo syksyisessä maisemassa, Hyvinkää"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-display font-bold text-lg mb-1">Hirsitalo, Hyvinkää</h3>
                <p className="text-muted-foreground text-sm">Tunnelmallinen 120 m² hirsirakenteinen koti luonnonläheisellä tontilla.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-border">
              <div className="overflow-hidden">
                <img
                  src={ref3}
                  alt="Remontoitu keittiö skandinaavisella designilla"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-display font-bold text-lg mb-1">Keittiöremontti, Tuusula</h3>
                <p className="text-muted-foreground text-sm">Kokonaisvaltainen keittiöremontti vaaleilla kaapeilla ja puutasolla.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <HoverButton
              to="/referenssit"
              size="lg"
              backgroundColor="#000000"
              textColor="#ffffff"
              hoverTextColor="#ffffff"
              glowColor="rgba(0,0,0,0.5)"
              redCornerAccent
            >
              Katso kaikki kohteet
            </HoverButton>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--section-alt)) 100%)",
        }}
      >
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Luotettava verkosto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Teemme tiivistä yhteistyötä Jetta-Talon kanssa tarjotaksemme asiakkaillemme parasta mahdollista laatua ja valikoimaa.
          </p>
          <a
            href="https://www.jetta-talo.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground bg-card border border-border hover:border-primary/40 hover:text-foreground transition-colors"
          >
            Jetta-Talo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow max-w-3xl text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">
            Usein kysytyt kysymykset
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="px-0">
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Valmis rakentamaan <span className="text-gradient">unelmiesi kodin?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Ota yhteyttä ja kerro meille projektistasi – suunnitellaan yhdessä sinulle täydellinen koti.
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground bg-card border border-border hover:border-primary/40 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Soita meille
            </a>
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
