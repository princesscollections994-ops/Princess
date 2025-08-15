
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-black/10 bg-white/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="text-lg font-black text-indigo-900">Princess Collections</div>
          <p className="mt-1 text-sm text-indigo-800/70">Kenya’s boldest lingerie & fashion boutique.</p>
        </div>
        <div>
          <div className="text-sm font-bold text-indigo-900">Shop</div>
          <ul className="mt-2 space-y-1 text-sm text-indigo-800/70">
            <li>Lingerie</li><li>Sets</li><li>Shapewear</li><li>Clothing</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-indigo-900">Support</div>
          <ul className="mt-2 space-y-1 text-sm text-indigo-800/70">
            <li>FAQ</li><li>Shipping & Returns</li><li>Size Guide</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-indigo-900">Follow</div>
          <ul className="mt-2 space-y-1 text-sm text-indigo-800/70">
            <li>Instagram</li><li>TikTok</li><li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 py-4 text-center text-xs text-indigo-800/60">© {new Date().getFullYear()} Princess Collections. All rights reserved.</div>
    </footer>
  );
}
