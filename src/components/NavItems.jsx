/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef, useState } from "react";

// Desktop: pill links with a sliding highlight. Mobile: large serif list.
const NavItems = ({ items, active, onNavigate, mobile = false }) => {
  const refs = useRef({});
  const [pill, setPill] = useState({ x: 0, w: 0, o: 0 });

  useLayoutEffect(() => {
    if (mobile) return;
    const update = () => {
      const el = refs.current[active];
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth, o: 1 });
      else setPill((p) => ({ ...p, o: 0 }));
    };
    update();
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active, mobile]);

  if (mobile) {
    return (
      <ul className="flex flex-col">
        {items.map((it, i) => (
          <li key={it.id} className="border-b border-ink/10" style={{ "--i": i }}>
            <a
              href={`#${it.id}`}
              onClick={onNavigate}
              className={`group flex items-baseline justify-between py-4 font-display text-4xl transition-colors ${
                active === it.id ? "text-brand" : "text-ink"
              }`}
            >
              {it.label}
              <span className="font-sans text-xs text-muted transition-transform duration-500 ease-out group-hover:-translate-x-2">
                0{i + 1}
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="relative flex items-center gap-1 rounded-full bg-ink/[0.04] p-1">
      <span
        className="tab-pill absolute inset-y-1 left-0 rounded-full bg-paper shadow-sm"
        style={{ transform: `translateX(${pill.x}px)`, width: pill.w, opacity: pill.o }}
        aria-hidden="true"
      />
      {items.map((it) => (
        <li key={it.id} className="relative" ref={(el) => (refs.current[it.id] = el)}>
          <a
            href={`#${it.id}`}
            className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === it.id ? "text-ink" : "text-ink/60 hover:text-ink"
            }`}
          >
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
