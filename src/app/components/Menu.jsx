import React, { useEffect } from "react";
import { menu } from "../constants/page";
import Link from "next/link";
import { motion } from "framer-motion";

const Menu = ({ setIsMenuClicked }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const containerStagger = {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { staggerChildren: 0.2 } },
    exit: { x: "100vw", transition: { ease: "easeInOut", duration: 0.5 } }, // Smooth exit
  };

  const itemStagger = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      x: 50,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  return (
    <div
      key="menu" // Important for Framer Motion
      className="w-full h-screen fixed inset-0 bg-slate-300 flex items-center justify-center z-10"
    >
      <motion.div
        key="menu" // Important for Framer Motion
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        exit="exit" // Exit animation will now work
        className="flex flex-col items-center w-full gap-6"
      >
        {menu.map((item) => (
          <motion.div key={item.id} variants={itemStagger}>
            <Link href="/" onClick={() => setIsMenuClicked(false)}>
              <h1 className="font-besley font-medium text-lg">{item.name}</h1>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;
