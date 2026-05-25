export interface Template {
  id: string;
  name: string;
  filename: string;
  html: string;
  description: string;
}

export const TEMPLATES: Template[] = [
  {
    id: "sticky-overlap",
    name: "Sticky Overlap",
    filename: "sticky-overlap.html",
    description: "Multi-layered dyanmic sections sliding upwards, overlapping each other.",
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Celestial Overlap</title>
  <!-- Tailwind CSS V4 CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Space Grotesk Font -->
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Space Grotesk', sans-serif;
      background-color: #020617;
      margin: 0;
      color: #f8fafc;
      overflow-y: scroll;
      scrollbar-width: none; /* Hide scrollbar Firefox */
    }
    body::-webkit-scrollbar {
      display: none; /* Hide scrollbar Webkit */
    }
  </style>
</head>
<body>

  <!-- Scroll Progress Indicator -->
  <div class="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
    <div id="progress-bar" class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-0 transition-all duration-75"></div>
  </div>

  <!-- SECTION 1: THE ORIGIN -->
  <section class="relative h-screen flex items-center justify-center overflow-hidden z-10">
    <!-- Parallax Background Layer -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072'); transform: translateY(var(--scroll-y-1, 0px)); transition: transform 0.1s ease-out;"></div>
    <!-- Deep Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80"></div>
    
    <div class="relative z-10 text-center px-6">
      <span class="text-xs font-mono uppercase tracking-[0.4em] text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
        Chapter I // The Cosmos
      </span>
      <h1 class="text-6xl md:text-9xl font-bold tracking-tighter text-white mt-6 mb-4">
        ETHEREAL
      </h1>
      <p class="text-slate-400 font-mono text-sm tracking-widest max-w-lg mx-auto">
        SCROLL DOWN TO INITIATE LAYERED DISPLACEMENT
      </p>
      <div class="mt-12 animate-bounce">
        <span class="text-xs font-mono text-slate-500">▼ Scroll</span>
      </div>
    </div>
  </section>

  <!-- SECTION 2: THE VOID (Overlapping Sticky Layer) -->
  <section class="sticky top-0 h-screen flex items-center justify-center bg-slate-900 border-t border-slate-800 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] z-20">
    <!-- Visual background decoration -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#312e81,transparent_60%)]"></div>
    <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="font-mono text-xs text-indigo-400">// Layer Displacement active</div>
          <h2 class="text-4xl md:text-6xl font-bold text-white tracking-tight">The Void Continuum</h2>
          <p class="text-slate-400 text-lg leading-relaxed">
            By utilising CSS sticky positioning and isolated background structures, sections lock perfectly onto the viewport. Succeeding blocks slide atop older ones like solid tectonic plates.
          </p>
          <div class="inline-flex items-center gap-3 px-4 py-2 bg-slate-950/50 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            position: sticky; z-index: 20;
          </div>
        </div>
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div class="relative bg-slate-950 p-8 rounded-2xl border border-slate-800">
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs text-slate-500 font-mono">parallax-matrix.conf</span>
              <span class="w-3 h-3 rounded-full bg-slate-800"></span>
            </div>
            <pre class="text-xs text-emerald-400 font-mono space-y-1">
<span>opacity: 1 - progress</span>
<span>scale: lerp(1.1, 1.0)</span>
<span>speed: 0.45fs</span>
<span>blend-mode: color-dodge</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: THE APEX (Overlapping Next Layer) -->
  <section class="sticky top-0 h-screen flex items-center justify-center bg-black border-t border-slate-900 shadow-[0_-50px_100px_rgba(0,0,0,0.9)] z-30">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=2070'); transform: scale(1.05); transform: translateY(var(--scroll-y-3, 0px)); transition: transform 0.1s ease-out;"></div>
    <div class="absolute inset-0 bg-slate-950/80"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">THE SUMMIT</h2>
      <p class="text-slate-400 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
        Take control of your elements by injecting responsive coordinates. Change this HTML text and colors to craft unique, immersive scroll-driven landing layouts instantly.
      </p>
      
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="#origin" class="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-all text-sm font-mono uppercase tracking-wider">
          Jump to Top
        </a>
        <button onclick="alert('Tailwind V4 Live Core Active!')" class="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 border border-slate-800 transition-all text-sm font-mono uppercase tracking-wider">
          Action Trigger
        </button>
      </div>
    </div>
  </section>

  <!-- Script for local parallax calculation -->
  <script>
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const val1 = scrolled * 0.45;
      const val3 = (scrolled - (window.innerHeight * 2)) * 0.25;
      
      document.documentElement.style.setProperty('--scroll-y-1', val1 + 'px');
      document.documentElement.style.setProperty('--scroll-y-3', val3 + 'px');

      // Scroll Progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      document.getElementById('progress-bar').style.width = scrolledPercent + '%';
    });
  </script>
</body>
</html>`
  },
  {
    id: "horizontal-snap",
    name: "Horizontal Snap",
    filename: "horizontal-snap.html",
    description: "Converts vertical mouse scrolling into dynamic horizontal page transitions.",
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Horizon Displacement</title>
  <!-- Tailwind CSS V4 CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Outfit Font -->
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Outfit', sans-serif;
      background-color: #04040a;
      margin: 0;
      color: #e2e8f0;
    }
  </style>
</head>
<body>

  <!-- Scroll Container setup -->
  <div class="relative h-[300vh]">
    <!-- Sticky track spanning 1 viewport height -->
    <div class="sticky top-0 h-screen flex items-center overflow-hidden">
      
      <!-- Linear container to shift horizontally -->
      <div id="horizontal-track" class="flex flex-nowrap h-full items-center transition-transform duration-100 ease-out" style="width: 300vw; transform: translateX(0vw);">
        
        <!-- PANEL 1 -->
        <div class="w-screen h-screen flex-shrink-0 flex items-center justify-center relative p-8">
          <div class="absolute top-20 left-20 text-[180px] font-extrabold text-[#111222] select-none pointer-events-none">01</div>
          <div class="max-w-4xl w-full grid md:grid-cols-2 gap-12 z-10">
            <div class="flex flex-col justify-center">
              <span class="text-xs font-mono text-indigo-400 uppercase tracking-[0.2em] mb-3">// Horizontal displacement</span>
              <h1 class="text-6xl font-black text-white leading-tight">Linear Horizon</h1>
              <p class="text-slate-400 mt-4 text-lg">
                Horizontal translation maps vertical scrolling onto the X axis dynamically. Scroll downwards to watch the track slide from right to left smoothly.
              </p>
            </div>
            <div class="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-indigo-950/20 border border-indigo-700/20 flex items-center justify-center group">
              <div class="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" style="background-image: url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072')"></div>
              <span class="font-mono text-white text-xs z-10 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">DRAG_SCROLL: OFF</span>
            </div>
          </div>
        </div>

        <!-- PANEL 2 -->
        <div class="w-screen h-screen flex-shrink-0 flex items-center justify-center relative p-8 bg-slate-950/40">
          <div class="absolute top-20 left-20 text-[180px] font-extrabold text-[#17182a] select-none pointer-events-none">02</div>
          <div class="max-w-4xl w-full grid md:grid-cols-2 gap-12 z-10">
            <div class="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-indigo-950/20 border border-slate-700/20 flex items-center justify-center group">
              <div class="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" style="background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')"></div>
              <span class="font-mono text-white text-xs z-10 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">EFFECT: SNAP_TRAJECTORY</span>
            </div>
            <div class="flex flex-col justify-center">
              <span class="text-xs font-mono text-amber-400 uppercase tracking-[0.2em] mb-3">// Cinematic parallax</span>
              <h2 class="text-5xl font-bold text-white leading-tight">Dynamic Layers</h2>
              <p class="text-slate-400 mt-4 text-base">
                Using simple transforms inside a sticky wrapper lets us align high-end animations like full scale shifts, 3D rotations, and layout slides.
              </p>
            </div>
          </div>
        </div>

        <!-- PANEL 3 -->
        <div class="w-screen h-screen flex-shrink-0 flex items-center justify-center relative p-8">
          <div class="absolute top-20 left-20 text-[180px] font-extrabold text-[#15172b] select-none pointer-events-none">03</div>
          <div class="max-w-3xl w-full text-center z-10">
            <span class="text-indigo-400 font-mono text-xs uppercase tracking-[0.3em]">// End of path</span>
            <h2 class="text-6xl font-black text-white tracking-tight mt-4">Apex Reached</h2>
            <p class="text-slate-400 mt-4 text-lg max-w-xl mx-auto mb-8">
              Copy this template directly to deploy stunning portfolio sliders, horizontal service lists, and photo galleries.
            </p>
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all">
              Scroll Back to Start
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Smooth translation calculations -->
  <script>
    const track = document.getElementById('horizontal-track');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = (scrolled / maxScroll) * 100;
      
      // Since we have 3 screens, translation goes from 0% left to -200vw (or -66.6% of overall 300vw container)
      const translateXVal = (progressPercent * 2) * 1; // Map 0-100% progress to 0-200% translation
      const clampedVal = Math.min(Math.max(translateXVal, 0), 200);
      
      track.style.transform = 'translateX(-' + clampedVal + 'vw)';
    });
  </script>
</body>
</html>`
  },
  {
    id: "zoom-reveal",
    name: "Zoom & Blur Blur",
    filename: "zoom-reveal.html",
    description: "Cinematic scroll scaling where layers magnify, fade, and focus dynamically.",
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zoom Focus</title>
  <!-- Tailwind CSS V4 CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Playfair Display Font -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #06060c;
      margin: 0;
      color: #fafafa;
    }
    h1, h2, .font-serif {
      font-family: 'Playfair Display', serif;
    }
  </style>
</head>
<body>

  <!-- Sticky Frame to maintain Zoom focal point -->
  <div class="relative h-[250vh]">
    <div class="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
      
      <!-- Zooming Background Layer -->
      <div id="zoom-bg" class="absolute inset-0 bg-cover bg-center transition-all duration-100 ease-out brightness-50" style="background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070'); transform: scale(1); filter: blur(0px) brightness(0.55);"></div>
      
      <!-- Darkness Overlay -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Foreground Text scaling differently -->
      <div id="zoom-content" class="relative z-10 text-center px-6 transition-all duration-100 ease-out" style="transform: scale(1); opacity: 1;">
        <span class="text-xs uppercase tracking-[0.5em] text-emerald-400 font-mono">// Portal Activation</span>
        <h1 class="text-7xl md:text-10xl font-bold tracking-tight text-white mt-4 italic">Inner Vision</h1>
        <p class="text-emerald-100/70 text-base md:text-lg font-light max-w-lg mx-auto mt-6">
          Scroll down to watch the background inflate into space and dissolve into deep atmospheric blur.
        </p>
      </div>

    </div>
  </div>

  <!-- SECOND CONTENT REGION -->
  <section class="relative bg-[#06060c] py-32 px-6 border-t border-emerald-950/20 z-20">
    <div class="max-w-4xl mx-auto">
      <div class="h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent mb-16"></div>
      
      <div class="grid md:grid-cols-2 gap-16">
        <div>
          <h2 class="text-4xl text-white font-normal mb-6">Uncompromising Depth Control</h2>
          <p class="text-slate-400 leading-relaxed text-lg mb-4">
            Combining direct variable bindings with active scroll coordinates unlocks unparalleled freedom. Modify simple attributes directly on viewport calculations to craft pure digital art.
          </p>
        </div>
        <div class="space-y-6">
          <div class="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-900/30 font-mono text-sm text-emerald-300">
            <h4 class="text-white font-medium mb-2">// Scaling calculations</h4>
            <div class="text-slate-500">Scale factor = 1 + (scrollRatio * 1.5)</div>
            <div class="text-slate-500">Blur filter = (scrollRatio * 16)px</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive script -->
  <script>
    const bg = document.getElementById('zoom-bg');
    const content = document.getElementById('zoom-content');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight * 1.5; // End scaling at 150vh
      const ratio = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      
      // Calculate levels
      const scaleVal = 1 + (ratio * 1.4);
      const blurVal = ratio * 12;
      const brightVal = 0.55 - (ratio * 0.4);
      const textScale = 1 - (ratio * 0.2);
      const textOpacity = 1 - (ratio * 1.3); // Fade faster than scale ends
      
      // Apply
      bg.style.transform = 'scale(' + scaleVal + ')';
      bg.style.filter = 'blur(' + blurVal + 'px) brightness(' + brightVal + ')';
      
      content.style.transform = 'scale(' + textScale + ')';
      content.style.opacity = textOpacity;
    });
  </script>
</body>
</html>`
  },
  {
    id: "perspective-grid",
    name: "3D Perspective Deck",
    filename: "perspective-deck.html",
    description: "An elegant floating card deck that rotates and translates forward in 3D perspective space on scroll.",
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perspective Shift</title>
  <!-- Tailwind CSS V4 CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Space Grotesk Font -->
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Space Grotesk', sans-serif;
      background-color: #03000a;
      margin: 0;
      color: #faf9ff;
      overflow-x: hidden;
    }
    .perspective-container {
      perspective: 1000px;
    }
  </style>
</head>
<body>
  <div class="relative min-h-[220vh] perspective-container">
    <div class="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-8">
      
      <!-- Top Title with scroll displacement -->
      <div id="persp-title" class="text-center mb-12 transition-transform duration-75 ease-out">
        <span class="text-xs uppercase tracking-[0.4em] text-indigo-400 font-mono">// Dimensional Grid</span>
        <h1 class="text-5xl md:text-8xl font-black mt-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-550 bg-indigo-500">
          PERSPECTIVE
        </h1>
      </div>

      <!-- Spatial Pivot Deck -->
      <div id="persp-deck" class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full transition-all duration-100 ease-out" style="transform: rotateX(45deg) rotateY(0deg) translateZ(0px);">
        <!-- Card 1 -->
        <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
          <span class="text-3xl font-bold text-indigo-500 font-mono">01</span>
          <h3 class="text-xl font-bold mt-4 text-white">Spatial Depth</h3>
          <p class="text-slate-400 text-xs mt-2 leading-relaxed">
            As scroll progress moves, the deck moves towards the viewer's camera plane, increasing translateZ & changing orientation feedback.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <span class="text-3xl font-bold text-purple-500 font-mono">02</span>
          <h3 class="text-xl font-bold mt-4 text-white">Coordinate Hub</h3>
          <p class="text-slate-400 text-xs mt-2 leading-relaxed">
            Change inline styles using simple mathematical coefficients inside of the global scroll hook for responsive precision.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent"></div>
          <span class="text-3xl font-bold text-pink-500 font-mono">03</span>
          <h3 class="text-xl font-bold mt-4 text-white">Matrix Fluidity</h3>
          <p class="text-slate-400 text-xs mt-2 leading-relaxed">
            Highly optimized hardware-accelerated transforms guarantee zero stuttering and pristine rendering frame times.
          </p>
        </div>
      </div>

      <!-- Exploder Tracker info -->
      <div class="absolute bottom-10 left-10 font-mono text-[10px] text-slate-500 flex flex-col">
        <span>PERSPECTIVE_Z: <span id="persp-z-lbl">0px</span></span>
        <span>ROTATION_X: <span id="persp-rx-lbl">45deg</span></span>
      </div>

    </div>
  </div>

  <div class="bg-black py-24 px-8 border-t border-slate-900 relative">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-medium text-white mb-4">Unlocking the Third Dimension</h2>
      <p class="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
        By varying CSS 3D transforms dynamically according to position, websites gain depth that breaks away from Flatland patterns.
      </p>
    </div>
  </div>

  <script>
    const deck = document.getElementById('persp-deck');
    const title = document.getElementById('persp-title');
    const zLbl = document.getElementById('persp-z-lbl');
    const rxLbl = document.getElementById('persp-rx-lbl');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / (window.innerHeight * 1.2), 1);
      
      const rx = 45 - (progress * 45); // Rotates down from 45deg to 0deg (flat)
      const ry = (progress * 15);      // Subtle twist to 15deg
      const tz = progress * 150;      // Floats forward up to 150px
      const scale = 1 + (progress * 0.05);

      deck.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(' + tz + 'px) scale(' + scale + ')';
      title.style.transform = 'translateY(-' + (progress * 80) + 'px)';
      title.style.opacity = 1 - progress * 0.7;
      
      zLbl.textContent = Math.round(tz) + 'px';
      rxLbl.textContent = Math.round(rx) + 'deg';
    });
  </script>
</body>
</html>`
  },
  {
    id: "curtain-split",
    name: "Dual Curtain Split",
    filename: "curtain-reveal.html",
    description: "A theatrical cinematic effect splitting left and right curtains to reveal stunning background depths.",
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dual Split Reveal</title>
  <!-- Tailwind CSS V4 CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Space Grotesk Font -->
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Space Grotesk', sans-serif;
      background-color: #030208;
      margin: 0;
      color: #ffffff;
      overflow-x: hidden;
    }
  </style>
</head>
<body>
  
  <div class="relative h-[250vh]">
    <div class="sticky top-0 h-screen overflow-hidden">
      
      <!-- Static Hidden Hero Background Behind curtains -->
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=2070')"></div>
      <div class="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
      
      <!-- Center revealed content -->
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
        <span class="text-xs font-mono uppercase tracking-[0.4em] text-pink-400 mb-2">// Cosmic Launch</span>
        <h2 class="text-6xl md:text-9xl font-black text-white tracking-widest uppercase mb-1">DISCOVERED</h2>
        <p class="text-slate-300 text-sm md:text-base font-medium max-w-md mx-auto mt-4 leading-relaxed">
          The heavy solid columns parted seamlessly to expose the central focal point of the platform.
        </p>
      </div>

      <!-- LEFT SLIDING CURTAIN -->
      <div id="curtain-left" class="absolute left-0 top-0 bottom-0 w-1/2 bg-slate-950 border-r border-indigo-500/10 flex items-center justify-end z-20 transition-all duration-100 ease-out">
        <div class="pr-8 md:pr-16 text-right">
          <h3 class="text-4xl md:text-7xl font-light text-indigo-300">DIVER</h3>
          <span class="text-[10px] font-mono text-indigo-500 uppercase tracking-widest">// Shift left</span>
        </div>
      </div>

      <!-- RIGHT SLIDING CURTAIN -->
      <div id="curtain-right" class="absolute right-0 top-0 bottom-0 w-1/2 bg-indigo-950 border-l border-indigo-500/10 flex items-center justify-start z-20 transition-all duration-100 ease-out">
        <div class="pl-8 md:pl-16 text-left">
          <h3 class="text-4xl md:text-7xl font-bold text-white">GENT</h3>
          <span class="text-[10px] font-mono text-purple-400 uppercase tracking-widest">// Shift right</span>
        </div>
      </div>

    </div>
  </div>

  <div class="bg-black py-24 px-8 relative border-t border-slate-900 z-30">
    <div class="max-w-2xl mx-auto text-center">
      <h3 class="text-xs font-mono tracking-widest text-indigo-400 uppercase mb-4">// Smooth cinematic threshold</h3>
      <p class="text-slate-300 leading-relaxed text-sm">
        Curtains split as scroll progress shifts from start to end by transforming translateX offsets, creating a theatrical revelation effect without complex WebGL loops.
      </p>
    </div>
  </div>

  <script>
    const left = document.getElementById('curtain-left');
    const right = document.getElementById('curtain-right');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / window.innerHeight, 1);
      
      left.style.transform = 'translateX(-' + (progress * 100) + '%)';
      right.style.transform = 'translateX(' + (progress * 100) + '%)';
    });
  </script>
</body>
</html>`
  }
];
