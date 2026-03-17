import { useState } from "react";
import GuidePicker from "./GuidePicker.jsx";

export default function App() {
  const [activeGuide, setActiveGuide] = useState(null);

  if (activeGuide) {
    const GuideComponent = activeGuide.component;
    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', system-ui, sans-serif" }}>
        {/* Guide top-bar */}
        <div style={{ background: "#1e2d6b", borderBottom: "1px solid #1a2660", padding: "0 24px", height: 52, display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => setActiveGuide(null)}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "white", padding: "5px 12px", fontSize: 12, fontWeight: 500, cursor: "pointer" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            All guides
          </button>

          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {activeGuide.category}
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>›</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>
              {activeGuide.title}
            </span>
          </div>
        </div>

        {/* Guide content */}
        <GuideComponent />
      </div>
    );
  }

  return <GuidePicker onSelect={setActiveGuide} />;
}
