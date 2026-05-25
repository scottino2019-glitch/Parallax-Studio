/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ParallaxSection } from "../components/ParallaxEngine";

/**
 * TEMPLATE: CLASSIC OVERLAP
 * Direct control via Tailwind. Change images and colors here.
 */
export default function TemplateOverlap() {
  return (
    <div className="bg-zinc-950">
      {/* SECTION 1: THE ORIGIN */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
        speed={0.3}
        className="border-b border-white/5"
        overlayColor="bg-slate-950/70"
      >
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 mix-blend-difference">
            ORIGIN
          </h1>
          <p className="text-indigo-400/60 font-mono text-xs tracking-[0.3em] uppercase">
            // Sequential Layer Transformation
          </p>
        </div>
      </ParallaxSection>

      {/* SECTION 2: THE VOID */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=2071"
        speed={0.6}
        overlayColor="bg-sky-950/60"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-semibold text-white">The Void Between</h2>
            <p className="text-lg text-sky-200/70 leading-relaxed">
              Experience the fluid transition between layers. This template is designed for 
              high-contrast storytelling where typography and imagery collide.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <code className="text-sky-300 text-sm italic">
                // Pure Tailwind & Motion Control
              </code>
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-tr from-sky-500/20 to-purple-500/20 rounded-3xl border border-white/10 flex items-center justify-center">
            <span className="text-white/20 text-8xl font-black">02</span>
          </div>
        </div>
      </ParallaxSection>

      {/* SECTION 3: THE SUMMIT */}
      <ParallaxSection 
        backgroundImage="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070"
        speed={0.2}
        overlayColor="bg-orange-950/50"
      >
        <div className="flex flex-col items-end">
          <div className="max-w-xl text-right">
            <h2 className="text-6xl font-bold text-white mb-6">Summit Reached</h2>
            <p className="text-orange-100/60 text-xl font-light">
              Fine-tune the "speed" prop to adjust the depth of the background movement. 
              Lower values create a deeper feel.
            </p>
            <button className="mt-8 px-10 py-4 bg-white text-orange-950 font-bold uppercase tracking-widest hover:bg-orange-100 transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
