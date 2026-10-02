import SplitWords from "../../components/SplitWords";
import { HiArrowUpRight } from "react-icons/hi2";

const points = [
  ["Verified", "Every home inspected before it goes live"],
  ["Transparent", "The price you see is the price you pay"],
  ["Human", "A real local agent from day one to keys"],
];

const DreamHome = () => {
  return (
    <section className="dream relative flex min-h-[80vh] items-center overflow-hidden py-28 text-paper">
      <div className="container-x">
        <p className="eyebrow reveal !text-brand-300">
          <span className="num">04</span> Your next chapter
        </p>
        <h2 className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.9] tracking-[-0.03em]">
          <SplitWords text="Find your" />
          <br />
          <span className="text-outline">
            <SplitWords text="dream home" delay={200} />
          </span>
        </h2>
        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid max-w-3xl gap-6 sm:grid-cols-3">
            {points.map(([t, d], i) => (
              <div key={t} className="reveal border-t border-paper/30 pt-4" style={{ "--d": `${300 + i * 120}ms` }}>
                <p className="font-display text-2xl italic">{t}</p>
                <p className="mt-1 text-sm text-paper/70">{d}</p>
              </div>
            ))}
          </div>
          <a href="#listings" className="reveal group flex items-center gap-4" style={{ "--d": "600ms" }}>
            <span className="grid h-24 w-24 place-items-center rounded-full bg-paper text-3xl text-ink transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-110">
              <HiArrowUpRight />
            </span>
            <span className="text-lg font-semibold">Start exploring</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DreamHome;
