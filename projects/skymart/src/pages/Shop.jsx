import axios from "axios";
import { ChevronDown, Search } from "lucide-react";
import { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/MartContext";


const Shop = () => {
  const {products, setProducts} = useContext(MyStore);
  const getProducts = async () => {
    let res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products[0]);
    setProducts(res.data.products);
  };

  function getCat(){
    let cat  = new Set();
    products.forEach((pro)=>{
      cat.add(pro.category)
      // cat.push(pro.category)
    })
    console.log(cat)
  }

  getCat()

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
          <span className="font-semibold text-[#C1622D]">{products.length}</span> products found
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-[#2E2B26] bg-[#141313] p-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={15}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8375]"
          />
          <input
            type="text"
            placeholder="Search products…"
            className="w-full rounded-full border border-[#2E2B26] bg-[#1A1917] py-2.5 pl-9 pr-4 text-sm text-[#F6F3EC] placeholder:text-[#8A8375] outline-none transition focus:border-[#2B6355] focus:ring-1 focus:ring-[#2B6355]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <select className="appearance-none rounded-full border border-[#2E2B26] bg-[#1A1917] py-2.5 pl-4 pr-9 text-sm text-[#F6F3EC] outline-none focus:border-[#2B6355] focus:ring-1 focus:ring-[#2B6355]">
              <option>All categories</option>
              <option>beauty</option>
              <option>fragrance</option>
              <option>furniture</option>
              <option>groceries</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A8375]" />
          </div>

          <div className="relative">
            <select className="appearance-none rounded-full border border-[#2E2B26] bg-[#1A1917] py-2.5 pl-4 pr-9 text-sm text-[#F6F3EC] outline-none focus:border-[#2B6355] focus:ring-1 focus:ring-[#2B6355]">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top rated</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A8375]" />
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center gap-4 border p-2">
  {products.map((product) => (
    <ProductCard key={product.title} product={product} />
  ))}
</div>
    </div>
  );
};

export default Shop;
