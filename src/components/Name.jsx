"use client";

import { gen, Js, Ns, Os } from "@/lib/wordGen.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { variant } from "../lib/motionVariants.js";

const Name = () => {
  const [O, setO] = useState("Olivier");
  const [J, setJ] = useState("John");
  const [N, setN] = useState("Nzia");
  return (
    <div className="text-dark w-fit  hidden md:flex gap-1.5 py-1">
      <motion.span
        onClick={() => {
          setO(gen(Os, O));
        }}
        variants={variant}
        initial="hidden"
        animate="visible"
        whileHover={{ cursor: "pointer", scale: 1.1 }}
        key={O}
      >
        {O}
      </motion.span>
      <motion.span
        onClick={() => {
          setJ(gen(Js, J));
        }}
        variants={variant}
        initial="hidden"
        animate="visible"
        whileHover={{ cursor: "pointer", scale: 1.1 }}
        key={J}
      >
        {J}
      </motion.span>
      <motion.span
        onClick={() => {
          setN(gen(Ns, N));
        }}
        variants={variant}
        initial="hidden"
        animate="visible"
        whileHover={{ cursor: "pointer", scale: 1.1 }}
        key={N}
      >
        {N}
      </motion.span>
    </div>
  );
};

export default Name;
