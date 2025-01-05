"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/twMerge";
import { Link } from "@chakra-ui/react";

export const FloatingNav = ({
  children,
  navItems,
  className,
}: {
  children: React.ReactNode;
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Navbar visible par défaut
  const [detached, setDetached] = useState(false); // Pour la navigation fixe ou flottante

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setDetached(false); // Navbar fixe en haut initialement
        setVisible(true); // Visible au départ
      } else {
        setDetached(true); // Navbar devient flottante après un petit scroll
        if (direction < 0) {
          setVisible(true); // Navbar visible quand on défile vers le haut
        } else {
          setVisible(true); // Navbar visible même en scrollant vers le bas (modifiable si tu veux qu'elle disparaisse)
        }
      }
    }
  });

  return (
    <div
      style={{
        backgroundColor: "white ", // Fond semi-transparent
        height: "70px",
        width: "80%",
        marginTop: "40px",
        marginLeft: "10%",
        borderRadius: "50px",
      }}
      className={cn(
        "flex justify-center items-center w-full mx-auto border border-transparent shadow-md z-[5000] pl-8 pr-8 py-2", // Ajoute `justify-center` pour centrer, `w-full` pour la largeur complète et `max-w-7xl` pour une largeur maximale
        detached
          ? "fixed top-0 inset-x-0 bg-black" // Navbar flottante avec fond noir quand on scroll
          : "absolute top-0", // Navbar fixe initialement
        className
      )}
    >
      {children}
    </div>
  );
};
