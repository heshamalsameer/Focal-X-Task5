/* eslint-disable react/prop-types */
// A labelled select used inside the hero search panel.
const HeroCard = ({ img, title, value, options, onChange, name }) => {
  return (
    <label className="group flex min-w-0 flex-1 items-center gap-3 px-4 py-3 md:px-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-100 transition-transform duration-500 ease-out group-hover:rotate-[-12deg]">
        <img src={img} alt="" className="w-5" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{title}</span>
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="-ml-1 w-full cursor-pointer appearance-none bg-transparent pr-1 text-[15px] py-0.5 font-semibold text-ink outline-none"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
};

export default HeroCard;
