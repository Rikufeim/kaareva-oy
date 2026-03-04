import { HoverButton } from "@/components/ui/hover-button";
import Layout from "@/components/layout/Layout";

const team = [
  {
    name: "Mikko Kaareva",
    
    
    initials: "MK",
  },
  {
    name: "Jari Virtanen",
    
    
    initials: "JV",
  },
  {
    name: "Timo Lahtinen",
    
    
    initials: "TL",
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="page-hero-padding bg-section-alt">
        <div className="container-narrow text-center">
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
                
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Työskentelytapamme</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Olemme pieni, ketterä tiimi, jossa jokainen tuntee vastuunsa. Kommunikoimme avoimesti niin keskenämme kuin asiakkaiden kanssa. Emme tee liukuhihnatyötä – jokainen kohde saa kaiken huomiomme.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Uskomme, että laadukas rakentaminen syntyy ammattitaidon, huolellisuuden ja aidon välittämisen yhdistelmästä. Siksi asiakkaamme palaavat yhä uudelleen.
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
            Tutustu ja ota yhteyttä
          </HoverButton>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
