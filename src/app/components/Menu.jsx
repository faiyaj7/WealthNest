import React from "react";
import { menu } from "../constants/page";
import Link from "next/link";
import { motion } from "framer-motion";
const Menu = () => {
  const containerStagger = {
    hidden: {
      x: "100vw",
    },
    visible: { x: 0, transition: { staggerChildren: 0.3 } },
  };
  const itemStagger = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className="w-full fixed overflow-hidden z-10 inset-0 bg-slate-300 pt-[50%]">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex flex-col items-center justify-center gap-3 w-full"
      >
        {menu.map((item) => (
          <>
            <motion.div key={item.id} variants={itemStagger}>
              <Link href="/">
                <h1 className="font-besley font-medium">{item.name}</h1>
              </Link>
            </motion.div>
            <hr className="w-3/4" />
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default Menu;
