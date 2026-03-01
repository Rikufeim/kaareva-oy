import { HoverButton } from "@/components/ui/hover-button";
import Layout from "@/components/layout/Layout";
import ref1 from "@/assets/ref-1.jpg";
import ref2 from "@/assets/ref-2.jpg";
import ref3 from "@/assets/ref-3.jpg";
import ref4 from "@/assets/ref-4.jpg";

const projects = [
  {
    img: ref1,
    alt: "Moderni omakotitalo Nurmijärvellä, vaalea julkisivu ja iso puutarha",
    title: "Omakotitalo, Nurmijärvi",
    type: "Uudiskohde",
    desc: "150 m² moderni perhetalo suunniteltiin asiakkaan toiveiden pohjalta. Avara pohjaratkaisu, suuret ikkunat ja tehokas lattialämmitys.",
  },
  {
    img: ref2,
    alt: "Tummapuuverhoiltu hirsitalo Hyvinkäällä syksyisessä koivumaisemassa",
    title: "Hirsitalo, Hyvinkää",
    type: "Uudiskohde",
    desc: "120 m² tunnelmallinen hirsirunkoinen koti, jossa yhdistyvät perinteinen käsityötaito ja nykyaikaiset ratkaisut.",
  },
  {
    img: ref3,
    alt: "Remontoitu keittiö skandinaavisella designilla, vaaleat kaapit ja puutasot",
    title: "Keittiöremontti, Tuusula",
    type: "Remontti",
    desc: "Kokonaisvaltainen keittiöremontti sisältäen uudet kalusteet, kodinkoneet, valaistuksen ja pinnat.",
  },
  {
    img: ref4,
    alt: "Julkisivuremontti käynnissä omakotitalossa, telinerakenteet paikallaan",
    title: "Julkisivuremontti, Kerava",
    type: "Remontti",
    desc: "Täydellinen julkisivuuudistus sisältäen verhouksen, ikkunat ja vesikaton kunnostuksen.",
  },
];

const References = () => {
  return (
    <Layout>
      <section className="page-hero-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Työmme puhuvat <span className="text-gradient">puolestaan</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Olemme toteuttaneet yli 100 onnistunutta projektia Uudellamaalla. Tässä muutamia esimerkkejä töistämme.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-xl border border-border hover:border-primary/40 transition-colors">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-card">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">{p.type}</span>
                  <h2 className="text-xl font-display font-bold mt-2 mb-2">{p.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Haluatko oman projektisi referenssien joukkoon?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Ota yhteyttä, niin keskustellaan projektistasi.
          </p>
          <HoverButton
            to="/yhteystiedot"
            size="xl"
            backgroundColor="#000000"
            textColor="#ffffff"
            hoverTextColor="#ffffff"
            glowColor="rgba(0,0,0,0.5)"
            redCornerAccent
          >
            Ota yhteyttä
          </HoverButton>
        </div>
      </section>
    </Layout>
  );
};

export default References;
