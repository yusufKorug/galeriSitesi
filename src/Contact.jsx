import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black px-6 mt-10 -mb-8 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* BAŞLIK */}
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          İletişim
        </h1>

        {/* KARTLAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* TELEFON */}
          <div className="border border-amber-400/40 rounded-2xl p-8 text-center text-gray-300
                          hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20
                          transition-all duration-300 hover:-translate-y-2 animate-slide-up">
            <FaPhoneAlt className="text-amber-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Telefon</h3>
            <p>+90 552 573 16 48</p>
          </div>

          {/* MAİL */}
          <div className="border border-amber-400/40 rounded-2xl p-8 text-center text-gray-300
                          hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20
                          transition-all duration-300 hover:-translate-y-2 animate-slide-up delay-100">
            <FaEnvelope className="text-amber-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">E-posta</h3>
            <p>ykauto@gmail.com</p>
          </div>

          {/* ADRES */}
          <div className="border border-amber-400/40 rounded-2xl p-8 text-center text-gray-300
                          hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20
                          transition-all duration-300 hover:-translate-y-2 animate-slide-up delay-200">
            <FaMapMarkerAlt className="text-amber-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Adres</h3>
            <p>İzmir / Torbalı</p>
          </div>
        </div>


      </div>
    </section>
  );
}
