/* eslint-disable react/prop-types */
// Splits text into masked words that slide up when `.words` becomes visible.
const SplitWords = ({ text, className = "", delay = 0, as: Tag = "span", play = false }) => {
  const words = text.split(" ");
  return (
    <Tag className={`words ${play ? "play" : ""} ${className}`} style={{ "--d": `${delay}ms` }} aria-label={text}>
      {words.map((w, i) => (
        <span className="w" key={i} aria-hidden="true">
          <span style={{ "--i": i }}>{w}</span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
};

export default SplitWords;
