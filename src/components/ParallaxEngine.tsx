/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  overlayColor?: string;
  speed?: number; // 1 means normal scroll, < 1 slower (parallax), > 1 faster
}

/**
 * Core Parallax Section Component
 * Users can modify Tailwind classes directly in their templates.
 */
export function ParallaxSection({
  children,
  backgroundImage,
  className = "",
  overlayColor = "bg-black/40",
  speed = 0.5
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${(1 - speed) * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section 
      ref={ref} 
      className={`relative h-screen w-full overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background Layer (The Parallax Effect) */}
      {backgroundImage && (
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={`absolute inset-0 ${overlayColor}`} />
        </motion.div>
      )}

      {/* Content Layer */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

/**
 * Overlap Component
 * Creates the effect where the next page slides over the current one.
 */
export function OverlapLayer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 ${className}`}>
      {children}
    </div>
  );
}
