/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import Card from "../../components/cards/Card";
import Header from "../../components/headerSection/Header";
import { listings, formatPrice } from "../../data";
import { IoClose, IoHeart } from "react-icons/io5";

const types = ["All", ...Array.from(new Set(listings.map((l) => l.type)))];

const MostTrending = ({ search, clearSearch, favs, toggleFav, onOpen }) => {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("trending");
  const [savedOnly, setSavedOnly] = useState(false);

  const list = useMemo(() => {
    let l = listings.filter((x) => (type === "All" ? true : x.type === type));
    if (search?.city && search.city !== "Any") l = l.filter((x) => x.city === search.city);
    if (search?.type && search.type !== "Any") l = l.filter((x) => x.type === search.type);
    if (search?.price && +search.price > 0) l = l.filter((x) => x.price <= +search.price);
    if (savedOnly) l = l.filter((x) => favs.includes(x.id));
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "new") l = [...l].sort((a, b) => b.year - a.year);
    return l;
  }, [type, sort, savedOnly, search, favs]);

  const activeSearch = search && Object.entries(search).filter(([, v]) => v && v !== "Any" && v !== "0");

  return (
    <section id="listings" className="bg-paper py-24 lg:py-32">
      <div className="container-x">
        <Header
          num="03"
          eyebrow="Most trending"
          title="Homes people"
          accent="can't stop saving"
          description="Fresh, verified and in demand. Filter by type, sort by price, and tap the heart to build your shortlist."
        />

        {/* toolbar */}
        <div className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:px-0">
            {types.map((t) => (
              <button key={t} className="chip shrink-0" aria-pressed={type === t} onClick={() => setType(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="chip flex items-center gap-2"
              aria-pressed={savedOnly}
              onClick={() => setSavedOnly((s) => !s)}
            >
              <IoHeart className={savedOnly ? "text-coral" : "text-ink/40"} /> Saved ({favs.length})
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="chip cursor-pointer bg-transparent outline-none"
              aria-label="Sort listings"
            >
              <option value="trending">Sort: Trending</option>
              <option value="low">Price: Low to high</option>
              <option value="high">Price: High to low</option>
              <option value="new">Newest built</option>
            </select>
          </div>
        </div>

        {activeSearch?.length > 0 && (
          <div className="pop-in mb-8 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted">Search:</span>
            {activeSearch.map(([k, v]) => (
              <span key={k} className="rounded-full bg-brand-100 px-3 py-1 font-medium text-brand">
                {k === "price" ? `≤ ${formatPrice(+v)}` : v}
              </span>
            ))}
            <button onClick={clearSearch} className="flex items-center gap-1 rounded-full px-3 py-1 font-medium text-coral hover:bg-coral/10">
              <IoClose /> Clear
            </button>
          </div>
        )}

        <div key={`${type}-${sort}-${savedOnly}-${JSON.stringify(search)}`} className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <Card key={item.id} item={item} index={i} fav={favs.includes(item.id)} onFav={toggleFav} onOpen={onOpen} />
          ))}
        </div>

        {list.length === 0 && (
          <div className="pop-in rounded-[32px] border border-dashed border-ink/20 py-20 text-center">
            <p className="font-display text-3xl">No homes match — yet.</p>
            <p className="mt-2 text-ink/60">Try widening your filters or clearing the search.</p>
            <button
              onClick={() => {
                setType("All");
                setSavedOnly(false);
                clearSearch?.();
              }}
              className="btn-ghost mt-6"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MostTrending;
