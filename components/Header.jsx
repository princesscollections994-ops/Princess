
"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Sparkles, Menu, X, Pencil } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 shadow-sm">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-indigo-700" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-white" />
            <span className="text-xl font-black tracking-tight text-white">Princess Collections</span>
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase text-white">Bold • Fashionista</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/new">New Arrivals</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-semibold text-fuchsia-600 shadow-sm hover:shadow">
              <ShoppingBag className="h-5 w-5" /> Shop
            </Link>
            <button className="md:hidden inline-flex rounded-2xl bg-white/10 p-2 text-white" onClick={()=>setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-2">
              <MobileLink href="/" onClick={()=>setOpen(false)}>Home</MobileLink>
              <MobileLink href="/products" onClick={()=>setOpen(false)}>Products</MobileLink>
              <MobileLink href="/gallery" onClick={()=>setOpen(false)}>Gallery</MobileLink>
              <MobileLink href="/new" onClick={()=>setOpen(false)}>New Arrivals</MobileLink>
              <MobileLink href="/contact" onClick={()=>setOpen(false)}>Contact</MobileLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="px-3 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:text-pink-100">{children}</Link>
  );
}
function MobileLink({ href, children, onClick }){
  return <Link href={href} onClick={onClick} className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-fuchsia-600 shadow-sm"/>;
}
