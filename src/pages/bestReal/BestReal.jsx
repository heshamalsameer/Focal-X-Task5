/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef, useState } from "react";
import Header from "../../components/headerSection/Header";
import Styles from "./BestReal.module.css";
import { listings, categories, formatPrice } from "../../data";
import { TbView360Number } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";

// deal discount per listing (sample data)
const discount = (id) => [8, 12, 5, 15, 10, 7, 9, 6, 11][(id - 1) % 9];

const DealCard = ({ item, big, i, onOpen }) => {
  const off = discount(item.id);
  const old = Math.round(item.price / (1 - off / 100));
  return (
    <article
      className={`${Styles.deal} pop-in group relative overflow-hidden rounded-[32px] ${big ? "md:row-span-2" : ""}`}
      style={{ animationDelay: `${i * 100}ms` }}
    >
      <button onClick={() => onOpen(item)} data-cursor="view" className="absolute inset-0 h-full w-full" aria-label={`View ${item.title}`}>
        <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
      </button>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="pointer-events-none absolute left-5 top-5 flex gap-2">
        <span className="rounded-full border border-white/40 bg-ink/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Featured
        </span>
        <span className="flex items-center gap-1 rounded-full border border-white/40 bg-ink/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <TbView360Number className="text-sm" /> 3D
        </span>
      </div>
      <span className="pointer-events-none absolute right-5 top-5 grid h-16 w-16 rotate-12 place-items-center rounded-full bg-coral text-center text-xs font-bold leading-tight text-white transition-transform duration-700 ease-out group-hover:rotate-0">
        -{off}%
      </span>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
        <p className="text-sm text-white/70">{item.city} · {item.type}</p>
        <h3 className={`mt-1 font-display font-medium leading-tight ${big ? "text-4xl md:text-5xl" : "text-2xl"}`}>{item.title}</h3>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <span className="mr-2 text-sm text-white/50 line-through">{formatPrice(old)}</span>
            <span className="font-display text-2xl">{formatPrice(item.price)}</span>
          </div>
          <span className="grid h-12 w-12 translate-y-4 place-items-center rounded-full bg-paper text-xl text-ink opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <HiArrowUpRight />
          </span>
        </div>
      </div>
    </article>
  );
};

const BestReal = ({ onOpen }) => {
  const [tap, settap] = useState(0);
  const refs = useRef([]);
  const [pill, setPill] = useState({ x: 0, w: 0 });

  useLayoutEffect(() => {
    const u = () => {
      const el = refs.current[tap];
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth });
    };
    u();
    document.fonts?.ready.then(u);
    window.addEventListener("resize", u);
    return () => window.removeEventListener("resize", u);
  }, [tap]);

  const cat = categories[tap];
  const items = listings.filter((l) => l.category === cat).slice(0, 3);
  const fill = items.length < 3 ? listings.filter((l) => l.category !== cat).slice(0, 3 - items.length) : [];
  const shown = [...items, ...fill];

  return (
    <section id="deals" className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <Header
          num="05"
          eyebrow="Best real estate deals"
          title="Price drops"
          accent="worth moving for"
          description="Limited-time reductions across every property class. Tap any deal for the full story."
        />

        <div className="reveal no-scrollbar -mx-5 mb-10 overflow-x-auto px-5">
          <ul className="relative flex w-max gap-2 rounded-full bg-paper p-1.5" role="tablist">
            <span
              className="tab-pill absolute inset-y-1.5 left-0 rounded-full bg-ink"
              style={{ transform: `translateX(${pill.x}px)`, width: pill.w }}
              aria-hidden="true"
            />
            {categories.map((c, i) => (
              <li key={c} className="relative" ref={(el) => (refs.current[i] = el)}>
                <button
                  role="tab"
                  aria-selected={tap === i}
                  onClick={() => settap(i)}
                  className={`${tap === i ? Styles.link : ""} whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-500 ${
                    tap === i ? "text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {c} Property
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div key={tap} className="grid auto-rows-[280px] gap-6 md:grid-cols-[1.35fr_1fr] md:auto-rows-[300px]">
          {shown.map((item, i) => (
            <DealCard key={item.id} item={item} big={i === 0} i={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestReal;
