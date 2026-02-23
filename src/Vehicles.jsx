import vehicles from "./data/vehiclesData";

export default function Vehicles() {
  return (
    <section className="bg-black px-8 mt-14 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8">

          {vehicles.map((car) => (
            <div key={car.id} className="bg-black shadow-md">

              <img
                src={car.image}
                alt={car.title}
                className="w-full h-64 object-cover rounded-2xl "
              />

              <div className="p-4 text-black bg-amber-50">
                <h3 className="font-bold text-sm">{car.title}</h3>
                <p className="text-xs text-gray-500">{car.subtitle}</p>
                <p className="text-xs mt-2">{car.description}</p>

                <div className="grid grid-cols-2 gap-2 text-black text-xs mt-4">
                  <span>{car.km}</span>
                  <span>{car.fuel}</span>
                  <span>{car.transmission}</span>
                  <span>{car.location}</span>
                </div>
              </div>

              <div className="border-t p-4 text-black bg-amber-50 font-bold">
                {car.price}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
