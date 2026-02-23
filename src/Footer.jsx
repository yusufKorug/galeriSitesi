import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 mt-24 text-gray-400 py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo ve Hakkında */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 ">
            <div className="w-8 h- bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">YK</div>
            <span className="text-xl font-bold text-white tracking-tight">YK-AUTO</span>
          </div>
        </div>

        
       

        {/* Destek */}
        <div className='flex flex-row space-x-10'>
          <h4 className="text-white font-semibold  text-s">Destek</h4>
          <ul className="space-y-2 space-x-6 text-sm flex flex-row">
            <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
            <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
          </ul>
        </div>

        {/* Bülten Kaydı */}
        <div>
          <h4 className="text-white font-semibold  text-lg">Abone Ol</h4>
          <p className="text-xs mb-4">Yeni içeriklerden haberdar olmak için bültenimize katılın.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="E-posta" 
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20">
              Katıl
            </button>
          </div>
        </div>

      </div>

      {/* Alt Kısım - Telif Hakları */}
      <div className="max-w-7xl mx-auto px-6 mt-4 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide">
        <p>© 2026 CarouselSlider. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;