import { useState } from "react";

function Hotspot({ top, left, size = 28 }) {
  return (
    <div style={{ position:"absolute", top, left, transform:"translate(-50%,-50%)", pointerEvents:"none", zIndex:30 }}>
      <div style={{ position:"relative", width:size, height:size }}>
        <div style={{ position:"absolute", inset:-6, borderRadius:"50%", background:"rgba(249,115,22,0.25)", animation:"pulse 1.6s ease-out infinite" }}/>
        <div style={{ width:size, height:size, borderRadius:"50%", background:"rgba(249,115,22,0.85)", border:"2.5px solid white", boxShadow:"0 0 0 2px rgba(249,115,22,0.5)" }}/>
      </div>
    </div>
  );
}

function Screen({ children }) {
  return (
    <div style={{ position:"relative", borderRadius:10, overflow:"hidden", border:"1px solid rgba(0,0,0,0.12)", fontSize:11, userSelect:"none", boxShadow:"0 4px 20px rgba(0,0,0,0.1)", height:"100%" }}>
      {children}
    </div>
  );
}

function Bar({ dark }) {
  return (
    <div style={{ height:30, background: dark ? "#151a24" : "#2c3e6b", display:"flex", alignItems:"center", padding:"0 10px", gap:6 }}>
      <div style={{ width:9, height:9, borderRadius:"50%", background:"#ef4444", opacity:0.8 }}/>
      <div style={{ width:9, height:9, borderRadius:"50%", background:"#f59e0b", opacity:0.8 }}/>
      <div style={{ width:9, height:9, borderRadius:"50%", background:"#22c55e", opacity:0.8 }}/>
      <span style={{ color:"rgba(255,255,255,0.55)", fontSize:10, marginLeft:8 }}>Wiki.js</span>
    </div>
  );
}

const SCREENS = {
  1: () => (
    <Screen>
      <div style={{ background:"#1e2430", padding:"30px 20px", textAlign:"center", position:"relative", height:"100%", boxSizing:"border-box" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginBottom:18 }}>
          <div style={{ width:26, height:26, background:"#5b6ef5", borderRadius:5, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ color:"white", fontSize:11, fontWeight:700 }}>W</span>
          </div>
          <span style={{ color:"white", fontWeight:600, fontSize:14 }}>Wiki.js</span>
        </div>
        <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:8, padding:"14px 18px", maxWidth:220, margin:"0 auto", position:"relative" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:10, marginBottom:10 }}>Select Authentication Provider</div>
          <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:5, padding:"7px 10px", marginBottom:5, color:"rgba(255,255,255,0.65)", fontSize:11, textAlign:"left" }}>Local</div>
          <div style={{ background:"rgba(255,255,255,0.15)", borderRadius:5, padding:"7px 10px", color:"white", fontSize:11, textAlign:"left", display:"flex", alignItems:"center", gap:7, position:"relative" }}>
            <div style={{ width:12, height:12, borderRadius:"50%", background:"#f97316", flexShrink:0 }}/>
            Keycloak
          </div>
          <Hotspot top="83%" left="50%"/>
        </div>
      </div>
    </Screen>
  ),
  2: () => (
    <Screen>
      <div style={{ background:"#0f1117", padding:"24px 20px", textAlign:"center", position:"relative", height:"100%", boxSizing:"border-box" }}>
        <div style={{ color:"rgba(255,255,255,0.45)", fontSize:11, letterSpacing:"0.18em", marginBottom:14 }}>ENCARDIO</div>
        <div style={{ background:"white", borderRadius:8, padding:"14px 16px", maxWidth:220, margin:"0 auto", position:"relative" }}>
          <div style={{ fontSize:12, fontWeight:600, color:"#111", marginBottom:10 }}>Sign in to your account</div>
          <div style={{ fontSize:10, color:"#555", marginBottom:2 }}>Username or email</div>
          <div style={{ height:26, border:"1.5px solid #3b82f6", borderRadius:4, marginBottom:8 }}/>
          <div style={{ fontSize:10, color:"#555", marginBottom:2 }}>Password</div>
          <div style={{ height:26, border:"1px solid #ddd", borderRadius:4, marginBottom:10 }}/>
          <div style={{ background:"#3b82f6", borderRadius:4, padding:"7px", color:"white", fontSize:11, textAlign:"center", marginBottom:10 }}>Sign In</div>
          <div style={{ fontSize:10, color:"#888", textAlign:"center", marginBottom:8 }}>Or sign in with</div>
          <div style={{ border:"1.5px solid #3b82f6", borderRadius:4, padding:"7px 10px", display:"flex", alignItems:"center", gap:8, justifyContent:"center", position:"relative" }}>
            <div style={{ width:12, height:12, background:"#0072c6", borderRadius:2 }}/>
            <span style={{ fontSize:11, color:"#333" }}>Microsoft</span>
          </div>
          <Hotspot top="94%" left="50%"/>
        </div>
      </div>
    </Screen>
  ),
  3: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ width:100, background:"#2c3e6b", padding:"10px 8px" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:8 }}>Main Menu</div>
          {["Technical Docs","Products","remote_ss","Directory"].map(t => (
            <div key={t} style={{ color:"rgba(255,255,255,0.65)", fontSize:9, padding:"4px 5px", borderRadius:3 }}>{t}</div>
          ))}
        </div>
        <div style={{ flex:1, padding:"10px 12px", position:"relative", background:"#f8fafc" }}>
          <div style={{ fontSize:10, color:"#3b82f6", marginBottom:6, display:"flex", gap:4 }}>
            <span>technical</span><span style={{ color:"#94a3b8" }}>/</span>
            <span>products</span><span style={{ color:"#94a3b8" }}>/</span>
            <span>remote_ss</span>
          </div>
          <div style={{ fontSize:13, fontWeight:600, color:"#111", marginBottom:4 }}>Remote Sensing Applications</div>
          <div style={{ fontSize:10, color:"#555" }}>System Architecture document</div>
          <div style={{ position:"absolute", top:8, right:10, display:"flex", gap:5 }}>
            {["📄","📋","⚙","👤"].map((ic,i) => (
              <div key={i} style={{ width:22, height:22, background: i===0 ? "#3b82f6" : "#e2e8f0", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10 }}>{ic}</div>
            ))}
          </div>
          <Hotspot top="15%" left="83%"/>
        </div>
      </div>
    </Screen>
  ),
  4: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ width:100, background:"#2c3e6b", padding:"10px 8px" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:8 }}>Page Contents</div>
          {["1. Overview","2. Core Obj","3. Sys Arch"].map(t => (
            <div key={t} style={{ color:"rgba(255,255,255,0.55)", fontSize:9, padding:"3px 5px" }}>{t}</div>
          ))}
        </div>
        <div style={{ flex:1, padding:"10px 12px", position:"relative", background:"#f8fafc" }}>
          <div style={{ position:"absolute", top:8, right:8, background:"white", border:"1px solid #e2e8f0", borderRadius:6, padding:"5px 0", boxShadow:"0 4px 16px rgba(0,0,0,0.12)", zIndex:20, minWidth:110 }}>
            {[["Edit","✏️",true],["History","🕐",false],["View Source","</>",false],["Duplicate","⧉",false],["Move/Rename","→",false]].map(([label,icon,active]) => (
              <div key={label} style={{ padding:"5px 12px", fontSize:10, display:"flex", gap:7, alignItems:"center", background: active ? "#eff6ff" : "transparent", color: active ? "#3b82f6" : "#334155" }}>
                <span>{icon}</span>{label}
              </div>
            ))}
          </div>
          <Hotspot top="14%" left="72%"/>
        </div>
      </div>
    </Screen>
  ),
  5: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ width:20, background:"#0f1117", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:10, gap:10 }}>
          {["B","≡","↔"].map(ic => <div key={ic} style={{ color:"rgba(255,255,255,0.35)", fontSize:9 }}>{ic}</div>)}
        </div>
        <div style={{ flex:1, background:"#1a2035", padding:"10px", fontFamily:"monospace", fontSize:9.5, color:"#a5b4c8", lineHeight:2, position:"relative" }}>
          <div style={{ color:"#7dd3fc" }}># **Remote Sensing Dashboard**</div>
          <div>**Proposed Architecture:** 1.1</div>
          <div style={{ color:"#fbbf24", display:"flex", alignItems:"center", gap:6, position:"relative" }}>
            ---
            <div style={{ height:14, width:2, background:"#f97316", borderRadius:1, animation:"blink 1s step-end infinite" }}/>
            <Hotspot top="50%" left="20%"/>
          </div>
          <div style={{ color:"#7dd3fc" }}>## 1. Overview</div>
          <div style={{ color:"#94a3b8" }}>This document describes...</div>
        </div>
        <div style={{ flex:1, background:"#f8fafc", padding:"10px", fontSize:9, color:"#334155", borderLeft:"1px solid #e2e8f0" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"#3b82f6", marginBottom:5 }}>Remote Sensing Dashboard</div>
          <hr style={{ border:"none", borderTop:"1px solid #e2e8f0", margin:"6px 0" }}/>
          <div style={{ fontSize:10, fontWeight:500 }}>1. Overview</div>
        </div>
      </div>
    </Screen>
  ),
  6: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ width:24, background:"#0f1117", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:10, gap:12, position:"relative" }}>
          <div style={{ width:18, height:18, background:"transparent", borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.35)", fontSize:10 }}>↕</div>
          <div style={{ width:18, height:18, background:"#3b82f6", borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:10 }}>🖼</div>
          <div style={{ width:18, height:18, background:"transparent", borderRadius:3, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.35)", fontSize:10 }}>⟲</div>
          <Hotspot top="38%" left="50%" size={22}/>
        </div>
        <div style={{ flex:1, background:"#1a2035", padding:"10px", fontFamily:"monospace", fontSize:9, color:"#a5b4c8", lineHeight:1.9 }}>
          <div style={{ color:"#7dd3fc" }}># **Remote Sensing Dashboard**</div>
          <div>**Proposed Architecture:** 1.1</div>
          <div>---</div>
          <div style={{ color:"#7dd3fc" }}>## 1. Overview</div>
          <div>This document describes...</div>
        </div>
        <div style={{ flex:1, background:"#f8fafc", padding:"10px", fontSize:9, color:"#334155", borderLeft:"1px solid #e2e8f0" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"#3b82f6" }}>Remote Sensing Dashboard</div>
          <div style={{ fontSize:9, color:"#666", marginTop:3 }}>Live preview</div>
        </div>
      </div>
    </Screen>
  ),
  7: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)", background:"#1a2035" }}>
        <div style={{ flex:1, padding:"10px" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:8 }}>Assets — / root</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
            {["test-adr","adf","code_policy","datalogger","design-proposal","hsd"].map(f => (
              <div key={f} style={{ background:"rgba(255,255,255,0.07)", borderRadius:4, padding:"4px 8px", color:"rgba(255,255,255,0.65)", fontSize:9, display:"flex", alignItems:"center", gap:4 }}>
                <span>📁</span>{f}
              </div>
            ))}
            <div style={{ background:"rgba(59,130,246,0.25)", border:"1.5px solid #3b82f6", borderRadius:4, padding:"4px 8px", color:"white", fontSize:9, display:"flex", alignItems:"center", gap:4, position:"relative" }}>
              <span>📁</span>remote-sensing-insar
              <Hotspot top="50%" left="85%"/>
            </div>
          </div>
        </div>
        <div style={{ width:110, background:"#f8fafc", borderLeft:"1px solid #e2e8f0", padding:10 }}>
          <div style={{ fontSize:9, color:"#888", marginBottom:6 }}>Browse or drop files</div>
          <div style={{ border:"1px dashed #cbd5e1", borderRadius:5, padding:"10px 6px", textAlign:"center", color:"#94a3b8", fontSize:9 }}>Drop here</div>
        </div>
      </div>
    </Screen>
  ),
  8: () => (
    <Screen>
      <div style={{ background:"#2c3e6b", padding:"5px 10px", display:"flex", justifyContent:"flex-end" }}>
        <div style={{ background:"rgba(255,255,255,0.15)", borderRadius:3, padding:"3px 10px", color:"white", fontSize:9 }}>BACK TO EDITOR</div>
      </div>
      <div style={{ display:"flex", height:"calc(100% - 33px)" }}>
        <div style={{ flex:1, background:"#1a2035", padding:"10px" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:6 }}>/ remote-sensing-insar /</div>
          <table style={{ width:"100%", fontSize:9, color:"rgba(255,255,255,0.65)", borderCollapse:"collapse" }}>
            <thead><tr style={{ borderBottom:"1px solid rgba(255,255,255,0.1)" }}>{["Filename","Type","Size","Added"].map(h => <td key={h} style={{ padding:"3px 5px", color:"rgba(255,255,255,0.35)" }}>{h}</td>)}</tr></thead>
            <tbody>{[["dataacquiringflowhld.png","PNG","509 kB","3 mo"],["master_plan_rs.svg","SVG","607 kB","2 mo"],["select-wt.png","PNG","77 kB","10d"],["login-argo.png","PNG","54 kB","10d"]].map(([n,t,s,a]) => <tr key={n} style={{ borderBottom:"1px solid rgba(255,255,255,0.05)" }}><td style={{ padding:"4px 5px" }}>{n}</td><td style={{ padding:"4px 5px" }}>{t}</td><td style={{ padding:"4px 5px" }}>{s}</td><td style={{ padding:"4px 5px" }}>{a}</td></tr>)}</tbody>
          </table>
        </div>
        <div style={{ width:115, background:"#f8fafc", borderLeft:"1px solid #e2e8f0", padding:10, position:"relative" }}>
          <div style={{ display:"flex", gap:5, marginBottom:10 }}>
            <div style={{ flex:1, background:"#3b82f6", borderRadius:4, padding:"5px 0", color:"white", fontSize:8.5, textAlign:"center" }}>Upload</div>
            <div style={{ flex:1, background:"white", border:"1.5px solid #3b82f6", borderRadius:4, padding:"5px 0", color:"#3b82f6", fontSize:8.5, textAlign:"center", position:"relative" }}>Browse...
              <Hotspot top="50%" left="50%" size={20}/>
            </div>
          </div>
          <div style={{ border:"1px dashed #cbd5e1", borderRadius:5, padding:"12px 6px", textAlign:"center", color:"#94a3b8", fontSize:8.5 }}>Drop files here</div>
        </div>
      </div>
    </Screen>
  ),
  9: () => (
    <Screen>
      <div style={{ background:"#2c3e6b", padding:"5px 10px", display:"flex", justifyContent:"flex-end" }}>
        <div style={{ background:"rgba(255,255,255,0.15)", borderRadius:3, padding:"3px 10px", color:"white", fontSize:9 }}>BACK TO EDITOR</div>
      </div>
      <div style={{ display:"flex", height:"calc(100% - 33px)" }}>
        <div style={{ flex:1, background:"#1a2035", padding:"10px" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:6 }}>/ remote-sensing-insar /</div>
          <table style={{ width:"100%", fontSize:9, color:"rgba(255,255,255,0.65)", borderCollapse:"collapse" }}>
            <tbody>{[["dataacquiringflowhld.png","PNG"],["master_plan.svg","SVG"],["select-wt.png","PNG"],["select-argo-w.png","PNG"],["login-argo.png","PNG"]].map(([n,t]) => <tr key={n} style={{ borderBottom:"1px solid rgba(255,255,255,0.05)" }}><td style={{ padding:"4px 5px" }}>{n}</td><td style={{ padding:"4px 5px", color:"#94a3b8" }}>{t}</td></tr>)}</tbody>
          </table>
        </div>
        <div style={{ width:115, background:"#f8fafc", borderLeft:"1px solid #e2e8f0", padding:10, position:"relative" }}>
          <div style={{ display:"flex", gap:5, marginBottom:8 }}>
            <div style={{ flex:1, background:"#3b82f6", borderRadius:4, padding:"4px 0", color:"white", fontSize:8, textAlign:"center" }}>Upload</div>
            <div style={{ flex:1, background:"white", border:"1px solid #e2e8f0", borderRadius:4, padding:"4px 0", color:"#64748b", fontSize:8, textAlign:"center" }}>Browse...</div>
          </div>
          <div style={{ background:"#1e293b", borderRadius:4, padding:"5px 8px", marginBottom:8, display:"flex", alignItems:"center", gap:5 }}>
            <span style={{ color:"#ef4444", fontSize:10 }}>✕</span>
            <span style={{ color:"white", fontSize:8.5 }}>ai-home.png</span>
          </div>
          <div style={{ background:"#22c55e", borderRadius:4, padding:"7px", color:"white", fontSize:10, textAlign:"center", fontWeight:600, position:"relative" }}>
            UPLOAD
            <Hotspot top="50%" left="65%" size={22}/>
          </div>
        </div>
      </div>
    </Screen>
  ),
  10: () => (
    <Screen>
      <div style={{ background:"#1a2035", padding:"10px", height:"100%", boxSizing:"border-box" }}>
        <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:6 }}>/ remote-sensing-insar / — 18 files</div>
        <table style={{ width:"100%", fontSize:9, color:"rgba(255,255,255,0.65)", borderCollapse:"collapse", marginBottom:10 }}>
          <thead><tr style={{ borderBottom:"1px solid rgba(255,255,255,0.1)" }}>{["ID","Filename","Type","Size"].map(h => <td key={h} style={{ padding:"3px 5px", color:"rgba(255,255,255,0.3)" }}>{h}</td>)}</tr></thead>
          <tbody>{[["86","select-wt.png","PNG","77 kB"],["90","click-submit.png","PNG","255 kB"],["94","wf-complete.png","PNG","136 kB"],["96","root-path.png","PNG","115 kB"],["97","dir-path.png","PNG","99 kB"]].map(([id,n,t,s]) => <tr key={id} style={{ borderBottom:"1px solid rgba(255,255,255,0.05)" }}><td style={{ padding:"3px 5px", color:"rgba(255,255,255,0.25)" }}>{id}</td><td style={{ padding:"3px 5px" }}>{n}</td><td style={{ padding:"3px 5px", color:"#94a3b8" }}>{t}</td><td style={{ padding:"3px 5px", color:"#94a3b8" }}>{s}</td></tr>)}</tbody>
        </table>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, position:"relative" }}>
          <div style={{ width:20, height:20, borderRadius:4, border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.4)", fontSize:10 }}>‹</div>
          <div style={{ width:20, height:20, borderRadius:4, border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:10 }}>1</div>
          <div style={{ width:20, height:20, borderRadius:4, background:"#3b82f6", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:10, position:"relative" }}>
            2 <Hotspot top="50%" left="50%" size={22}/>
          </div>
          <div style={{ width:20, height:20, borderRadius:4, border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.4)", fontSize:10 }}>›</div>
        </div>
      </div>
    </Screen>
  ),
  11: () => (
    <Screen>
      <div style={{ background:"#1a2035", padding:"10px", height:"100%", boxSizing:"border-box" }}>
        <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:6 }}>/ remote-sensing-insar / — page 2</div>
        <table style={{ width:"100%", fontSize:9, color:"rgba(255,255,255,0.65)", borderCollapse:"collapse", marginBottom:10 }}>
          <thead><tr style={{ borderBottom:"1px solid rgba(255,255,255,0.1)" }}>{["ID","Filename","Type","Added"].map(h => <td key={h} style={{ padding:"3px 5px", color:"rgba(255,255,255,0.3)" }}>{h}</td>)}</tr></thead>
          <tbody>{[["98","download.png","PNG","10d ago",false],["99","wf-mnp.png","PNG","10d ago",false],["102","ai-home.png","PNG","a few sec ago",true]].map(([id,n,t,a,sel]) => (
            <tr key={id} style={{ background: sel ? "rgba(59,130,246,0.2)" : "transparent", borderBottom:"1px solid rgba(255,255,255,0.05)", position:"relative" }}>
              <td style={{ padding:"5px 5px", color:"rgba(255,255,255,0.25)" }}>{id}</td>
              <td style={{ padding:"5px 5px", color: sel ? "#93c5fd" : "inherit" }}>{n}</td>
              <td style={{ padding:"5px 5px", color:"#94a3b8" }}>{t}</td>
              <td style={{ padding:"5px 5px", color: sel ? "#86efac" : "#94a3b8" }}>{a}</td>
              {sel && <Hotspot top="50%" left="28%" size={20}/>}
            </tr>
          ))}</tbody>
        </table>
      </div>
    </Screen>
  ),
  12: () => (
    <Screen>
      <div style={{ background:"#1a2035", padding:"10px", height:"100%", boxSizing:"border-box" }}>
        <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:6 }}>/ remote-sensing-insar /</div>
        <table style={{ width:"100%", fontSize:9, color:"rgba(255,255,255,0.65)", borderCollapse:"collapse", marginBottom:12 }}>
          <tbody>{[["download.png","PNG","145 kB",false],["wf-mnp.png","PNG","96 kB",false],["ai-home.png","PNG","461 kB",true]].map(([n,t,s,sel]) => (
            <tr key={n} style={{ background: sel ? "rgba(59,130,246,0.2)" : "transparent", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <td style={{ padding:"5px 5px", color: sel ? "#93c5fd" : "inherit" }}>{n}</td>
              <td style={{ padding:"5px 5px", color:"#94a3b8" }}>{t}</td>
              <td style={{ padding:"5px 5px", color:"#94a3b8" }}>{s}</td>
            </tr>
          ))}</tbody>
        </table>
        <div style={{ display:"flex", gap:8, justifyContent:"flex-end", position:"relative" }}>
          <div style={{ padding:"6px 16px", border:"1px solid #ef4444", borderRadius:5, color:"#ef4444", fontSize:10 }}>✕ CANCEL</div>
          <div style={{ padding:"6px 16px", background:"#22c55e", borderRadius:5, color:"white", fontSize:10, fontWeight:600, position:"relative" }}>
            INSERT <Hotspot top="50%" left="65%" size={20}/>
          </div>
        </div>
      </div>
    </Screen>
  ),
  13: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ width:22, background:"#0f1117" }}/>
        <div style={{ flex:1, background:"#1a2035", padding:"10px", fontFamily:"monospace", fontSize:9, color:"#a5b4c8", lineHeight:1.9, position:"relative" }}>
          <div style={{ color:"#7dd3fc" }}># **Remote Sensing Dashboard**</div>
          <div>**Proposed Architecture:** 1.1</div>
          <div style={{ background:"rgba(59,130,246,0.12)", borderRadius:3, padding:"2px 4px", position:"relative", wordBreak:"break-all" }}>
            ---![ai-home.png](/remote-sensing-insar/ai-home.png)
            <Hotspot top="50%" left="55%" size={18}/>
          </div>
          <div style={{ color:"#7dd3fc" }}>## 1. Overview</div>
        </div>
        <div style={{ flex:1, background:"#f8fafc", padding:"10px", fontSize:9, borderLeft:"1px solid #e2e8f0" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"#3b82f6", marginBottom:6 }}>Remote Sensing Dashboard</div>
          <div style={{ background:"#e2e8f0", borderRadius:5, height:70, display:"flex", alignItems:"center", justifyContent:"center", color:"#64748b", fontSize:9, marginBottom:6 }}>🖼 ai-home.png</div>
          <div style={{ fontSize:10, fontWeight:500 }}>1. Overview</div>
        </div>
      </div>
    </Screen>
  ),
  14: () => (
    <Screen>
      <div style={{ background:"#2c3e6b", height:30, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 10px" }}>
        <span style={{ color:"rgba(255,255,255,0.6)", fontSize:9 }}>Remote Sensing Applications...</span>
        <div style={{ display:"flex", gap:5 }}>
          <div style={{ padding:"3px 9px", background:"rgba(255,255,255,0.1)", borderRadius:3, color:"rgba(255,255,255,0.5)", fontSize:8.5 }}>✓ SAVED</div>
          <div style={{ padding:"3px 9px", background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.4)", borderRadius:3, color:"white", fontSize:8.5, position:"relative" }}>
            PAGE <Hotspot top="50%" left="50%" size={20}/>
          </div>
          <div style={{ padding:"3px 9px", background:"rgba(255,255,255,0.1)", borderRadius:3, color:"rgba(255,255,255,0.5)", fontSize:8.5 }}>✕ CLOSE</div>
        </div>
      </div>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ flex:1, background:"#1a2035", padding:"10px", fontFamily:"monospace", fontSize:9, color:"#a5b4c8", lineHeight:1.8 }}>
          <div style={{ color:"#7dd3fc" }}># Remote Sensing Dashboard</div>
          <div>---![ai-home.png](...)</div>
          <div style={{ color:"#7dd3fc" }}>## 1. Overview</div>
          <div>This document describes...</div>
        </div>
        <div style={{ flex:1, background:"#f8fafc", padding:"10px", fontSize:9, color:"#334155", borderLeft:"1px solid #e2e8f0" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"#3b82f6", marginBottom:4 }}>Remote Sensing Dashboard</div>
          <div style={{ background:"#e2e8f0", height:50, borderRadius:4, marginBottom:6 }}/>
          <div style={{ fontSize:10, fontWeight:500 }}>1. Overview</div>
        </div>
      </div>
    </Screen>
  ),
  15: () => (
    <Screen>
      <div style={{ padding:"12px 14px", height:"100%", boxSizing:"border-box" }}>
        <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:12 }}>
          <div style={{ width:16, height:16, background:"#3b82f6", borderRadius:4 }}/>
          <span style={{ fontSize:12, fontWeight:600, color:"var(--color-text-primary)" }}>Page Properties</span>
          <div style={{ marginLeft:"auto", background:"#22c55e", borderRadius:4, padding:"4px 12px", color:"white", fontSize:9.5 }}>✓ OK</div>
        </div>
        <div style={{ display:"flex", gap:14, marginBottom:12 }}>
          {["INFO","SCHEDULING","SCRIPTS","STYLES"].map((t,i) => (
            <span key={t} style={{ fontSize:9.5, padding:"3px 0", borderBottom: i===0 ? "2px solid #3b82f6" : "none", color: i===0 ? "#3b82f6" : "#94a3b8" }}>{t}</span>
          ))}
        </div>
        <div style={{ fontSize:10, color:"#666", marginBottom:3 }}>Title</div>
        <div style={{ border:"1.5px solid #3b82f6", borderRadius:4, padding:"7px 10px", fontSize:11, color:"var(--color-text-primary)", marginBottom:4, position:"relative" }}>
          Remote Sensing Applications System Architecture
          <Hotspot top="50%" left="75%" size={20}/>
        </div>
        <div style={{ fontSize:9, color:"#94a3b8", textAlign:"right" }}>47 / 255</div>
      </div>
    </Screen>
  ),
  16: () => (
    <Screen>
      <div style={{ padding:"12px 14px", height:"100%", boxSizing:"border-box" }}>
        <div style={{ fontSize:10, color:"#666", marginBottom:4 }}>Title</div>
        <div style={{ border:"1px solid #e2e8f0", borderRadius:4, padding:"7px 10px", fontSize:10, color:"var(--color-text-primary)", marginBottom:12 }}>Remote Sensing Applications System Architecture</div>
        <div style={{ fontSize:10, color:"#666", marginBottom:4 }}>Short Description</div>
        <div style={{ border:"1px solid #e2e8f0", borderRadius:4, padding:"7px 10px", fontSize:10, color:"#ccc", marginBottom:12 }}>Shown below the title</div>
        <div style={{ display:"flex", gap:8 }}>
          <div style={{ flexBasis:60 }}>
            <div style={{ fontSize:10, color:"#666", marginBottom:3 }}>Locale</div>
            <div style={{ border:"1px solid #e2e8f0", borderRadius:4, padding:"6px 8px", fontSize:9.5, color:"var(--color-text-primary)" }}>en / ~</div>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:10, color:"#666", marginBottom:3 }}>Path</div>
            <div style={{ border:"1.5px solid #3b82f6", borderRadius:4, padding:"6px 10px", fontSize:9.5, color:"var(--color-text-primary)", position:"relative" }}>
              technical/products/remote_ss/sys_arch
              <Hotspot top="50%" left="80%" size={20}/>
            </div>
          </div>
        </div>
        <div style={{ fontSize:8.5, color:"#94a3b8", marginTop:4 }}>No leading or trailing slashes.</div>
      </div>
    </Screen>
  ),
  17: () => (
    <Screen>
      <div style={{ padding:"12px 14px", height:"100%", boxSizing:"border-box" }}>
        <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:12 }}>
          <div style={{ width:16, height:16, background:"#3b82f6", borderRadius:4 }}/>
          <span style={{ fontSize:12, fontWeight:600, color:"var(--color-text-primary)" }}>Page Properties</span>
          <div style={{ marginLeft:"auto", background:"#22c55e", borderRadius:4, padding:"4px 14px", color:"white", fontSize:10, fontWeight:600, position:"relative" }}>
            ✓ OK <Hotspot top="50%" left="55%" size={24}/>
          </div>
        </div>
        <div style={{ border:"1px solid #e2e8f0", borderRadius:4, padding:"7px 10px", fontSize:10, color:"var(--color-text-primary)", marginBottom:8 }}>Remote Sensing Applications System Architecture</div>
        <div style={{ border:"1px solid #e2e8f0", borderRadius:4, padding:"7px 10px", fontSize:9.5, color:"var(--color-text-primary)", marginBottom:10 }}>technical/products/remote_ss/sys_arch</div>
        <div style={{ display:"flex", gap:6 }}>
          <div style={{ background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:4, padding:"4px 10px", fontSize:9.5, color:"#1d4ed8" }}>ensight ✕</div>
        </div>
      </div>
    </Screen>
  ),
  18: () => (
    <Screen>
      <div style={{ background:"#2c3e6b", height:30, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 10px" }}>
        <span style={{ color:"rgba(255,255,255,0.6)", fontSize:9 }}>Remote Sensing Applications...</span>
        <div style={{ display:"flex", gap:5 }}>
          <div style={{ padding:"3px 9px", background:"rgba(255,255,255,0.1)", borderRadius:3, color:"rgba(255,255,255,0.5)", fontSize:8.5 }}>✓ SAVED</div>
          <div style={{ padding:"3px 9px", background:"rgba(255,255,255,0.1)", borderRadius:3, color:"rgba(255,255,255,0.5)", fontSize:8.5 }}>PAGE</div>
          <div style={{ padding:"3px 9px", background:"rgba(239,68,68,0.25)", border:"1px solid rgba(239,68,68,0.4)", borderRadius:3, color:"#fca5a5", fontSize:8.5, position:"relative" }}>
            ✕ CLOSE <Hotspot top="50%" left="55%" size={20}/>
          </div>
        </div>
      </div>
      <div style={{ background:"#22c55e", padding:"5px 12px", display:"flex", alignItems:"center", gap:7 }}>
        <span style={{ color:"white", fontSize:9.5, fontWeight:500 }}>✓ Page updated successfully.</span>
      </div>
      <div style={{ display:"flex", height:"calc(100% - 62px)" }}>
        <div style={{ flex:1, background:"#1a2035", padding:"10px", fontFamily:"monospace", fontSize:9, color:"#a5b4c8", lineHeight:1.8 }}>
          <div style={{ color:"#7dd3fc" }}># Remote Sensing Dashboard</div>
          <div>---![ai-home.png](...)</div>
          <div style={{ color:"#7dd3fc" }}>## 1. Overview</div>
        </div>
        <div style={{ flex:1, background:"#f8fafc", padding:"10px", fontSize:9, borderLeft:"1px solid #e2e8f0" }}>
          <div style={{ fontSize:11, fontWeight:600, color:"#3b82f6" }}>Remote Sensing Dashboard</div>
          <div style={{ background:"#e2e8f0", height:45, borderRadius:4, margin:"6px 0" }}/>
          <div style={{ fontSize:10, color:"#555" }}>1. Overview</div>
        </div>
      </div>
    </Screen>
  ),
  19: () => (
    <Screen>
      <Bar dark/>
      <div style={{ display:"flex", height:"calc(100% - 30px)" }}>
        <div style={{ width:100, background:"#2c3e6b", padding:"10px 8px" }}>
          <div style={{ color:"rgba(255,255,255,0.45)", fontSize:9, marginBottom:8 }}>Main Menu</div>
          {["Technical Docs","Products","remote_ss","Sys Arch ✓"].map((t,i) => (
            <div key={t} style={{ color: i===3 ? "#86efac" : "rgba(255,255,255,0.65)", fontSize:9, padding:"4px 5px", background: i===3 ? "rgba(34,197,94,0.15)" : "transparent", borderRadius:3 }}>{t}</div>
          ))}
        </div>
        <div style={{ flex:1, padding:"10px 12px", background:"#f8fafc" }}>
          <div style={{ display:"flex", gap:4, fontSize:9, color:"#3b82f6", marginBottom:8 }}>
            <span>technical</span><span style={{ color:"#94a3b8" }}>/</span><span>products</span><span style={{ color:"#94a3b8" }}>/</span><span style={{ fontWeight:600 }}>sys_arch</span>
          </div>
          <div style={{ fontSize:13, fontWeight:600, color:"#3b82f6", marginBottom:6 }}>Remote Sensing Dashboard</div>
          <div style={{ background:"#e2e8f0", height:50, borderRadius:5, marginBottom:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:9, color:"#64748b" }}>🖼 ai-home.png — embedded</span>
          </div>
          <div style={{ fontSize:10, fontWeight:500, color:"#334155", marginBottom:3 }}>1. Overview</div>
          <div style={{ fontSize:9, color:"#64748b" }}>This document describes the architecture...</div>
        </div>
      </div>
    </Screen>
  ),
};

const STEPS = [
  { id:1, phase:"Login", title:"Select Keycloak", action:"Click → Keycloak", tip:"Your org's SSO provider — redirects to Microsoft Azure AD." },
  { id:2, phase:"Login", title:"Sign in with Microsoft", action:"Click → Microsoft button", tip:"Use your corporate @encardio.com email and password." },
  { id:3, phase:"Navigate", title:"Open Page Actions", action:"Click → Page Actions icon (top-right)", tip:"Navigate to your target directory first via the sidebar." },
  { id:4, phase:"Navigate", title:"Click Edit", action:"Click → Edit in dropdown", tip:"Also available: History, View Source, Duplicate, Move." },
  { id:5, phase:"Edit", title:"Place cursor in editor", action:"Click after the '---' on line 3", tip:"Left = Markdown source, right = live preview." },
  { id:6, phase:"Upload", title:"Click Insert Assets", action:"Click → 🖼 icon (left sidebar)", tip:"Thin icon bar on the far-left edge of the editor." },
  { id:7, phase:"Upload", title:"Open project folder", action:"Click → remote-sensing-insar", tip:"Always upload inside your project folder, not root." },
  { id:8, phase:"Upload", title:"Browse for file", action:"Click → Browse...", tip:"Or drag and drop the image directly onto the drop zone." },
  { id:9, phase:"Upload", title:"Upload the file", action:"Click → UPLOAD (green)", tip:"Max 10 files, 5 MB each. PNG / JPG / SVG supported." },
  { id:10, phase:"Upload", title:"Go to page 2", action:"Click → 2 in pagination", tip:"Newly uploaded files appear at the bottom of the last page." },
  { id:11, phase:"Upload", title:"Select your file", action:"Click → ai-home.png row", tip:"'Added: a few seconds ago' confirms it's your upload." },
  { id:12, phase:"Upload", title:"Insert the image", action:"Click → INSERT (green)", tip:"Set Image Alignment in the right panel before inserting." },
  { id:13, phase:"Edit", title:"Confirm image in preview", action:"Check right-side preview panel", tip:"Edit text in [] brackets to set accessible alt text." },
  { id:14, phase:"Publish", title:"Open Page Properties", action:"Click → PAGE (top toolbar)", tip:"Set properties before closing — defines the page URL." },
  { id:15, phase:"Publish", title:"Enter page title", action:"Type title in Title field", tip:"Appears in the heading, sidebar, and search results." },
  { id:16, phase:"Publish", title:"Enter page path", action:"Type path (no leading slashes)", tip:"Use lowercase with underscores: technical/products/..." },
  { id:17, phase:"Publish", title:"Confirm properties", action:"Click → OK", tip:"Use SCHEDULING tab to set a future publish date." },
  { id:18, phase:"Publish", title:"Close editor", action:"Click → ✕ CLOSE", tip:"Green banner confirms the page is saved and published." },
  { id:19, phase:"Complete", title:"Page is live!", action:"Share the URL with your team", tip:"Use Page Actions → Edit anytime to update content." },
];

const PC = {
  Login:   { bg:"#ede9fe", text:"#5b21b6", border:"#c4b5fd", dot:"#7c3aed" },
  Navigate:{ bg:"#dbeafe", text:"#1e40af", border:"#93c5fd", dot:"#3b82f6" },
  Edit:    { bg:"#cffafe", text:"#0e7490", border:"#67e8f9", dot:"#06b6d4" },
  Upload:  { bg:"#d1fae5", text:"#065f46", border:"#6ee7b7", dot:"#10b981" },
  Publish: { bg:"#fef9c3", text:"#854d0e", border:"#fde047", dot:"#f59e0b" },
  Complete:{ bg:"#dcfce7", text:"#15803d", border:"#86efac", dot:"#22c55e" },
};

const PHASES = ["Login","Navigate","Edit","Upload","Publish","Complete"];

export default function WikiGuide() {
  const [cur, setCur] = useState(0);
  const [done, setDone] = useState({});

  const step = STEPS[cur];
  const pc = PC[step.phase];
  const isLast = cur === STEPS.length - 1;
  const progress = Math.round((cur / (STEPS.length - 1)) * 100);
  const Scr = SCREENS[step.id];

  return (
    <div style={{ fontFamily:"var(--font-sans)", maxWidth:780, margin:"0 auto", padding:"1rem 0" }}>
      <style>{`
        @keyframes pulse{0%{transform:scale(1);opacity:.7}70%{transform:scale(1.7);opacity:0}100%{transform:scale(1.7);opacity:0}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>

      <div style={{ marginBottom:"1rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
          <span style={{ fontSize:12, color:"var(--color-text-secondary)" }}>Step {cur+1} of {STEPS.length}</span>
          <span style={{ fontSize:12, color:"var(--color-text-secondary)" }}>{progress}%</span>
        </div>
        <div style={{ height:4, background:"var(--color-background-secondary)", borderRadius:99, overflow:"hidden" }}>
          <div style={{ height:"100%", width:`${progress}%`, background:"#7c3aed", borderRadius:99, transition:"width 0.3s" }}/>
        </div>
      </div>

      <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", overflow:"hidden", marginBottom:"1rem" }}>
        <div style={{ padding:"0.75rem 1rem", background:pc.bg, borderBottom:`2px solid ${pc.border}`, display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:28, height:28, borderRadius:"50%", background:"white", border:`1.5px solid ${pc.border}`,
            display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:500, color:pc.text, flexShrink:0 }}>
            {step.id}
          </div>
          <div style={{ flex:1 }}>
            <span style={{ fontSize:10, fontWeight:500, color:pc.text, textTransform:"uppercase", letterSpacing:"0.06em", marginRight:8 }}>{step.phase}</span>
            <span style={{ fontSize:15, fontWeight:500, color:"var(--color-text-primary)" }}>{step.title}</span>
          </div>
          <div style={{ display:"flex", gap:5 }}>
            <button onClick={() => setCur(c => Math.max(0,c-1))} disabled={cur===0}
              style={{ width:28, height:28, borderRadius:6, border:"0.5px solid var(--color-border-secondary)", background:"var(--color-background-primary)", color:"var(--color-text-primary)", cursor: cur===0 ? "not-allowed" : "pointer", opacity: cur===0 ? 0.35 : 1, fontSize:13 }}>‹</button>
            <button onClick={() => { if(!isLast){ setDone(p=>({...p,[cur]:true})); setCur(c=>c+1); } }} disabled={isLast}
              style={{ width:28, height:28, borderRadius:6, border:`1.5px solid ${pc.border}`, background:pc.bg, color:pc.text, cursor: isLast ? "not-allowed" : "pointer", opacity: isLast ? 0.4 : 1, fontSize:13, fontWeight:600 }}>›</button>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"200px 1fr", minHeight:280 }}>
          <div style={{ padding:"1rem", borderRight:"0.5px solid var(--color-border-tertiary)", display:"flex", flexDirection:"column", gap:10, justifyContent:"center" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:8, padding:"8px 10px", background:pc.bg, borderRadius:"var(--border-radius-md)", border:`0.5px solid ${pc.border}` }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop:1, flexShrink:0 }}>
                <circle cx="7" cy="7" r="6" stroke={pc.text} strokeWidth="1.5"/>
                <path d="M5 7l1.5 1.5L9 5" stroke={pc.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize:12, fontWeight:500, color:pc.text, lineHeight:1.5 }}>{step.action}</span>
            </div>
            <div style={{ display:"flex", alignItems:"flex-start", gap:7, padding:"8px 10px", background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", border:"0.5px solid var(--color-border-tertiary)" }}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ marginTop:1, flexShrink:0 }}>
                <circle cx="7" cy="7" r="6" stroke="var(--color-text-secondary)" strokeWidth="1.2"/>
                <path d="M7 6v4M7 4.5v.5" stroke="var(--color-text-secondary)" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize:11, color:"var(--color-text-secondary)", lineHeight:1.6 }}>{step.tip}</span>
            </div>
            <label style={{ display:"flex", alignItems:"center", gap:7, cursor:"pointer", fontSize:11, color:"var(--color-text-secondary)", marginTop:4 }}>
              <input type="checkbox" checked={!!done[cur]} onChange={() => setDone(p=>({...p,[cur]:!p[cur]}))} style={{ width:14, height:14, accentColor:"#7c3aed", cursor:"pointer" }}/>
              Mark done
            </label>
          </div>
          <div style={{ padding:"0.75rem", background:"var(--color-background-secondary)" }}>
            <div style={{ fontSize:10, color:"var(--color-text-secondary)", marginBottom:6, display:"flex", alignItems:"center", gap:5 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:pc.dot, display:"inline-block" }}/>
              orange dot = where to click
            </div>
            <div style={{ height:260 }}>
              {Scr && <Scr/>}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display:"flex", gap:10, marginBottom:"1rem" }}>
        <button onClick={() => setCur(c => Math.max(0, c-1))} disabled={cur===0}
          style={{ flex:1, padding:"10px", border:"0.5px solid var(--color-border-secondary)",
            borderRadius:"var(--border-radius-md)", background:"var(--color-background-primary)",
            color:"var(--color-text-primary)", fontSize:14, cursor: cur===0 ? "not-allowed" : "pointer",
            opacity: cur===0 ? 0.4 : 1, display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
          ← Previous
        </button>
        <button onClick={() => { if(!isLast){ setDone(p=>({...p,[cur]:true})); setCur(c=>c+1); } }} disabled={isLast}
          style={{ flex:2, padding:"10px",
            border:`1.5px solid ${isLast ? "var(--color-border-tertiary)" : pc.border}`,
            borderRadius:"var(--border-radius-md)",
            background: isLast ? "var(--color-background-secondary)" : pc.bg,
            color: isLast ? "var(--color-text-secondary)" : pc.text,
            fontSize:14, fontWeight:500, cursor: isLast ? "not-allowed" : "pointer",
            opacity: isLast ? 0.5 : 1, display:"flex", alignItems:"center", justifyContent:"center", gap:6,
            transition:"all 0.2s" }}>
          {isLast ? "All steps complete" : "Mark done & next →"}
        </button>
      </div>

      <div style={{ overflowX:"auto", paddingBottom:4 }}>
        <div style={{ display:"flex", gap:0, minWidth:"max-content" }}>
          {STEPS.map((s,i) => {
            const c = PC[s.phase];
            const isCur = i === cur;
            const isDone = !!done[i];
            const isPhaseStart = i === 0 || STEPS[i-1].phase !== s.phase;
            const isPhaseEnd = i === STEPS.length-1 || STEPS[i+1].phase !== s.phase;
            return (
              <div key={i} style={{ display:"flex", alignItems:"center" }}>
                {i > 0 && (
                  <div style={{ width:10, height:2, background: isDone ? c.dot : "var(--color-border-tertiary)", transition:"background 0.3s", flexShrink:0 }}/>
                )}
                <button onClick={() => setCur(i)} title={s.title}
                  style={{ width:32, height:32, borderRadius: isPhaseStart && isPhaseEnd ? 8 : isPhaseStart ? "8px 4px 4px 8px" : isPhaseEnd ? "4px 8px 8px 4px" : 4,
                    background: isCur ? c.dot : isDone ? c.bg : "var(--color-background-secondary)",
                    border: isCur ? `2px solid ${c.dot}` : isDone ? `1.5px solid ${c.border}` : "0.5px solid var(--color-border-tertiary)",
                    cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                    transition:"all 0.2s", flexShrink:0, position:"relative" }}>
                  <span style={{ fontSize:10, fontWeight:600, color: isCur ? "white" : isDone ? c.text : "var(--color-text-secondary)" }}>
                    {isDone && !isCur ? "✓" : s.id}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
        <div style={{ display:"flex", gap:0, marginTop:5, minWidth:"max-content" }}>
          {PHASES.map(ph => {
            const phSteps = STEPS.filter(s => s.phase === ph);
            const first = STEPS.findIndex(s => s.phase === ph);
            const c = PC[ph];
            const totalW = phSteps.length * 32 + (phSteps.length - 1) * 10;
            const offset = first * 32 + first * 10;
            return (
              <div key={ph} style={{ width:totalW, marginLeft: first > 0 ? 10 : 0, textAlign:"center", flexShrink:0 }}>
                <span style={{ fontSize:9.5, color: step.phase === ph ? c.text : "var(--color-text-secondary)", fontWeight: step.phase === ph ? 500 : 400 }}>{ph}</span>
              </div>
            );
          })}
        </div>
      </div>

      {isLast && (
        <div style={{ marginTop:"1rem", padding:"0.9rem 1.1rem", background:"#dcfce7", border:"1.5px solid #86efac", borderRadius:"var(--border-radius-lg)", display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13, fontWeight:500, color:"#15803d" }}>Guide complete!</div>
            <div style={{ fontSize:11, color:"#166534" }}>Your page is live with the image embedded in Wiki.js.</div>
          </div>
          <button onClick={() => { setCur(0); setDone({}); }} style={{ padding:"6px 16px", fontSize:11, border:"1px solid #86efac", borderRadius:99, background:"white", color:"#15803d", cursor:"pointer" }}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}