import { HoverButton } from "@/components/ui/hover-button";

export type FeatureCardProps = {
  label: string;
  title: string;
  description: string;
  buttonText?: string;
  to?: string;
  graphic?: "house" | "renovation";
  /** true = kuva vasemmalla, teksti oikealla */
  reverse?: boolean;
};

const IsometricHouseGraphic = () => (
  <svg
    viewBox="0 0 120 100"
    className="w-full h-full max-w-[160px] max-h-[140px] mx-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="stripes-house" patternUnits="userSpaceOnUse" width="8" height="120">
        <rect width="4" height="120" fill="#0a0a0a" />
        <rect x="4" width="4" height="120" fill="#f5f5f5" />
      </pattern>
    </defs>
    <path d="M20 70 L60 40 L60 90 L20 70Z" fill="#0a0a0a" />
    <path d="M60 40 L100 70 L60 90 L60 40Z" fill="#171717" />
    <path d="M100 70 L60 90 L60 40 L100 70Z" fill="url(#stripes-house)" />
  </svg>
);

const IsometricRenovationGraphic = () => (
  <svg
    viewBox="0 0 120 100"
    className="w-full h-full max-w-[160px] max-h-[140px] mx-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="stripes-renovation" patternUnits="userSpaceOnUse" width="8" height="120">
        <rect width="4" height="120" fill="#0a0a0a" />
        <rect x="4" width="4" height="120" fill="#e5e5e5" />
      </pattern>
    </defs>
    <path d="M15 72 L55 42 L55 92 L15 72Z" fill="#0a0a0a" />
    <path d="M55 42 L95 72 L55 92 L55 42Z" fill="#171717" />
    <path d="M95 72 L55 92 L55 42 L95 72Z" fill="url(#stripes-renovation)" />
  </svg>
);

export const FeatureCard = ({
  label,
  title,
  description,
  buttonText = "Lue lisää",
  to = "/palvelut",
  graphic = "house",
  reverse = false,
}: FeatureCardProps) => {
  const textBlock = (
    <div className="flex-1 flex flex-col justify-center py-6 md:py-0">
      <span className="inline-flex w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground mb-5">
        {label}
      </span>
      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
        {description}
      </p>
      <HoverButton
        to={to}
        size="lg"
        backgroundColor="#000000"
        textColor="#ffffff"
        hoverTextColor="#ffffff"
        glowColor="rgba(0,0,0,0.5)"
        redCornerAccent
      >
        {buttonText}
      </HoverButton>
    </div>
  );

  const imageBlock = (
    <div className="flex-shrink-0 w-full md:w-[45%] min-h-[200px] md:min-h-[280px] flex items-center justify-center p-8 relative bg-muted rounded-xl border border-border">
      <span className="text-muted-foreground text-lg font-medium">
        kuva tähän
      </span>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      {textBlock}
      {imageBlock}
    </div>
  );
};
