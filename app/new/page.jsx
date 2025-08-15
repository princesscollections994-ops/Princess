
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seedProducts } from "@/lib/products";
import Products from "../products/page";

export default function NewArrivalsPage(){
  const items = seedProducts.filter(p=>p.newArrival);
  return (
    <div>
      <Header/>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-indigo-900">New Arrivals</h1>
          <p className="text-indigo-800/70">Fresh picks dropping in weekly.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map(p=> (
            <div key={p.id} className="overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5">
              <img src={p.img} alt={p.name} className="aspect-[4/5] w-full object-cover" />
              <div className="p-3">
                <div className="text-sm font-bold text-indigo-900">{p.name}</div>
                <button className="mt-2 w-full rounded-xl bg-indigo-900 px-3 py-2 font-semibold text-white" onClick={()=>alert('Order Now – Payments Coming Soon')}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
