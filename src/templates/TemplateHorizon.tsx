/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * TEMPLATE: THE HORIZON
 * A horizontal pseudo-parallax effect using vertical scroll.
 */
export default function TemplateHorizon() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh] bg-neutral-900 border-t border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-10">
          {/* Card 1 */}
          <div className="group relative h-[70vh] w-[80vw] md:w-[40vw] overflow-hidden bg-neutral-800 rounded-2xl flex-shrink-0">
            <div 
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072)` }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
              <h3 className="text-4xl font-bold text-white">Digital Frontiers</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[70vh] w-[80vw] md:w-[40vw] overflow-hidden bg-neutral-800 rounded-2xl flex-shrink-0">
            <div 
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072)` }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
              <h3 className="text-4xl font-bold text-white">Cosmic Canvas</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[70vh] w-[80vw] md:w-[40vw] overflow-hidden bg-neutral-800 rounded-2xl flex-shrink-0">
            <div 
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=2070)` }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
              <h3 className="text-4xl font-bold text-white">Neural Networks</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
