/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import Header from "../../components/headerSection/Header";
import { formatPrice } from "../../data";

const Slider = ({ label, value, min, max, step, onChange, display }) => {
  const p = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-sm font-semibold text-ink/70">{label}</span>
        <span className="font-display text-2xl tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        className="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        style={{ "--p": `${p}%` }}
      />
    </label>
  );
};

// Smoothly tween a displayed number towards its target
const useTween = (target) => {
  const [v, setV] = useState(target);
  useEffect(() => {
    let raf;
    const from = v;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min((t - t0) / 500, 1);
      setV(from + (target - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return v;
};

const Mortgage = ({ preset }) => {
  const [price, setPrice] = useState(450000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  // price pushed in from a listing's "Plan mortgage" button
  useEffect(() => {
    if (preset?.price) setPrice(Math.min(Math.max(preset.price, 100000), 2000000));
  }, [preset]);

  const r = useMemo(() => {
    const loan = price * (1 - down / 100);
    const m = rate / 100 / 12;
    const n = years * 12;
    const monthly = m === 0 ? loan / n : (loan * m) / (1 - Math.pow(1 + m, -n));
    const total = monthly * n;
    return { loan, monthly, total, interest: total - loan, downAmt: price - loan };
  }, [price, down, rate, years]);

  const monthly = useTween(r.monthly);
  const C = 2 * Math.PI * 70;
  const principalShare = r.loan / r.total;

  return (
    <section id="calculator" className="bg-paper py-24 lg:py-32">
      <div className="container-x">
        <Header
          num="06"
          eyebrow="Mortgage planner"
          title="Know your number"
          accent="before you fall in love"
          description="Move the sliders to see your estimated monthly payment. Open any listing and hit “Plan mortgage” to load its price here."
        />

        <div className="reveal grid overflow-hidden rounded-[36px] border border-ink/10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-9 bg-paper p-7 md:p-12">
            <Slider label="Home price" value={price} min={100000} max={2000000} step={5000} onChange={setPrice} display={formatPrice(price)} />
            <Slider label="Down payment" value={down} min={5} max={60} step={1} onChange={setDown} display={`${down}% · ${formatPrice(r.downAmt)}`} />
            <Slider label="Interest rate" value={rate} min={2} max={10} step={0.1} onChange={setRate} display={`${rate.toFixed(1)}%`} />
            <div>
              <span className="mb-3 block text-sm font-semibold text-ink/70">Loan term</span>
              <div className="grid grid-cols-3 gap-2">
                {[15, 20, 30].map((y) => (
                  <button key={y} className="chip py-3" aria-pressed={years === y} onClick={() => setYears(y)}>
                    {y} years
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-ink p-10 text-paper md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
            <div className="relative">
              <svg viewBox="0 0 160 160" className="donut h-56 w-56 -rotate-90">
                <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(251,249,244,0.12)" strokeWidth="14" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="#5A8FC4" strokeWidth="14" strokeLinecap="round"
                  strokeDasharray={`${C * principalShare} ${C}`} />
                <circle cx="80" cy="80" r="70" fill="none" stroke="#F26B4A" strokeWidth="14" strokeLinecap="round"
                  strokeDasharray={`${C * (1 - principalShare) - 6} ${C}`} strokeDashoffset={-C * principalShare - 3} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs uppercase tracking-[0.2em] text-paper/60">Monthly</span>
                <span className="font-display text-4xl tabular-nums">{formatPrice(monthly)}</span>
              </div>
            </div>
            <dl className="relative grid w-full max-w-sm gap-3 text-sm">
              {[
                ["#5A8FC4", "Loan amount", r.loan],
                ["#F26B4A", "Total interest", r.interest],
                ["transparent", "Total paid", r.total + r.downAmt],
              ].map(([c, l, v]) => (
                <div key={l} className="flex items-center justify-between border-b border-paper/10 pb-3">
                  <dt className="flex items-center gap-2 text-paper/70">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: c, border: c === "transparent" ? "1px solid rgba(251,249,244,.5)" : 0 }} />
                    {l}
                  </dt>
                  <dd className="font-semibold tabular-nums">{formatPrice(v)}</dd>
                </div>
              ))}
            </dl>
            <p className="relative text-center text-xs text-paper/50">Estimate only — excludes taxes, insurance and fees.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mortgage;
