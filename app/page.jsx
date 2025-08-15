
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgePercent, Sparkles, ChevronRight } from "lucide-react";
import { seedProducts, PLACEHOLDER_IMG, formatKES } from "@/lib/products";

export default function HomePage(){
  const featured = seedProducts.filter(p=>p.featured).slice(0,4);
  return (
    <div>
      <Header/>
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,192,203,0.5),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(186,85,211,0.35),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(25,25,112,0.35),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-indigo-900 md:text-6xl">
              Unapologetically <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">Bold</span>.{" "}
              Unmistakably <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">You</span>.
            </h1>
            <p className="mt-4 text-lg text-indigo-800/80 md:text-xl">
              Lingerie and fashion that turn heads. Shop vibrant, confident pieces curated for everyday glam and special nights.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-glow hover:brightness-110">
                Shop Now <ChevronRight className="h-5 w-5" />
              </Link>
              <a href="#featured" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-indigo-700 ring-1 ring-black/10 hover:shadow">
                Explore Collection
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-indigo-800/70">
              <BadgePercent className="h-5 w-5" />
              <span>Free Nairobi delivery on orders over {formatKES(5000)}</span>
            </div>
          </motion.div>
          {/* Collage */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative grid grid-cols-3 gap-3">
            {[0,1,2,3,4,5].map(i=>(
              <div key={i} className={`rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 ${i%3===0?'col-span-2 aspect-[4/3]':'aspect-[3/4]'} `}>
                <img src={PLACEHOLDER_IMG} alt="Princess Collections collage" className="h-full w-full object-cover" />
              </div>
            ))}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -bottom-6 right-4 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-2 text-sm font-semibold text-fuchsia-700"><Sparkles className="h-4 w-4" /> New drops weekly</div>
            </motion.div>
          </motion.div>
        </div>

        <div id="featured" className="mx-auto mt-2 max-w-7xl px-4 pb-10">
          <h2 className="mb-4 text-2xl font-black text-indigo-900 md:text-3xl">Featured</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map(p=> (
              <div key={p.id} className="group rounded-2xl bg-white/80 p-3 ring-1 ring-black/5 backdrop-blur hover:shadow-glow transition">
                <div className="overflow-hidden rounded-xl">
                  <img src={p.img} alt={p.name} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm font-bold text-indigo-900">{p.name}</div>
                  <div className="text-sm font-extrabold text-pink-600">{formatKES(p.price)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
