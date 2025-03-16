import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Instagram", link: "https://www.instagram.com/shreyas_dhakal/", icon: <Instagram /> },
    { name: "Twitter", link: "https://x.com/ei77ge_", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/shreyas-dhakal-50bbb9275/", icon: <Linkedin /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
