
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seedProducts, formatKES } from "@/lib/products";

export default function GalleryPage(){
  return (
    <div>
      <Header/>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-black text-indigo-900">Gallery</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {seedProducts.map(p=> (
            <div key={p.id} className="overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5">
              <img src={p.img} alt={p.name} className="aspect-square w-full object-cover" />
              <div className="p-3">
                <div className="text-sm font-bold text-indigo-900">{p.name}</div>
                <div className="text-xs text-indigo-800/60">{formatKES(p.price)}</div>
                <button className="mt-2 w-full rounded-xl bg-fuchsia-600 px-3 py-2 font-semibold text-white" onClick={()=>alert('Order Now – Payments Coming Soon')}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
