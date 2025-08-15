
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage(){
  return (
    <div>
      <Header/>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-black text-indigo-900">Contact Us</h1>
        <p className="mt-1 text-indigo-800/80">Have questions about sizing, deliveries, or custom orders? We’re here for you.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Info title="Phone">+254 700 000 000</Info>
          <Info title="Email">hello@princesscollections.co.ke</Info>
          <Info title="Location">Nairobi, Kenya</Info>
        </div>

        <div className="mt-6 rounded-2xl bg-white/80 p-4 ring-1 ring-black/5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Field label="Name" placeholder="Your name"/>
            <Field label="Email" placeholder="you@example.com" type="email"/>
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-indigo-900">Message</label>
              <textarea rows={4} placeholder="Tell us what you need help with…" className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none ring-fuchsia-500/40 focus:ring-2"/>
            </div>
            <div>
              <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 px-4 py-2 font-semibold text-white">Send Message</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
function Field({label, ...props}){
  return (
    <div>
      <label className="text-xs font-semibold text-indigo-900">{label}</label>
      <input {...props} className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none ring-fuchsia-500/40 focus:ring-2"/>
    </div>
  );
}
function Info({title, children}){
  return (
    <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5">
      <div className="text-indigo-900">{title}</div>
      <div className="text-sm text-indigo-800/70">{children}</div>
    </div>
  );
}
