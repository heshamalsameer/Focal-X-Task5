/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import NavItems from "./NavItems";
import Login from "./Login";
import { IoHeartOutline } from "react-icons/io5";

const NavBar = ({ logo, items, btn, favCount = 0 }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(items[0]?.id);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const [bump, setBump] = useState(false);

  // hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > 400 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  // little bounce on the heart when favourites change
  useEffect(() => {
    if (!favCount) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 500);
    return () => clearTimeout(t);
  }, [favCount]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : ""
        }`}
      >
        <div className="container-x pt-4">
          <nav
            className={`flex h-[68px] items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ease-out ${
              scrolled || open ? "bg-paper/80 shadow-[0_10px_40px_-12px_rgba(14,23,38,0.25)] backdrop-blur-xl" : ""
            }`}
          >
            <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src={logo} alt="Flora" className="h-9 w-auto" />
              <span className="font-display text-2xl font-semibold tracking-tight">Flora</span>
            </a>

            <div className="hidden lg:block">
              <NavItems items={items} active={active} />
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#listings"
                className="relative grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-paper text-xl transition-colors hover:border-ink/30"
                aria-label={`${favCount} saved homes`}
              >
                <IoHeartOutline className={bump ? "scale-125 text-coral transition-transform" : "transition-transform"} />
                {favCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[10px] font-bold text-white pop-in">
                    {favCount}
                  </span>
                )}
              </a>
              <div className="hidden sm:block">
                <Login btn={btn} />
              </div>
              <button
                className="relative grid h-11 w-11 place-items-center rounded-full bg-ink text-paper lg:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span className={`absolute h-[2px] w-5 bg-current transition-transform duration-500 ease-out ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
                <span className={`absolute h-[2px] w-5 bg-current transition-transform duration-500 ease-out ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-[clip-path] duration-700 ease-out lg:hidden ${
          open ? "[clip-path:circle(150%_at_100%_0)]" : "[clip-path:circle(0%_at_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex h-full flex-col justify-between pb-10 pt-32">
          <NavItems items={items} active={active} mobile onNavigate={() => setOpen(false)} />
          <div className="flex items-center justify-between">
            <Login btn={btn} onClick={() => setOpen(false)} />
            <span className="text-sm text-muted">hello@flora.homes</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
