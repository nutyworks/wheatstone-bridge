"use client";

import { useState } from "react";

export default function Home() {
  const [r1, setR1] = useState("100");
  const [r2, setR2] = useState("100");
  const [l3, setL3] = useState("500");

  const R1 = Number.parseFloat(r1);
  const L3 = Number.parseFloat(l3);
  const L4 = 1000 - L3;

  const origR2 = Number.parseFloat(r2);
  const R2 = (R1 * L4) / L3;

  return (
    <div>
      <div>
        R1:{" "}
        <input type="text" value={r1} onChange={(e) => setR1(e.target.value)} />
        Ω / R2:
        <input type="text" value={r2} onChange={(e) => setR2(e.target.value)} />
        Ω
      </div>
      <input
        type="range"
        name="resistance"
        min="1"
        max="999"
        value={l3}
        style={{
          width: "75%",
        }}
        onChange={(e) => setL3(e.target.value)}
      />
      <input type="text" value={l3} onChange={(e) => setL3(e.target.value)} />
      mm
      <div>
        기지저항 R1: {r1} Ω<br />
        미지저항 R2: {R2} Ω<br />
        L3: {L3} mm
        <br />
        L4: {L4} mm
        <br />
        L3/L4: {L3 / L4}
        <br />
        오차: {(Math.abs(origR2 - R2) / R2) * 100}%
      </div>
    </div>
  );
}
