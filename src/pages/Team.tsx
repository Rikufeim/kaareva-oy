import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const team = [
  {
    name: "Mikko Kaareva",
    role: "Toimitusjohtaja / Vastaava työnjohtaja",
    desc: "Mikko on Kaarevan perustaja ja sielu. Yli 15 vuoden kokemus rakennusalalta takaa, että jokainen projekti etenee suunnitelman mukaan. Mikko vastaa asiakassuhteista, tarjouslaskennasta ja työnjohdosta.",
    initials: "MK",
  },
  {
    name: "Jari Virtanen",
    role: "Kirvesmies / Rakennusammattilainen",
    desc: "Jari on kokenut kirvesmies, jonka käsissä puutavara taipuu millintarkkaan mittatilaustyöhön. Hän vastaa rakennetyöistä ja varmistaa, että jokainen yksityiskohta on viimeistelty.",
    initials: "JV",
  },
  {
    name: "Timo Lahtinen",
    role: "Rakennusammattilainen",
    desc: "Timo on monipuolinen osaaja, joka hallitsee niin perustus-, runko- kuin sisävalmistustyöt. Hänen positiivinen asenteensa ja huolellisuutensa näkyvät jokaisessa kohteessa.",
    initials: "TL",
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Tiimimme</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Kolmen ammattilaisen <span className="text-gradient">tiivis tiimi</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pieni tiimi, suuri sydän. Tunnemme toisemme, työtapamme ja asiakkaamme – siksi jokainen projekti sujuu joustavasti ja tehokkaasti.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary font-display">{m.initials}</span>
                </div>
                <h2 className="text-xl font-display font-bold mb-1">{m.name}</h2>
                <p className="text-primary text-sm font-semibold mb-4">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow max-w-3xl text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Työskentelytapamme</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Olemme pieni, ketterä tiimi, jossa jokainen tuntee vastuunsa. Kommunikoimme avoimesti niin keskenämme kuin asiakkaiden kanssa. Emme tee liukuhihnatyötä – jokainen kohde saa kaiken huomiomme.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Uskomme, että laadukas rakentaminen syntyy ammattitaidon, huolellisuuden ja aidon välittämisen yhdistelmästä. Siksi asiakkaamme palaavat yhä uudelleen.
          </p>
          <Link to="/yhteystiedot">
            <Button variant="hero" size="xl">
              Tutustu ja ota yhteyttä
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
