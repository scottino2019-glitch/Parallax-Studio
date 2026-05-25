/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { 
  Layers, 
  MousePointer2, 
  Code2, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  Terminal, 
  Eye, 
  Play, 
  Monitor, 
  Gauge, 
  Trash2, 
  Plus, 
  RefreshCw,
  X
} from "lucide-react";
import { TEMPLATES, Template } from "./data/templates";

export default function App() {
  // Current active template key
  const [activeTemplateId, setActiveTemplateId] = useState<string>("sticky-overlap");
  
  // Custom edited code state (persisted per-template session)
  const [editedCodeMap, setEditedCodeMap] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    TEMPLATES.forEach(t => {
      initial[t.id] = t.html;
    });
    return initial;
  });

  // Export Modal state
  const [showExportModal, setShowExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Live statistics from the Iframe
  const [scrollStats, setScrollStats] = useState({
    offset: 0,
    progress: 0,
    fps: 60,
    frameTime: 1.1
  });

  // Current template code
  const currentCode = editedCodeMap[activeTemplateId] || "";

  // Reset the current template to initial code
  const handleResetCode = () => {
    const original = TEMPLATES.find(t => t.id === activeTemplateId);
    if (original) {
      setEditedCodeMap(prev => ({
        ...prev,
        [activeTemplateId]: original.html
      }));
    }
  };

  // Listen to messages from the preview iframe to track actual scrolling coordinate
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "scroll") {
        const { scrollY, maxScroll } = event.data;
        const calcProgress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
        
        // Dynamic simulated frame calculation for aesthetics
        const simulatedFrameTime = (1.0 + Math.random() * 0.4).toFixed(1);
        
        setScrollStats({
          offset: Math.round(scrollY),
          progress: Math.round(calcProgress),
          fps: Math.round(59 + Math.random() * 1.5),
          frameTime: parseFloat(simulatedFrameTime)
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Update a specific template's code in memory
  const updateCode = (newCode: string) => {
    setEditedCodeMap(prev => ({
      ...prev,
      [activeTemplateId]: newCode
    }));
  };

  // Generate iframe source document that injects the message passing hook transparently
  const getInjectedSrcDoc = () => {
    const messageScript = `
      <script>
        // Track and post scroll offsets to parent
        window.addEventListener('scroll', () => {
          window.parent.postMessage({
            type: 'scroll',
            scrollY: window.scrollY,
            maxScroll: document.documentElement.scrollHeight - window.innerHeight
          }, '*');
        });

        // Track key modifications or interactive elements
        document.addEventListener('DOMContentLoaded', () => {
          window.parent.postMessage({
            type: 'scroll',
            scrollY: window.scrollY,
            maxScroll: document.documentElement.scrollHeight - window.innerHeight
          }, '*');
        });
      </script>
    `;
    
    // Inject just before </body>
    if (currentCode.includes("</body>")) {
      return currentCode.replace("</body>", `${messageScript}</body>`);
    }
    return currentCode + messageScript;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCode = () => {
    const activeTpl = TEMPLATES.find(t => t.id === activeTemplateId);
    const filename = activeTpl ? activeTpl.filename : "custom-parallax.html";
    const blob = new Blob([currentCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Count lines for the gutter
  const lineCount = currentCode.split("\n").length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 30) }, (_, i) => i + 1);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-950 text-slate-300 font-sans select-none overflow-hidden">
      
      {/* Top Banner Navigation */}
      <header className="h-12 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-900 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 border-r border-slate-800 pr-4">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center font-black text-white text-xs shadow-md shadow-indigo-600/30">P</div>
            <span className="font-semibold text-slate-200 text-sm tracking-tight">Parallax.Studio</span>
          </div>
          <nav className="flex space-x-6 text-[11px] font-medium tracking-wider uppercase font-mono">
            <span className="text-indigo-400 border-b-2 border-indigo-500 py-[14px]">CODE_WORKSPACE</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer py-[14px] transition-colors">ASSET_MAPPING</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer py-[14px] transition-colors">COMPILE_STATS</span>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center px-2 py-1 bg-slate-800/80 rounded border border-slate-700 text-[10px] space-x-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            <span className="text-slate-300">SANDBOX RENDER: LIVE</span>
          </div>
          <button 
            onClick={() => setShowExportModal(true)}
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-semibold font-mono tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            EXPORT CURRENT
          </button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Left Side File Explorer Sidebar (Width: 208px) */}
        <aside className="w-52 border-r border-slate-800 bg-slate-950 flex flex-col shrink-0">
          <div className="p-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[10px] uppercase font-bold text-slate-500 tracking-widest flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-indigo-400" /> Templates
              </h3>
              <span className="text-[9px] text-slate-600 font-mono">{TEMPLATES.length} loaded</span>
            </div>
            
            <ul className="space-y-1">
              {TEMPLATES.map(t => {
                const isActive = t.id === activeTemplateId;
                return (
                  <li key={t.id}>
                    <button 
                      onClick={() => setActiveTemplateId(t.id)}
                      className={`w-full p-2 rounded text-left text-xs flex flex-col transition-all cursor-pointer ${
                        isActive ? "bg-indigo-950/40 border border-indigo-500/20 text-indigo-200" : "text-slate-400 hover:bg-slate-900 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center font-mono">
                        <span className={`mr-2 font-normal ${isActive ? "text-indigo-400" : "text-slate-600"}`}>📄</span>
                        {t.filename}
                      </div>
                      <span className="text-[9px] text-slate-500 mt-1 line-clamp-2 md:block hidden leading-tight font-sans pl-5">
                        {t.description}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <h3 className="text-[10px] uppercase font-bold text-slate-500 mb-3 tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-pink-400" /> Layer Parameters
              </h3>
              <ul className="space-y-2 font-mono text-[10px] text-slate-500 pl-1">
                <li className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span>Scroll Offset</span>
                  <span className="text-amber-400">{scrollStats.offset}px</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span>Tectonic Factor</span>
                  <span className="text-cyan-400">1.45x</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-slate-900">
                  <span>Translation</span>
                  <span className="text-purple-400">Y / HORIZON</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="mt-auto p-3 m-3 bg-slate-900/30 rounded-lg border border-slate-800/50">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block mb-1">Code Control:</span>
            <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
              Edit any HTML tag or Tailwind utility classes in the central pane. The right preview pane re-renders and compiles changes in real time.
            </p>
          </div>

          <div className="border-t border-slate-800 p-3 bg-slate-950 shrink-0">
            <div className="flex items-center justify-between text-[9px] text-slate-600 font-mono tracking-tight">
              <span>SANDBOX v2.1</span>
              <span className="text-green-500/70">SYNC_OK</span>
            </div>
          </div>
        </aside>

        {/* Central Workspace Division: Interactive Code Editor (Width: Flexible) */}
        <section className="flex-1 flex flex-col bg-slate-950 border-r border-slate-800 overflow-hidden min-w-[280px]">
          
          {/* Header Tab of Selected Template */}
          <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center">
              <div className="px-4 h-9 flex items-center gap-2 bg-slate-950 text-slate-200 border-t-2 border-t-indigo-500 border-r border-slate-800 text-xs font-mono">
                <span className="text-amber-500 font-black">&lt;/&gt;</span>
                {TEMPLATES.find(t => t.id === activeTemplateId)?.filename}
                <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded ml-1 font-mono uppercase tracking-widest text-[8px]">ACTIVE</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={handleResetCode}
                title="Reset to original template"
                className="p-1 px-2.5 hover:bg-slate-800 rounded bg-slate-900 text-[10px] font-mono font-medium text-amber-500 hover:text-amber-400 border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 animate-spin duration-1000" />
                Reset Code
              </button>
              <button 
                onClick={handleCopyCode}
                className="p-1 px-2 hover:bg-slate-800 rounded bg-slate-900 text-[10px] font-mono text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
          </div>

          {/* Code Textarea & Gutter Area */}
          <div className="flex-1 flex font-mono bg-[#0d1117] relative select-text overflow-hidden">
            {/* Gutter (Line Numbers) */}
            <div className="w-12 bg-slate-950/60 text-slate-600 text-right pr-3 pt-3 select-none text-xs leading-6 border-r border-slate-900 shrink-0 font-mono">
              {lineNumbers.map(n => (
                <div key={n} className="h-6 overflow-hidden">
                  {n}
                </div>
              ))}
            </div>

            {/* Interactive Edit Input Area */}
            <div className="flex-1 relative h-full">
              <textarea
                value={currentCode}
                onChange={(e) => updateCode(e.target.value)}
                spellCheck={false}
                autoFocus
                className="absolute inset-0 w-full h-full p-3 font-mono text-xs text-slate-300 leading-6 bg-transparent outline-none border-none resize-none overflow-auto focus:ring-0 whitespace-pre scrollbar-thin scrollbar-thumb-zinc-800"
                style={{
                  fontFamily: '"JetBrains Mono", source-code-pro, Menlo, Monaco, Consolas, monospace',
                  tabSize: 2
                }}
              />
            </div>
          </div>
        </section>

        {/* Right Side Visual Live Preview Pane (Width: Flexible - min width) */}
        <section className="flex-1 flex flex-col bg-slate-950 overflow-hidden min-w-[340px]">
          {/* Preview Pane Controls */}
          <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-3 shrink-0 select-none">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> Live Render Window
            </span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-12 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${scrollStats.progress}%` }}
                ></div>
              </div>
              <span className="text-[9px] font-mono text-slate-500">{scrollStats.progress}% SCROLL</span>
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="flex-1 bg-slate-950 relative p-4 flex flex-col justify-between">
            <div className="flex-1 w-full bg-[#050510] rounded-xl overflow-hidden border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative flex">
              <iframe
                title="Live Parallax Render"
                srcDoc={getInjectedSrcDoc()}
                sandbox="allow-scripts allow-modals allow-same-origin"
                className="w-full h-full border-none bg-slate-950"
              />
            </div>
          </div>

          {/* Bottom Live Performance & DOM Inspector */}
          <div className="h-32 border-t border-slate-800 bg-slate-950 p-3 shrink-0 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-indigo-400" /> Layer Performance Analytics
              </h4>
              <span className="text-[9px] text-emerald-400 font-mono">60fps Target</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/60 p-2 border border-slate-800 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-mono">Displaced Scroll Y</div>
                  <div className="text-sm font-bold text-indigo-400 font-mono">{scrollStats.offset}px</div>
                </div>
                <Terminal className="w-4 h-4 text-slate-700" />
              </div>
              
              <div className="bg-slate-900/60 p-2 border border-slate-800 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider font-mono">Target Rendering</div>
                  <div className="text-sm font-bold text-green-400 font-mono">{scrollStats.frameTime}ms</div>
                </div>
                <Monitor className="w-4 h-4 text-slate-700" />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Export Dialogue / Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 relative">
            
            <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Download className="w-5 h-5 text-indigo-400" /> Export Pure HTML Site
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Ready with full offline compatibility, responsive layouts and cloud-hosted Tailwind CSS engine inside.
                </p>
              </div>
              <button 
                onClick={() => setShowExportModal(false)}
                className="p-1.5 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest font-mono">File Output Target</label>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 font-mono text-xs flex justify-between items-center mt-1.5">
                  <span className="text-indigo-300">{TEMPLATES.find(t => t.id === activeTemplateId)?.filename}</span>
                  <span className="text-slate-600 uppercase text-[9px] bg-slate-900 px-2 py-0.5 rounded">HTML5 // CSS4</span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-semibold text-slate-200">How to use your exported template:</h4>
                <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Its structure bundles the lightweight <strong className="text-white">Tailwind CDN</strong> natively for robust global viewing on any server.</li>
                  <li>No build steps or dependencies are required. Use anywhere directly.</li>
                  <li>All scripts, parallax scroll offsets, and linear interpolation hooks are integrated within.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-800">
              <button 
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 hover:bg-slate-800 rounded bg-transparent border border-slate-800 text-xs font-semibold font-mono tracking-wide transition-all cursor-pointer"
              >
                CLOSE
              </button>
              <button 
                onClick={handleCopyCode}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold font-mono tracking-wide transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "COPIED" : "COPY CODE"}
              </button>
              <button 
                onClick={handleDownloadCode}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-5050 text-white rounded text-xs font-semibold font-mono tracking-wide transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD FILE
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
