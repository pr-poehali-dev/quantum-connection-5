import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cases = [
  {
    id: "chroma",
    name: "Chroma Case",
    price: "149 ₽",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/409d103e-3cf6-4d3f-bd74-d70e4019a3a6.jpg",
    skins: [
      { name: "AK-47 | Fire Serpent", rarity: "Тайное", condition: "После полевых испытаний", price: "48 500 ₽", color: "#c0392b", bg: "from-red-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg" },
      { name: "AWP | Dragon Lore", rarity: "Тайное", condition: "Прямо с завода", price: "120 000 ₽", color: "#e4ae39", bg: "from-yellow-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/8de42990-9203-4942-a70a-8330a832d62e.jpg" },
      { name: "Desert Eagle | Blaze", rarity: "Засекреченное", condition: "Прямо с завода", price: "6 200 ₽", color: "#f39c12", bg: "from-amber-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/9ab8e8dd-012a-4a28-a26a-d0f6b827704e.jpg" },
      { name: "Glock-18 | Fade", rarity: "Засекреченное", condition: "Прямо с завода", price: "3 800 ₽", color: "#f39c12", bg: "from-amber-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/9ab8e8dd-012a-4a28-a26a-d0f6b827704e.jpg" },
      { name: "M4A4 | Howl", rarity: "Контрабанда", condition: "Прямо с завода", price: "210 000 ₽", color: "#e67e22", bg: "from-orange-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/bd97b7bb-4fcd-454a-9e49-147bb7b736d5.jpg" },
      { name: "Karambit | Fade", rarity: "Тайное", condition: "Прямо с завода", price: "85 000 ₽", color: "#9b59b6", bg: "from-purple-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg" },
    ],
  },
  {
    id: "fever",
    name: "Fever Dream Case",
    price: "299 ₽",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/8384c55e-07e2-4c27-ad53-9aca4282b4a4.jpg",
    skins: [
      { name: "AWP | Dragon Lore", rarity: "Тайное", condition: "Прямо с завода", price: "120 000 ₽", color: "#e4ae39", bg: "from-yellow-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/8de42990-9203-4942-a70a-8330a832d62e.jpg" },
      { name: "M4A4 | Howl", rarity: "Контрабанда", condition: "Прямо с завода", price: "210 000 ₽", color: "#e67e22", bg: "from-orange-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/bd97b7bb-4fcd-454a-9e49-147bb7b736d5.jpg" },
      { name: "Karambit | Fade", rarity: "Тайное", condition: "Прямо с завода", price: "85 000 ₽", color: "#9b59b6", bg: "from-purple-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg" },
      { name: "AK-47 | Fire Serpent", rarity: "Тайное", condition: "После полевых испытаний", price: "48 500 ₽", color: "#c0392b", bg: "from-red-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg" },
      { name: "Glock-18 | Fade", rarity: "Засекреченное", condition: "Прямо с завода", price: "3 800 ₽", color: "#f39c12", bg: "from-amber-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/9ab8e8dd-012a-4a28-a26a-d0f6b827704e.jpg" },
      { name: "Desert Eagle | Blaze", rarity: "Засекреченное", condition: "Прямо с завода", price: "6 200 ₽", color: "#f39c12", bg: "from-amber-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/9ab8e8dd-012a-4a28-a26a-d0f6b827704e.jpg" },
    ],
  },
  {
    id: "legendary",
    name: "Legendary Case",
    price: "599 ₽",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/b7e3aabd-e434-4f86-9e47-d0ab87d431b9.jpg",
    skins: [
      { name: "M4A4 | Howl", rarity: "Контрабанда", condition: "Прямо с завода", price: "210 000 ₽", color: "#e67e22", bg: "from-orange-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/bd97b7bb-4fcd-454a-9e49-147bb7b736d5.jpg" },
      { name: "AWP | Dragon Lore", rarity: "Тайное", condition: "Прямо с завода", price: "120 000 ₽", color: "#e4ae39", bg: "from-yellow-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/8de42990-9203-4942-a70a-8330a832d62e.jpg" },
      { name: "Karambit | Fade", rarity: "Тайное", condition: "Прямо с завода", price: "85 000 ₽", color: "#9b59b6", bg: "from-purple-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg" },
      { name: "AK-47 | Fire Serpent", rarity: "Тайное", condition: "После полевых испытаний", price: "48 500 ₽", color: "#c0392b", bg: "from-red-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg" },
      { name: "Desert Eagle | Blaze", rarity: "Засекреченное", condition: "Прямо с завода", price: "6 200 ₽", color: "#f39c12", bg: "from-amber-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/9ab8e8dd-012a-4a28-a26a-d0f6b827704e.jpg" },
      { name: "Glock-18 | Fade", rarity: "Засекреченное", condition: "Прямо с завода", price: "3 800 ₽", color: "#f39c12", bg: "from-amber-900/80 to-black", image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/9ab8e8dd-012a-4a28-a26a-d0f6b827704e.jpg" },
    ],
  },
];

type Phase = "idle" | "spinning" | "result";
type Skin = typeof cases[0]["skins"][0];

export default function CaseOpener() {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [result, setResult] = useState<Skin>(cases[0].skins[0]);
  const [spinItems, setSpinItems] = useState<Skin[]>([]);

  const openCase = () => {
    const skins = selectedCase.skins;
    const repeated: Skin[] = [];
    for (let i = 0; i < 40; i++) {
      repeated.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    const winner = skins[Math.floor(Math.random() * skins.length)];
    repeated[34] = winner;
    setSpinItems(repeated);
    setResult(winner);
    setPhase("spinning");
    setTimeout(() => setPhase("result"), 3800);
  };

  const reset = () => setPhase("idle");

  return (
    <div id="open" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-center">
        Открыть кейс
      </h2>
      <p className="text-neutral-400 mb-10 text-center max-w-md">
        Выбери кейс и испытай удачу — вдруг выпадет легенда
      </p>

      {/* Выбор кейса */}
      {phase === "idle" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCase(c)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer group ${
                  selectedCase.id === c.id ? "border-orange-500 scale-105" : "border-neutral-700 hover:border-neutral-500"
                }`}
              >
                <img src={c.image} alt={c.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-white font-bold text-sm">{c.name}</p>
                  <p className="text-orange-400 font-bold text-lg">{c.price}</p>
                </div>
                {selectedCase.id === c.id && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded font-bold uppercase">
                    Выбран
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="w-36 h-36 relative">
              <img src={selectedCase.image} alt={selectedCase.name} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 rounded-lg ring-2 ring-orange-500/60" />
            </div>
            <button
              onClick={openCase}
              className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-12 py-4 text-lg font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
            >
              Открыть за {selectedCase.price}
            </button>
          </div>
        </motion.div>
      )}

      {/* Барабан */}
      {phase === "spinning" && (
        <div className="w-full max-w-2xl overflow-hidden relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500 z-10 -translate-x-1/2" />
          <motion.div
            className="flex gap-3"
            animate={{ x: `-${34 * 148}px` }}
            initial={{ x: "0px" }}
            transition={{ duration: 3.5, ease: [0.12, 0.8, 0.4, 1] }}
          >
            {spinItems.map((skin, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-36 rounded-lg overflow-hidden border border-neutral-700 relative"
                style={{ boxShadow: `0 0 12px ${skin.color}44` }}
              >
                <img src={skin.image} alt={skin.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-2 py-1">
                  <p className="text-white text-xs font-bold truncate">{skin.name}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Результат */}
      <AnimatePresence>
        {phase === "result" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className={`flex flex-col items-center gap-5 bg-gradient-to-b ${result.bg} rounded-2xl p-10 border max-w-sm w-full text-center`}
            style={{ borderColor: result.color + "88" }}
          >
            <p className="uppercase text-xs tracking-widest font-bold" style={{ color: result.color }}>
              {result.rarity}
            </p>
            <div className="w-52 h-52 rounded-xl overflow-hidden" style={{ boxShadow: `0 0 40px ${result.color}88` }}>
              <img src={result.image} alt={result.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">{result.name}</h3>
              <p className="text-neutral-400 text-sm mt-1">{result.condition}</p>
            </div>

            {/* Цена предмета */}
            <div className="bg-black/40 rounded-xl px-8 py-4 w-full">
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Рыночная цена</p>
              <p className="text-3xl font-bold" style={{ color: result.color }}>{result.price}</p>
            </div>

            <button
              onClick={reset}
              className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 uppercase text-sm tracking-widest transition-all duration-200 cursor-pointer rounded font-bold w-full"
            >
              Открыть ещё раз
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
