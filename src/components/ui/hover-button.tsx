import React, { useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HoverButtonProps {
  children: ReactNode;
  onClick?: (e?: React.MouseEvent) => void;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  type?: "button" | "submit";
  size?: "sm" | "lg" | "xl";
  variant?: "primary" | "outline";
  redCornerAccent?: boolean;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-4 text-lg",
};

const variantStyles = {
  primary: {
    backgroundColor: "hsl(1, 78%, 50%)",
    textColor: "#ffffff",
    hoverTextColor: "#ffffff",
    glowColor: "rgba(255,255,255,0.6)",
  },
  outline: {
    backgroundColor: "#111827",
    textColor: "hsl(0, 0%, 96%)",
    hoverTextColor: "hsl(1, 78%, 65%)",
    glowColor: "hsl(1, 78%, 50%)",
  },
};

const HoverButton: React.FC<HoverButtonProps> = ({
  children,
  onClick,
  to,
  href,
  target,
  rel,
  className = "",
  disabled = false,
  glowColor,
  backgroundColor,
  textColor,
  hoverTextColor,
  type = "button",
  size = "lg",
  variant = "primary",
  redCornerAccent = false,
}) => {
  const variantStyle = variantStyles[variant];
  const finalBg = backgroundColor ?? variantStyle.backgroundColor;
  const finalText = textColor ?? variantStyle.textColor;
  const finalHoverText = hoverTextColor ?? variantStyle.hoverTextColor;
  const finalGlow = glowColor ?? variantStyle.glowColor;
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    disabled: disabled && !to && !href,
    className: cn(
      "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-semibold transition-colors duration-300 cursor-pointer",
      sizeClasses[size],
      variant === "outline" && "border-2 border-foreground/30 hover:border-primary",
      disabled && !to && !href && "opacity-50 cursor-not-allowed",
      className
    ),
    style: {
      backgroundColor: finalBg,
      color: isHovered ? finalHoverText : finalText,
    } as React.CSSProperties,
  };

  const glowEl = (
    <div
      className={cn(
        "absolute w-[100px] h-[100px] rounded-full opacity-40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out",
        isHovered ? "scale-100" : "scale-0"
      )}
      style={{
        left: `${glowPosition.x}px`,
        top: `${glowPosition.y}px`,
        background: `radial-gradient(circle, ${finalGlow} 10%, transparent 70%)`,
        zIndex: 0,
      }}
    />
  );

  const redAccentEl = redCornerAccent && (
    <div
      className="absolute -top-4 -left-4 w-16 h-16 pointer-events-none opacity-50 blur-md"
      style={{
        background: "radial-gradient(circle at 25% 25%, hsl(1, 78%, 50%) 0%, hsl(1, 78%, 50%) 20%, transparent 70%)",
        zIndex: 0,
      }}
    />
  );

  const content = (
    <>
      {redAccentEl}
      {glowEl}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        {...sharedProps}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...sharedProps}>
      {content}
    </button>
  );
};

export { HoverButton };
