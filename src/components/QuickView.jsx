/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoClose, IoHeart, IoHeartOutline, IoBedOutline, IoCalendarOutline } from "react-icons/io5";
import { LuBath, LuRuler } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { HiArrowUpRight } from "react-icons/hi2";
import { formatPrice } from "../data";

const QuickView = ({ item, onClose, fav, onFav, onCalc }) => {
  useEffect(() => {
    if (!item) return;
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;
  const est = Math.round((item.price * 0.8 * (0.065 / 12)) / (1 - Math.pow(1 + 0.065 / 12, -360)));

  return (
    <div className="fade-in fixed inset-0 z-[80] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm md:items-center md:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <div
        className="pop-in relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[32px] bg-paper md:grid-cols-[1.1fr_1fr] md:rounded-[32px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-paper/90 text-xl shadow transition-transform duration-500 hover:rotate-90" aria-label="Close">
          <IoClose />
        </button>
        <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
          <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold backdrop-blur">
            {item.category} · {item.type}
          </span>
        </div>
        <div className="flex flex-col p-7 md:p-10">
          <p className="eyebrow">Listing #{String(item.id).padStart(3, "0")}</p>
          <h3 className="mt-3 font-display text-4xl font-medium leading-tight">{item.title}</h3>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-ink/60">
            <CiLocationOn className="text-base" /> {item.address}
          </p>
          <div className="mt-6 font-display text-5xl text-brand">{formatPrice(item.price)}</div>
          <p className="mt-1 text-sm text-ink/60">
            ≈ {formatPrice(est)}/mo with 20% down · 30 yrs · 6.5%
          </p>
          <div className="mt-6 grid grid-cols-4 gap-3 text-center">
            {[
              [IoBedOutline, item.beds, "Beds"],
              [LuBath, item.baths, "Baths"],
              [LuRuler, `${item.area}`, "m²"],
              [IoCalendarOutline, item.year, "Built"],
            ].map(([Icon, v, l]) => (
              <div key={l} className="rounded-2xl bg-cream px-2 py-4">
                <Icon className="mx-auto text-xl text-brand" />
                <div className="mt-2 font-semibold">{v}</div>
                <div className="text-xs text-muted">{l}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-ink/70">
            A light-filled {item.type.toLowerCase()} in {item.city} with a flexible layout, quality finishes and easy access to
            schools, parks and transport. Available for viewing this week.
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            <a href="#contact" onClick={onClose} className="btn-pill">
              Book a tour
              <span className="ic"><HiArrowUpRight /></span>
            </a>
            <button onClick={() => onCalc(item.price)} className="chip">
              Plan mortgage
            </button>
            <button
              onClick={() => onFav(item.id)}
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors ${fav ? "border-coral bg-coral text-white" : "border-ink/15"}`}
              aria-label="Save home"
              aria-pressed={fav}
            >
              {fav ? <IoHeart /> : <IoHeartOutline />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
