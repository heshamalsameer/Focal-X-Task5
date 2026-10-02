import { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import FooterLinks from "../../components/footer/FooterLinks";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

const links = [
  { label: "Listings", href: "#listings" },
  { label: "Best deals", href: "#deals" },
  { label: "Mortgage planner", href: "#calculator" },
  { label: "Book a tour", href: "#contact" },
];
const about = [
  { label: "How it works", href: "#about" },
  { label: "Client stories", href: "#stories" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
];

const Footer = () => {
  const [ok, setOk] = useState(false);
  return (
    <footer className="bg-paper pt-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
        <div className="max-w-sm">
          <img src={Logo} alt="Flora" className="h-12 w-auto" />
          <p className="mt-6 text-ink/60">
            Flora helps people find homes they love — with honest listings, fair deals and real humans at every step.
          </p>
          <ul className="mt-6 flex gap-3">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <li key={i}>
                <a href="#" aria-label="Social link" className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterLinks title="Service" arry={links} />
        <FooterLinks title="About" arry={about} />
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Our location</h3>
          <p className="font-medium">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOk(true);
            }}
            className="mt-8"
          >
            <label className="mb-3 block text-sm text-ink/60">New listings, once a week</label>
            <div className="flex items-center border-b border-ink/20 pb-2 focus-within:border-brand">
              <input type="email" required placeholder="Your email" className="w-full bg-transparent outline-none" />
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper transition-colors hover:bg-brand" aria-label="Subscribe">
                <HiArrowRight />
              </button>
            </div>
            {ok && <p className="pop-in mt-2 text-sm text-brand">You’re in. Welcome to Flora!</p>}
          </form>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="container-x mt-16 overflow-hidden">
        <div className="reveal" data-anim="clip">
          <p className="clip select-none text-center font-display text-[24vw] font-semibold leading-[0.8] tracking-[-0.05em] text-ink/[0.06]">
            Flora
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
