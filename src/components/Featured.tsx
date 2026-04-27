const products = [
  {
    name: "Bosch GBH 2-28",
    desc: "Лёгкий перфоратор для бытовых задач. Сверление бетона до 28 мм, режим долбления.",
    price: "8 990 ₽",
    badge: "Хит продаж",
    badgeColor: "bg-orange-500",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/df2334e7-a15e-4785-936f-86044b443adc.jpg",
  },
  {
    name: "DeWalt D25133K",
    desc: "Профессиональный перфоратор SDS+. Мощность 800 Вт, удар 2.7 Дж, антивибрация.",
    price: "14 500 ₽",
    badge: "Профи",
    badgeColor: "bg-blue-600",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/0e62824e-ffd4-462e-aa10-e6a9b1273005.jpg",
  },
  {
    name: "Makita HR4013C",
    desc: "Тяжёлый перфоратор SDS-Max. Мощность 1100 Вт, удар 8.5 Дж, для армированного бетона.",
    price: "28 900 ₽",
    badge: "Топ класс",
    badgeColor: "bg-neutral-800",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/ffc64c64-97bc-449a-b14f-85321a258f63.jpg",
  },
];

export default function Featured() {
  return (
    <div id="catalog" className="min-h-screen px-6 py-24 bg-white flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="uppercase text-sm tracking-widest text-orange-500 font-semibold mb-3">Каталог</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Наши перфораторы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="group border border-neutral-200 hover:border-orange-400 transition-all duration-300 rounded-xl overflow-hidden flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-bold uppercase px-3 py-1 rounded`}>
                  {p.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{p.name}</h3>
                <p className="text-neutral-500 text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-orange-500">{p.price}</span>
                  <button className="bg-black hover:bg-orange-500 text-white text-sm font-bold uppercase px-5 py-2 transition-all duration-200 cursor-pointer rounded">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
