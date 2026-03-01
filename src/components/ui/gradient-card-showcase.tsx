import { cn } from "@/lib/utils";
import { HoverButton } from "@/components/ui/hover-button";

export type CardItem = {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  href?: string;
};

const defaultHref = "/palvelut";

interface GradientCardShowcaseProps {
  cards: CardItem[];
  className?: string;
}

const GradientCardShowcase = ({ cards, className }: GradientCardShowcaseProps) => {
  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center items-end py-0",
          className
        )}
      >
        {cards.map((card, idx) => {
          const { title, desc, gradientFrom, gradientTo } = card;
          const href = card.href ?? defaultHref;
          const heights = ["min-h-[440px]", "min-h-[380px]", "min-h-[320px]"];
          const heightClass = heights[idx] ?? heights[heights.length - 1];

          return (
            <div
              key={idx}
              className={cn(
                "group relative w-full max-w-[320px] overflow-hidden rounded-lg transition-all duration-500",
                heightClass
              )}
            >
              {/* Dark base to prevent white bleed */}
              <span className="absolute inset-0 bg-black/95 rounded-lg" />
              {/* Skewed gradient panels */}
              <span
                className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                style={{
                  background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                }}
              />

              {/* Animated blobs - dark accent instead of white */}
              <span className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-lg">
                <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-primary/20 transition-all duration-100 animate-skew-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-primary/20 transition-all duration-500 animate-skew-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              </span>

              {/* Content */}
              <div className="relative z-20 left-0 p-5 sm:p-[20px_40px] bg-black/60 backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px] border border-white/10">
                <h2 className="text-2xl font-display font-bold mb-2">{title}</h2>
                <p className="text-lg leading-relaxed mb-4 text-white/90">{desc}</p>
                <HoverButton
                  to={href}
                  size="sm"
                  className="!px-3 !py-2"
                  backgroundColor="#ffffff"
                  textColor="#000000"
                  hoverTextColor="#000000"
                  glowColor="rgba(0,0,0,0.5)"
                >
                  Lue lisää
                </HoverButton>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes skew-blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-skew-blob { animation: skew-blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
};

export { GradientCardShowcase };
