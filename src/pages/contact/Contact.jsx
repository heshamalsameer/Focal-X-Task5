/* eslint-disable react/prop-types */
import { useState } from "react";
import SplitWords from "../../components/SplitWords";
import { listings } from "../../data";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";

const init = { name: "", email: "", home: "", date: "" };

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-coral">{error}</span>}
  </label>
);

const inputCls =
  "w-full border-b border-paper/20 bg-transparent pb-3 text-lg text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-brand-300";

const Contact = () => {
  const [v, setV] = useState(init);
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const on = (e) => {
    setV((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErr((s) => ({ ...s, [e.target.name]: undefined }));
  };
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (v.name.trim().length < 2) x.name = "Tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) x.email = "Enter a valid email";
    if (!v.date) x.date = "Pick a day";
    setErr(x);
    if (Object.keys(x).length) return;
    setSent(true);
    setV(init);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/40 blur-3xl" />
      <div className="container-x relative grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow !text-brand-300 reveal">
            <span className="num">08</span> Book a tour
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]">
            <SplitWords text="Let's find" />
            <br />
            <em className="italic text-brand-300"><SplitWords text="your place." delay={150} /></em>
          </h2>
          <p className="reveal mt-6 max-w-md text-paper/60">
            Pick a home and a day — an agent will confirm within 24 hours. Prefer to talk? Call{" "}
            <a href="tel:+12025550142" className="text-paper underline decoration-brand-300 underline-offset-4">
              (202) 555-0142
            </a>
            .
          </p>
        </div>

        <form onSubmit={submit} noValidate className="reveal grid gap-8 sm:grid-cols-2" data-anim="right">
          <Field label="Your name" error={err.name}>
            <input name="name" value={v.name} onChange={on} className={inputCls} placeholder="Jane Cooper" />
          </Field>
          <Field label="Email" error={err.email}>
            <input name="email" type="email" value={v.email} onChange={on} className={inputCls} placeholder="jane@mail.com" />
          </Field>
          <Field label="Home">
            <select name="home" value={v.home} onChange={on} className={`${inputCls} cursor-pointer [&>option]:text-ink`}>
              <option value="">Any listing</option>
              {listings.map((l) => (
                <option key={l.id} value={l.title}>{l.title}</option>
              ))}
            </select>
          </Field>
          <Field label="Preferred day" error={err.date}>
            <input name="date" type="date" min={today} value={v.date} onChange={on} className={`${inputCls} [color-scheme:dark]`} />
          </Field>
          <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
            <button type="submit" className="btn-pill !bg-paper !text-ink">
              Request a tour
              <span className="ic !bg-ink !text-paper"><HiArrowUpRight /></span>
            </button>
            {sent && (
              <span className="pop-in flex items-center gap-2 text-brand-300">
                <IoCheckmarkCircle className="text-xl" /> Request sent — talk soon!
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
