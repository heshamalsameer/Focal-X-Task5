/* eslint-disable react/prop-types */
import { useState } from "react";
import hero from "./../assets/imgs/hero.png";
import location from "./../assets/imgs/location.png";
import dollar from "./../assets/imgs/dollar.png";
import house from "./../assets/imgs/house.png";
import HeroCard from "./HeroCard";
import SplitWords from "./SplitWords";
import { listings } from "../data";
import { useCountUp, useInView, useScrollY } from "../hooks/useReveal";
import { IoSearch, IoStar } from "react-icons/io5";
import { HiArrowDown } from "react-icons/hi2";

const cities = ["Any", ...Array.from(new Set(listings.map((l) => l.city)))];
const types = ["Any", ...Array.from(new Set(listings.map((l) => l.type)))];
const prices = [
  { value: "0", label: "Any price" },
  { value: "300000", label: "Up to $300k" },
  { value: "500000", label: "Up to $500k" },
  { value: "800000", label: "Up to $800k" },
];

const Stat = ({ end, suffix, label, i }) => {
  const [ref, seen] = useInView(0.6);
  const n = useCountUp(end, seen, 2000);
  return (
    <div ref={ref} className="reveal" style={{ "--d": `${900 + i * 120}ms` }}>
      <div className="font-display text-4xl font-medium tabular-nums md:text-5xl">
        {n.toLocaleString()}
        <span className="text-coral">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
};

const Hero = ({ onSearch }) => {
  const y = useScrollY();
  const [q, setQ] = useState({ city: "Any", type: "Any", price: "0" });
  const set = (k, v) => setQ((s) => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q);
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-cream pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-brand-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow reveal">
            <span className="num">01</span> Real estate, reimagined
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.03em]">
            <SplitWords text="Discover a place" play delay={200} />
            <br />
            <SplitWords text="you'll" play delay={420} />{" "}
            <em className="font-display italic text-brand">
              <SplitWords text="love" play delay={500} />
            </em>{" "}
            <SplitWords text="to live" play delay={560} />
          </h1>
          <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-ink/70" style={{ "--d": "700ms" }}>
            Handpicked homes, transparent pricing and local agents who actually pick up the phone.
            Your next chapter starts with a single search.
          </p>

          {/* search panel */}
          <form
            onSubmit={submit}
            className="reveal mt-10 flex flex-col divide-y divide-ink/10 rounded-[28px] bg-paper p-2 shadow-[0_30px_60px_-30px_rgba(14,23,38,0.35)] md:flex-row md:items-center md:divide-x md:divide-y-0 md:rounded-full"
            style={{ "--d": "800ms" }}
          >
            <HeroCard img={location} title="Location" name="city" value={q.city} onChange={set}
              options={cities.map((c) => ({ value: c, label: c === "Any" ? "Anywhere" : c }))} />
            <HeroCard img={dollar} title="Price" name="price" value={q.price} onChange={set} options={prices} />
            <HeroCard img={house} title="Type" name="type" value={q.type} onChange={set}
              options={types.map((t) => ({ value: t, label: t === "Any" ? "Any type" : t }))} />
            <div className="p-2 md:pl-2">
              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 font-semibold text-white transition-colors hover:bg-ink md:w-14 md:px-0"
                aria-label="Search homes"
              >
                <IoSearch className="text-xl transition-transform duration-500 ease-out group-hover:scale-110" />
                <span className="md:hidden">Search</span>
              </button>
            </div>
          </form>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            <Stat end={1200} suffix="+" label="Homes sold" i={0} />
            <Stat end={98} suffix="%" label="Happy clients" i={1} />
            <Stat end={24} suffix="h" label="Avg. reply time" i={2} />
          </div>
        </div>

        {/* visual */}
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="reveal" data-anim="clip" style={{ "--d": "300ms" }}>
          <div className="clip relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[40px] bg-brand">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <img
              src={hero}
              alt="Modern apartment building"
              className="absolute bottom-0 left-1/2 w-[135%] max-w-none -translate-x-[40%]"
              style={{ transform: `translate(-40%, ${Math.min(y * 0.12, 80)}px)` }}
            />
          </div>
          </div>

          {/* rotating badge */}
          <a
            href="#listings"
            className="absolute -left-6 top-10 grid h-32 w-32 place-items-center rounded-full bg-paper shadow-xl md:-left-12"
            aria-label="Explore listings"
          >
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
              <defs>
                <path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-ink text-[10.5px] font-semibold uppercase tracking-[0.3em]">
                <textPath href="#circ">Explore • Homes • Flora • </textPath>
              </text>
            </svg>
            <HiArrowDown className="text-2xl text-brand" />
          </a>

          {/* floating chips */}
          <div className="float-y absolute -right-2 top-1/3 rounded-2xl bg-paper/90 px-4 py-3 shadow-xl backdrop-blur md:-right-8">
            <div className="flex items-center gap-1 text-coral">
              {Array.from({ length: 5 }).map((_, i) => (
                <IoStar key={i} />
              ))}
            </div>
            <p className="mt-1 text-sm font-semibold">4.9 from 2,300 reviews</p>
          </div>
          <div className="float-y absolute -left-4 bottom-12 flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-paper shadow-xl [animation-delay:-3s] md:-left-10">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-coral" />
            </span>
            <span className="text-sm font-medium">38 new homes this week</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
