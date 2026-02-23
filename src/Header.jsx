import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
     <div>
      <header className='bg-black py-8 text-amber-50 font-baslik uppercase'>
      <div className='container mx-auto flex items-center justify-between space-x-8 lg:space-x-16'>
        
        {/* LOGO - ml-5 yerine container yapısında mx-auto daha sağlıklı olur */}
        <a href="#" className='text-3xl lg:text-6xl text-amber-50 font-bold text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-amber-300 pl-20'> YK-AUTO </a>
    
        {/* NAV - Linkleri ortalamak için flex-1 ve justify-center kullanıyoruz */}
        <nav className='flex items-center justify-between flex-1 '>
          
          {/* LİNKLER - Burası artık tam ortada */}
         <div className='flex-1 flex justify-center space-x-4 lg:space-x-8 lg:text-2xl pr-80'>
  

<Link
    to="/"
    className='hover:text-amber-300 transition-colors'
  >
    ANASAYFA
  </Link>

  <Link
    to="/car"
    className='hover:text-amber-300 transition-colors'
  >
    ARAÇLARIMIZ
  </Link>

  <Link
    to="/about"
    className='hover:text-amber-300 transition-colors'
  >
    HAKKIMIZDA
  </Link>

  <Link
    to="/contact"
    className='hover:text-amber-300 transition-colors'
  >
    İLETİŞİM
  </Link>

  

</div>
    
          {/* ARAMA BÖLÜMÜ */}
          <div className="relative">
  <div className="group flex items-center">
    
    <input
      type="text"
      placeholder="Ara..."
      className="
        w-0
        opacity-0
        group-hover:w-44
        group-hover:opacity-100
        transition-all
        duration-500
        bg-transparent
        border-b
        border-amber-300
        focus:outline-none
        text-amber-100
      "
    />

    <button
      type="button"
      className="ml-1 cursor-pointer"
    >
      <IoIosSearch className="text-3xl text-#fff group-hover:text-amber-400 transition" />
    </button>

  </div>
</div>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header

