import { motion } from "framer-motion";
import { Plus, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SocialIcon {
  Icon: LucideIcon;
  href?: string;
  className?: string;
}

interface AnimatedSocialIconsProps {
  icons: SocialIcon[];
  className?: string;
  iconSize?: number;
}

export function AnimatedSocialIcons({
  icons,
  className,
  iconSize = 20,
}: AnimatedSocialIconsProps) {
  const [active, setActive] = useState(false);

  const buttonSize = "size-10 sm:size-12";

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-end justify-end",
        className
      )}
    >
      <div className="flex items-center gap-4 flex-row-reverse">
        <motion.button
          type="button"
          className={cn(
            buttonSize,
            "rounded-full flex items-center justify-center shrink-0",
            "bg-black hover:bg-black/90 transition-colors text-white",
            "relative z-10 cursor-pointer"
          )}
          onClick={() => setActive(!active)}
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ type: "ease-in", duration: 0.5 }}
        >
          <Plus size={iconSize} strokeWidth={3} className="text-white" />
        </motion.button>

        <motion.div
          className={`flex items-center gap-4 overflow-hidden ${!active ? "pointer-events-none" : ""}`}
          animate={{
            x: active ? 0 : 60,
            opacity: active ? 1 : 0,
          }}
          transition={{ type: "ease-in", duration: 0.5 }}
        >
          {icons.map(({ Icon, href, className: iconClassName }, index) => (
            <motion.div
              key={index}
              className={cn(
                buttonSize,
                "rounded-full flex items-center justify-center shrink-0",
                "bg-background shadow-lg hover:shadow-xl",
                "border border-border",
                iconClassName
              )}
              initial={false}
              animate={{
                scale: active ? 1 : 0.8,
                opacity: active ? 1 : 0,
              }}
              transition={{ type: "ease-in", duration: 0.4 }}
            >
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Icon
                    size={iconSize}
                    className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                  />
                </a>
              ) : (
                <Icon
                  size={iconSize}
                  className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
