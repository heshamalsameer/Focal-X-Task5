import { useCallback, useEffect, useState } from "react";
import Header from "../../components/headerSection/Header";
import { IoStar } from "react-icons/io5";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

// Sample client stories — replace with real reviews.
const stories = [
  { name: "Leslie Alexander", role: "Bought in Austin", color: "#025595", text: "We toured five homes in one Saturday and signed on the sixth. Flora made a scary decision feel genuinely exciting." },
  { name: "Darnell Steward", role: "First-time buyer", color: "#F26B4A", text: "The mortgage planner told me exactly what I could afford before I fell for anything. No surprises at closing — not one." },
  { name: "Cody Fisher", role: "Relocated to Seattle", color: "#0E1726", text: "I bought from another continent using virtual tours. Our agent sent videos of the street at night so we’d know how it felt." },
  { name: "Kristin Watson", role: "Sold & upsized", color: "#5A8FC4", text: "They sold our old place and found the new one in the same month. Honest advice, fast replies and zero pressure." },
];

const Stories = () => {
  const [order, setOrder] = useState(stories.map((_, i) => i));
  const [leaving, setLeaving] = useState(false);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setLeaving(false);
    }, 450);
  }, [leaving]);
  const prev = () => setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const current = order[0];

  return (
    <section id="stories" className="overflow-hidden bg-cream py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Header stack num="07" eyebrow="Client stories" title="Keys handed," accent="stories told" />
          <p className="reveal -mt-6 max-w-sm text-ink/60">
            Over 1,200 families have moved with Flora. Here are a few of their words.
          </p>
          <div className="reveal mt-10 flex items-center gap-6">
            <button onClick={prev} className="grid h-14 w-14 place-items-center rounded-full border border-ink/15 text-xl transition-colors hover:bg-ink hover:text-paper" aria-label="Previous story">
              <HiArrowLeft />
            </button>
            <button onClick={next} className="grid h-14 w-14 place-items-center rounded-full bg-ink text-xl text-paper transition-colors hover:bg-brand" aria-label="Next story">
              <HiArrowRight />
            </button>
            <span className="font-display text-xl tabular-nums">
              0{current + 1}
              <span className="text-ink/30"> / 0{stories.length}</span>
            </span>
          </div>
        </div>

        {/* card deck */}
        <div
          className="reveal relative mx-auto h-[420px] w-full max-w-[520px]"
          data-anim="zoom"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {order.map((idx, pos) => {
            const s = stories[idx];
            const top = pos === 0;
            const out = top && leaving;
            return (
              <figure
                key={s.name}
                onClick={top ? next : undefined}
                className={`deck-card absolute inset-0 flex cursor-pointer flex-col justify-between rounded-[36px] border border-ink/10 bg-paper p-8 shadow-[0_30px_60px_-30px_rgba(14,23,38,0.35)] md:p-10`}
                style={{
                  zIndex: stories.length - pos,
                  transform: out
                    ? "translate(60%, -10%) rotate(18deg)"
                    : `translate(${pos * 18}px, ${pos * -18}px) rotate(${pos * 3}deg) scale(${1 - pos * 0.04})`,
                  opacity: out ? 0 : pos > 2 ? 0 : 1,
                  filter: pos ? "saturate(0.6)" : "none",
                }}
              >
                <div>
                  <div className="flex gap-1 text-coral">
                    {Array.from({ length: 5 }).map((_, k) => <IoStar key={k} />)}
                  </div>
                  <blockquote className="mt-6 font-display text-2xl leading-snug md:text-[1.8rem]">
                    “{s.text}”
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full font-display text-xl text-white" style={{ background: s.color }}>
                    {s.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span>
                    <strong className="block">{s.name}</strong>
                    <span className="text-sm text-muted">{s.role}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stories;
