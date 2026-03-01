import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight, Home, Wrench, Users, Clock, Shield, Star, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import ref1 from "@/assets/ref-1.jpg";
import ref2 from "@/assets/ref-2.jpg";
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

const usps = [
  {
    icon: Clock,
    title: "15 vuoden kokemus",
    desc: "Olemme rakentaneet uusmaalaisille perheille laadukkaita koteja jo yli vuosikymmenen ajan.",
  },
  {
    icon: Shield,
    title: "Luotettava kumppani",
    desc: "106 tyytyväistä asiakasta kertovat puolestaan – pidämme lupauksemme ja aikataulumme.",
  },
  {
    icon: Star,
    title: "Räätälöity laatu",
    desc: "Jokainen kohde suunnitellaan ja toteutetaan juuri sinun toiveidesi ja tarpeidesi mukaan.",
  },
];

const steps = [
  {
    num: "01",
    title: "Suunnittelu",
    desc: "Tapaamme ja kartoitamme toiveesi. Laadimme yhdessä suunnitelman, aikataulun ja budjetin.",
  },
  {
    num: "02",
    title: "Rakentaminen",
    desc: "Ammattilaistiimimme toteuttaa kohteen sovitun mukaisesti – sinä pysyt ajan tasalla koko ajan.",
  },
  {
    num: "03",
    title: "Luovutus",
    desc: "Tarkastamme kohteen yhdessä, varmistamme laatutason ja luovutamme avaimet käteesi.",
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
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Moderni suomalainen omakotitalo luonnon keskellä"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 container-narrow px-4 md:px-8 text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-in">
            Rakennusliike Nurmijärvi
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Rakennamme unelmiesi kodin <span className="text-gradient">ammattitaidolla</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Kaareva Oy on luotettava rakennuskumppanisi Uudellamaalla. Räätälöityjä omakotitaloja ja laadukkaita remontteja 15 vuoden kokemuksella.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <Link to="/yhteystiedot">
              <Button variant="hero" size="xl">
                Pyydä tarjous
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+358401234567">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Soita meille
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="container-narrow px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">{s.value}</div>
              <div className="text-primary-foreground/80 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm text-center mb-3">Miksi valita meidät</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14">
            Kokemus, laatu ja luotettavuus
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((u) => (
              <div key={u.title} className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                <u.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-bold font-display mb-3">{u.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm text-center mb-3">Palvelumme</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14">
            Kattavaa rakennusosaamista
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 md:p-10 group hover:border-primary/40 transition-colors">
              <Home className="w-12 h-12 text-primary mb-5" />
              <h3 className="text-2xl font-bold font-display mb-4">Uudisrakentaminen</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Rakennamme unelmiesi omakotitalon avaimet käteen -periaatteella. Yhteistyökumppanimme Jetta-Talon kanssa löydämme juuri sinulle sopivan ratkaisun.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["Räätälöity suunnittelu", "Projektointi ja aikataulutus", "Laadukkaat materiaalit", "Avaimet käteen"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <Link to="/palvelut" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Lue lisää <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 md:p-10 group hover:border-primary/40 transition-colors">
              <Wrench className="w-12 h-12 text-primary mb-5" />
              <h3 className="text-2xl font-bold font-display mb-4">Korjausrakentaminen</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Toteutamme remontit ammattitaidolla – keittiöremontista kokonaisiin peruskorjauksiin. Jokainen remontti on meille yhtä tärkeä.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {["Peruskorjaukset", "Kylpyhuone- ja keittiöremontit", "Laajennukset ja muutostyöt", "Energiaremontit"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <Link to="/palvelut" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Lue lisää <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* References highlight */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm text-center mb-3">Referenssit</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14">
            Tutustu kohteisiimme
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
          </div>
          <div className="text-center mt-10">
            <Link to="/referenssit">
              <Button variant="heroOutline" size="lg">
                Katso kaikki kohteet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm text-center mb-3">Näin toimimme</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14">
            Kolme askelta unelmiesi kotiin
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-5xl font-display font-bold text-primary/20 mb-4">{s.num}</div>
                <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Yhteistyökumppanimme</p>
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
            className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-8 py-5 hover:border-primary/40 transition-colors"
          >
            <span className="text-lg font-bold font-display">Jetta-Talo</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow max-w-3xl">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm text-center mb-3">Kysymyksiä?</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14">
            Usein kysytyt kysymykset
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
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
            <Link to="/yhteystiedot">
              <Button variant="hero" size="xl">
                Pyydä tarjous
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+358401234567">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                040 123 4567
              </Button>
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
