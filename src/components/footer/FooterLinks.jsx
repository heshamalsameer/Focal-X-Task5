/* eslint-disable react/prop-types */
const FooterLinks = ({ title, arry }) => {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">{title}</h3>
      <ul className="space-y-3">
        {arry.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="group relative inline-block font-medium">
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
