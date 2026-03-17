import { useState } from "react";
import { guides } from "./guides/index.js";

const CATEGORY_COLORS = {
  "Wiki.js":    { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
  "Confluence": { bg: "#fdf4ff", border: "#e9d5ff", text: "#7e22ce" },
  "GitHub":     { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
  "Jira":       { bg: "#fff7ed", border: "#fed7aa", text: "#c2410c" },
  "General":    { bg: "#f8fafc", border: "#e2e8f0", text: "#475569" },
};

function categoryStyle(cat) {
  return CATEGORY_COLORS[cat] || CATEGORY_COLORS["General"];
}

export default function GuidePicker({ onSelect }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(guides.map((g) => g.category)))];

  const filtered = guides.filter((g) => {
    const matchesSearch =
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || g.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── Header ── */}
      <div style={{ background: "#1e2d6b", borderBottom: "1px solid #1a2660" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Encardio Guides
            </span>
          </div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "white" }}>
            How-to Guides
          </h1>
          <p style={{ margin: "6px 0 0", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
            Step-by-step instructions for internal tools and services.
          </p>
        </div>
      </div>

      {/* ── Search + filter bar ── */}
      <div style={{ background: "white", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "14px 24px", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: "1 1 220px" }}>
            <svg style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", opacity: 0.4, pointerEvents: "none" }}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides…"
              style={{ width: "100%", boxSizing: "border-box", paddingLeft: 32, paddingRight: 12, height: 36, border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, outline: "none", color: "#1e293b", background: "#f8fafc" }}
            />
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const active = cat === activeCategory;
              const s = cat === "All" ? null : categoryStyle(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 99,
                    fontSize: 12,
                    fontWeight: 500,
                    border: active ? `1.5px solid ${s ? s.border : "#1e2d6b"}` : "1.5px solid #e2e8f0",
                    background: active ? (s ? s.bg : "#1e2d6b") : "white",
                    color: active ? (s ? s.text : "white") : "#64748b",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Cards grid ── */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#94a3b8" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
            <div style={{ fontSize: 14 }}>No guides match your search.</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {filtered.map((guide) => {
              const s = categoryStyle(guide.category);
              return (
                <button
                  key={guide.id}
                  onClick={() => onSelect(guide)}
                  style={{
                    textAlign: "left",
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "20px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    transition: "box-shadow 0.15s, border-color 0.15s, transform 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#cbd5e1";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{
                    alignSelf: "flex-start",
                    padding: "3px 9px",
                    borderRadius: 99,
                    fontSize: 11,
                    fontWeight: 600,
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    color: s.text,
                  }}>
                    {guide.category}
                  </span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>
                      {guide.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 4, lineHeight: 1.5 }}>
                      {guide.description}
                    </div>
                  </div>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 4, color: "#1e2d6b", fontSize: 12, fontWeight: 500 }}>
                    Start guide
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div style={{ marginTop: 40, textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
          {guides.length} guide{guides.length !== 1 ? "s" : ""} available
        </div>
      </div>
    </div>
  );
}
