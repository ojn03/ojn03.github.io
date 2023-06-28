"use client"
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ className, from, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const ref = useRef(null);

  useEffect(() => {
    animate(count, to, { duration: 3 });

  }, [count, to]);

  return <motion.span className={className} ref={ref}>{rounded}</motion.span>;
}

export default Counter;
