/* eslint-disable react/prop-types */
import SplitWords from "../SplitWords";

// Editorial section header: numbered eyebrow + big serif title on the left, description on the right.
const Header = ({ num, eyebrow, title, accent, description, light = false, stack = false, children }) => {
  return (
    <div className={`mb-14 grid gap-6 ${stack ? "" : "md:grid-cols-[1.3fr_1fr] md:items-end"}`}>
      <div>
        <p className={`eyebrow reveal ${light ? "!text-brand-300" : ""}`}>
          {num && <span className="num">{num}</span>} {eyebrow}
        </p>
        <h2 className={`h-section mt-4 ${light ? "!text-paper" : ""}`}>
          <SplitWords text={title} />
          {accent && (
            <>
              {" "}
              <em className={light ? "!text-brand-300" : ""}>
                <SplitWords text={accent} delay={200} />
              </em>
            </>
          )}
        </h2>
      </div>
      <div className="reveal md:pb-3" style={{ "--d": "200ms" }}>
        {description && (
          <p className={`max-w-md text-base leading-relaxed ${light ? "text-paper/70" : "text-ink/60"}`}>{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Header;
