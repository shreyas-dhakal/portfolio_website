"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const data = [
    {
      title: 'Home',
       icon: <HomeIcon aria-hidden="true" />,
      href: '/',
    },
    {
      title: 'About',
       icon: <User aria-hidden="true" />,
      href: '/about',
    },
    {
      title: 'Skills',
       icon: <LightbulbIcon aria-hidden="true" />,
      href: '/skills',
    },
    {
      title: 'Education',
       icon: <GraduationCap aria-hidden="true" />,
      href: '/education',
    },
    {
      title: 'Experience',
       icon: <Briefcase aria-hidden="true" />,
      href: '/experience',
    },
    {
      title: 'Projects',
       icon: <FolderGit2 aria-hidden="true" />,
      href: '/projects',
    },
   
    {
       title: 'Contact',
       icon: <Mail aria-hidden="true" />,
      href: '/contact',
    },
    {
      title: 'More',
       icon: <MoreHorizontal aria-hidden="true" />,
      href: '/more',
    },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <nav className={cn("nav-shell", scrolling && "nav-scrolled")} aria-label="Main navigation">
      <div className="nav-frame">
        <Link href="/" className="nav-brand" aria-label="Shreyas Dhakal, AI Engineer">
          <span className="nav-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M8 10.5 16 6l8 4.5v11L16 26l-8-4.5v-11Z" />
              <path d="m8 10.5 8 4.5 8-4.5M16 15v11M11.5 8l9 5" />
              <circle cx="16" cy="15" r="2.25" />
            </svg>
          </span>
          <span className="nav-brand-copy"><strong>SD</strong><small>AI / ENGINEER</small></span>
        </Link>
        <span className="nav-status" aria-hidden="true"><i /> NODE_001 / ONLINE</span>
      <Dock className='nav-dock' panelHeight={58} magnification={40} distance={1}>
      {data.map((item, idx) => (
        <Link href={item.href} key={idx} aria-label={item.title} aria-current={pathname === item.href ? "page" : undefined}>

        <DockItem
          className={cn("nav-item",pathname === item.href && "nav-item-active")}
          >
          <DockLabel className="nav-label"><span>/{String(idx + 1).padStart(2, "0")}</span> {item.title}</DockLabel>
          <DockIcon className="nav-icon">{item.icon}</DockIcon>
        </DockItem>
          </Link>
      ))}
    </Dock>
      </div>
    </nav>
  );
};

export default Navbar;
