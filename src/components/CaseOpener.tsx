import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skins = [
  {
    name: "AWP | Dragon Lore",
    rarity: "Тайное",
    condition: "Прямо с завода",
    color: "#e4ae39",
    bg: "from-yellow-900/80 to-black",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/8de42990-9203-4942-a70a-8330a832d62e.jpg",
  },
  {
    name: "AK-47 | Fire Serpent",
    rarity: "Тайное",
    condition: "После полевых испытаний",
    color: "#c0392b",
    bg: "from-red-900/80 to-black",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg",
  },
  {
    name: "M4A4 | Howl",
    rarity: "Контрабанда",
    condition: "Прямо с завода",
    color: "#e67e22",
    bg: "from-orange-900/80 to-black",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/bd97b7bb-4fcd-454a-9e43-147bb7b736d5.jpg",
  },
  {
    name: "Desert Eagle | Blaze",
    rarity: "Засекреченное",
    condition: "Прямо с завода",
    color: "#f39c12",
    bg: "from-amber-900/80 to-black",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/8de42990-9203-4942-a70a-8330a832d62e.jpg",
  },
  {
    name: "Karambit | Fade",
    rarity: "Тайное",
    condition: "Прямо с завода",
    color: "#9b59b6",
    bg: "from-purple-900/80 to-black",
    image: "https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/cfc14dc8-0ff6-4b5b-b524-25de2e85e519.jpg",
  },
];

type Phase = "idle" | "spinning" | "result";

export default function CaseOpener() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [result, setResult] = useState(skins[0]);
  const [spinItems, setSpinItems] = useState<typeof skins>([]);

  const openCase = () => {
    const repeated: typeof skins = [];
    for (let i = 0; i < 40; i++) {
      repeated.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    const winner = skins[Math.floor(Math.random() * skins.length)];
    repeated[34] = winner;
    setSpinItems(repeated);
    setResult(winner);
    setPhase("spinning");

    setTimeout(() => {
      setPhase("result");
    }, 3800);
  };

  const reset = () => setPhase("idle");

  return (
    <div id="open" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-center">
        Открыть кейс
      </h2>
      <p className="text-neutral-400 mb-12 text-center max-w-md">
        Нажми кнопку и узнай, какой скин выпадет тебе сегодня
      </p>

      {phase === "idle" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <img
              src="https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/409d103e-3cf6-4d3f-bd74-d70e4019a3a6.jpg"
              alt="CS:GO Case"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg ring-2 ring-orange-500/50" />
          </div>
          <button
            onClick={openCase}
            className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-white px-12 py-4 text-lg font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
          >
            Попробовать удачу
          </button>
        </motion.div>
      )}

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

      <AnimatePresence>
        {phase === "result" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className={`flex flex-col items-center gap-6 bg-gradient-to-b ${result.bg} rounded-2xl p-10 border max-w-sm w-full text-center`}
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
            <button
              onClick={reset}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 uppercase text-sm tracking-widest transition-all duration-200 cursor-pointer rounded"
            >
              Открыть ещё раз
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
