/* eslint-disable react/prop-types */
const WorkCard = ({ icon, title, description, active, index, setactive }) => {
  const on = active === index;
  return (
    <div className="reveal">
    <article
      data-step
      onClick={() => setactive(index)}
      className={`relative cursor-pointer rounded-[32px] border p-8 transition-all duration-700 ease-out md:p-10 ${
        on
          ? "border-transparent bg-brand text-white shadow-[0_40px_80px_-40px_rgba(2,85,149,0.8)]"
          : "border-ink/10 bg-paper text-ink hover:border-ink/25"
      }`}
    >
      {/* node on the rail */}
      <span
        className={`absolute -left-[37px] top-12 grid h-4 w-4 place-items-center rounded-full border-2 transition-colors duration-500 md:-left-[51px] ${
          on ? "border-brand bg-brand" : "border-ink/20 bg-paper"
        }`}
      >
        {on && <span className="absolute h-8 w-8 animate-ping rounded-full bg-brand/30" />}
      </span>

      <div className="flex items-start justify-between gap-6">
        <div className={`transition-transform duration-700 ease-out ${on ? "scale-110 text-white" : "text-brand"}`}>
          {icon()}
        </div>
        <span className={`font-display text-6xl font-light leading-none ${on ? "text-white/25" : "text-ink/10"}`}>
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-8 font-display text-3xl font-medium">{title}</h3>
      <div className={`grid transition-[grid-template-rows] duration-700 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr] md:grid-rows-[1fr]"}`}>
        <p className={`overflow-hidden pt-3 leading-relaxed ${on ? "text-white/80" : "text-ink/55"}`}>{description}</p>
      </div>
    </article>
    </div>
  );
};

export default WorkCard;
