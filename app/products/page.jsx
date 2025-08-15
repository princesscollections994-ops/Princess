
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMemo, useState } from "react";
import { seedProducts, formatKES } from "@/lib/products";
import { Heart, Search, ShoppingBag } from "lucide-react";

export default function ProductsPage(){
  const [q,setQ] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const items = useMemo(()=>{
    const qq = q.trim().toLowerCase();
    if(!qq) return seedProducts;
    return seedProducts.filter(p=>[p.name,p.tag,p.desc].some(t=>t.toLowerCase().includes(qq)));
  },[q]);

  const toggle = (id)=> setWishlist(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id]);

  return (
    <div>
      <Header/>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-black text-indigo-900 md:text-3xl">Products</h1>
          <div className="relative w-64 max-w-full">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-indigo-800/60" />
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products, tags..." className="w-full rounded-xl border border-black/10 bg-white px-10 py-2 outline-none ring-fuchsia-500/40 focus:ring-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map(p=> (
            <div key={p.id} className="group overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5 backdrop-blur">
              <div className="relative">
                <img src={p.img} alt={p.name} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
                <button onClick={()=>toggle(p.id)} className={`absolute right-3 top-3 rounded-full bg-white/90 p-2 ${wishlist.includes(p.id) ? "text-pink-600" : "text-indigo-700"}`}>
                  <Heart className="h-5 w-5"/>
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-bold tracking-tight text-indigo-900">{p.name}</div>
                    <div className="text-xs text-indigo-800/60">{p.tag}</div>
                  </div>
                  <div className="text-sm font-extrabold text-fuchsia-700">{formatKES(p.price)}</div>
                </div>
                <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-800 px-3 py-2 font-semibold text-white shadow-sm hover:brightness-110" onClick={()=>alert('Order Now – Payments Coming Soon')}>
                  <ShoppingBag className="h-5 w-5"/> Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
