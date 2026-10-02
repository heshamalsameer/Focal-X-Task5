import { useEffect, useRef, useState } from "react";

// Soft-follow cursor: grows over links, turns into a "View" bubble over [data-cursor="view"].
const Cursor = () => {
  const dot = useRef(null);
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    let x = -100, y = -100, cx = -100, cy = -100, raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target.closest?.("[data-cursor], a, button, input, select, label");
      setMode(t ? (t.dataset.cursor === "view" ? "is-view" : "is-hover") : "");
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={dot} className={`cursor-dot ${mode}`} aria-hidden="true">
      <span>View</span>
    </div>
  );
};

export default Cursor;
