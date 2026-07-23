import axios from "axios";
import {CarTaxiFront, ChevronDown, Search, X} from "lucide-react";
import {useContext, useEffect, useRef, useState} from "react";
import Pill from "../components/Pill";
import ProductCard from "../components/ProductCard";
import {MyStore} from "../context/MartContext";

const Shop = () => {
  const {products, setProducts} = useContext(MyStore);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("allCategories");
  const [sortVal, setSortVal] = useState("feat");

  const productsData = useRef([]);

  const getProducts = async () => {
    let res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
    productsData.current = [...res.data.products];
    console.log("productsData", productsData);
    setLoading(false);
  };

  const filteredProducts =
    category === "allCategories"
      ? products
      : products.filter((p) => p.category === category);

  const handileSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const searchedItems = productsData.current.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase()),
    );
    setProducts(searchedItems);
  };

  const sortProducts = (e) => {
    const value = e.target.value;
    setSortVal(value);

    let sorted = [...filteredProducts];
    if (value === "lowToHigh") sorted.sort((a, b) => a.price - b.price);
    else if (value === "highToLow") sorted.sort((a, b) => b.price - a.price);
    else if (value === "topRated") sorted.sort((a, b) => b.rating - a.rating);
    else if (value === "lowRated") sorted.sort((a, b) => a.rating - b.rating);
    else if (value === "feat") sorted = [...productsData.current];

    setProducts(sorted);
  };

  const handleClear = () => {
    setCategory("allCategories");
    setSearch("");
    setSortVal("feat");
    setProducts(productsData.current);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="lg:w-[80%] w-full mx-auto px-4">
      <div className=" mx-auto bg-black py-8">
        {/* Heading */}
        <div className="mb-5">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F6F3EC]">
            All products
          </h3>
          <p className="mt-1 text-sm text-[#8A8375]">
            <span className="font-semibold text-[#C1622D]">
              {products.length}
            </span>{" "}
            products found
          </p>
        </div>

        <div className="rounded-2xl border border-[#2E2B26] bg-[#141313] p-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8375]"
              />
              <input
                onChange={handileSearch}
                value={search}
                type="text"
                placeholder="Search products…"
                className="w-full rounded-full border border-[#2E2B26] bg-[#1A1917] py-2.5 pl-9 pr-4 text-sm text-[#F6F3EC] placeholder:text-[#8A8375] outline-none transition focus:border-[#2B6355] focus:ring-1 focus:ring-[#2B6355]"
              />
            </div>

            <div className="flex gap-2">
              {/* category */}
              <div className="relative">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="appearance-none rounded-full border border-[#2E2B26] bg-[#1A1917] py-2.5 pl-4 pr-9 text-sm text-[#F6F3EC] outline-none focus:border-[#2B6355] focus:ring-1 focus:ring-[#2B6355]"
                >
                  <option value="allCategories">All categories</option>
                  <option value="beauty">beauty</option>
                  <option value="fragrance">fragrance</option>
                  <option value="furniture">furniture</option>
                  <option value="groceries">groceries</option>
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A8375]"
                />
              </div>

              {/* sort */}
              <div className="relative">
                <select
                  onChange={sortProducts}
                  value={sortVal}
                  className="appearance-none rounded-full border border-[#2E2B26] bg-[#1A1917] py-2.5 pl-4 pr-9 text-sm text-[#F6F3EC] outline-none focus:border-[#2B6355] focus:ring-1 focus:ring-[#2B6355]"
                >
                  <option value="feat">Featured</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                  <option value="topRated">Top rated</option>
                  <option value="lowRated">low Rated</option>
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A8375]"
                />
              </div>

              {/* clear */}
              {(search ||
                category !== "allCategories" ||
                sortVal !== "feat") && (
                <button
                  onClick={handleClear}
                  className="flex items-center gap-1 rounded-full border border-[#4A2323] bg-[#1A1213] px-4 py-2.5 text-sm text-[#E05252] outline-none transition hover:bg-[#241717]"
                >
                  <X size={14} />
                  Clear
                </button>
              )}
            </div>
          </div>

          {(search.trim() ||
            category !== "allCategories" ||
            sortVal !== "feat") && (
            <div className="flex gap-2 flex-wrap">
              {search.trim() && (
                <Pill
                  value={search}
                  onClear={() => setSearch("")}
                />
              )}
              {category !== "allCategories" && (
                <Pill
                  value={category}
                  onClear={() => setCategory("allCategories")}
                />
              )}
              {sortVal !== "feat" && (
                <Pill value={sortVal} onClear={() => setSortVal("feat")} />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-4   p-2">
        {loading ? (
          "loading...."
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <div className="no-products">
                <p>No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-4   p-2">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
