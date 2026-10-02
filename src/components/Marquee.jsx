/* eslint-disable react/prop-types */
import { PiSparkleFill } from "react-icons/pi";

const Row = ({ items, reverse, speed }) => (
  <div className="marquee-wrap overflow-hidden">
    <div className="marquee" style={{ "--speed": speed, animationDirection: reverse ? "reverse" : "normal" }}>
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
          {items.map((t) => (
            <span key={t + k} className="flex items-center gap-8 px-8">
              <span className="whitespace-nowrap">{t}</span>
              <PiSparkleFill className="text-[0.5em] text-coral" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Marquee = () => (
  <section aria-label="Cities we cover" className="relative z-10 -my-6 rotate-[-2deg] bg-ink py-6 text-paper">
    <div className="font-display text-4xl italic md:text-6xl">
      <Row items={["California", "Austin", "Chicago", "Seattle", "Miami", "New York", "Vermont", "Oregon"]} speed="45s" />
    </div>
    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-paper/60">
      <Row reverse items={["Verified listings", "Zero hidden fees", "Virtual tours", "Local agents", "Mortgage help", "Fast closing"]} speed="35s" />
    </div>
  </section>
);

export default Marquee;
