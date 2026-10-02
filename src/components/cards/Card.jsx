/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { IoHeart, IoHeartOutline, IoBedOutline } from "react-icons/io5";
import { LuBath, LuRuler } from "react-icons/lu";
import { formatPrice } from "../../data";

function Card({ item, index = 0, fav, onFav, onOpen }) {
  const { img, title, price, address, beds, baths, area, type, tag } = item;
  return (
    <article className="pop-in group" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative overflow-hidden rounded-[28px]">
        <button
          onClick={() => onOpen(item)}
          data-cursor="view"
          className="block aspect-[4/3] w-full overflow-hidden"
          aria-label={`View ${title}`}
        >
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
        </button>
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <div className="flex gap-2">
            <span className="rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold backdrop-blur">{type}</span>
            {tag && (
              <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${tag === "Hot" ? "bg-coral" : "bg-brand"}`}>
                {tag}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => onFav(item.id)}
          aria-pressed={fav}
          aria-label={fav ? "Remove from saved" : "Save home"}
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
            fav ? "bg-coral text-white" : "bg-paper/90 text-ink"
          }`}
        >
          {fav ? <IoHeart className="pop-in" /> : <IoHeartOutline />}
        </button>
        {/* price tag slides up on hover */}
        <div className="absolute bottom-4 left-4 rounded-full bg-ink px-4 py-2 font-display text-lg text-paper transition-transform duration-500 ease-out md:translate-y-[160%] md:group-hover:translate-y-0">
          {formatPrice(price)}
        </div>
      </div>

      <div className="px-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-medium leading-tight transition-colors group-hover:text-brand">
            {title}
          </h3>
          <span className="shrink-0 pt-1 font-semibold text-brand md:hidden">{formatPrice(price)}</span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/60">
          <CiLocationOn className="shrink-0 text-base" /> {address}
        </p>
        <div className="mt-4 flex gap-5 border-t border-ink/10 pt-4 text-sm font-medium text-ink/80">
          <span className="flex items-center gap-1.5"><IoBedOutline className="text-brand" /> {beds} Beds</span>
          <span className="flex items-center gap-1.5"><LuBath className="text-brand" /> {baths} Baths</span>
          <span className="flex items-center gap-1.5"><LuRuler className="text-brand" /> {area} m²</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
