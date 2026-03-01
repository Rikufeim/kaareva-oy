import { ReactNode } from "react";
import { Instagram } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatedSocialIcons } from "@/components/ui/animated-social-icons";

interface LayoutProps {
  children: ReactNode;
}

const socialIcons = [
  { Icon: Instagram, href: "https://www.instagram.com/kaareva_oy/" },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 relative">{children}</main>
      <Footer />
      <AnimatedSocialIcons icons={socialIcons} />
    </div>
  );
};

export default Layout;
