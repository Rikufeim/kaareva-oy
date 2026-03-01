import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactFaqs = [
  {
    q: "Onko tarjouksen pyytäminen maksutonta?",
    a: "Kyllä! Tarjouksen ja alustavan kustannusarvion laatiminen on aina veloituksetonta ja sitoumuksetonta.",
  },
  {
    q: "Kuinka nopeasti saatte aloitettua projektin?",
    a: "Aloitusajankohta riippuu tilauskannastamme, mutta yleensä pääsemme liikkeelle 2–6 viikon sisällä sopimuksesta.",
  },
  {
    q: "Voiko teitä tavata ennen projektin aloittamista?",
    a: "Ehdottomasti! Suosittelemme aina tapaamista ennen projektin aloitusta. Voimme tavata toimistollamme, kohteessa tai etäyhteydellä.",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="page-hero-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ota yhteyttä – <span className="text-gradient">olemme täällä sinua varten</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kerro projektistasi tai kysy mitä vain – vastaamme mielellämme. Voit myös soittaa suoraan tai pistää sähköpostia.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Lähetä viesti</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Yhteystietomme</h2>
                <div className="space-y-5">
                  <a href="tel:+358401234567" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Puhelin</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">040 123 4567</p>
                    </div>
                  </a>
                  <a href="mailto:info@kaareva.fi" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sähköposti</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">info@kaareva.fi</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Osoite</p>
                      <p className="font-semibold">Keskustie 14, 01900 Nurmijärvi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Toimialue</p>
                      <p className="font-semibold">Uusimaa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15579.1!2d24.81!3d60.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df50e6a821b2d%3A0x4000000000000000!2sNurmij%C3%A4rvi!5e0!3m2!1sfi!2sfi!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kaareva Oy sijainti kartalla – Nurmijärvi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-10">Usein kysytyt yhteydenottokysymykset</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((f, i) => (
              <AccordionItem key={i} value={`cfaq-${i}`} className="bg-card border border-border rounded-xl px-6">
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
    </Layout>
  );
};

export default Contact;
