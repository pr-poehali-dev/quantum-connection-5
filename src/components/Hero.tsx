import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/52a58b13-1577-4e1c-bf6a-69efaaa0711f.jpg"
          alt="Перфоратор в работе"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-orange-400 uppercase text-sm tracking-widest mb-4 font-semibold">Профессиональный инструмент</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 uppercase">
          DRILLPRO
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Перфораторы для профи и дома — быстрая доставка, гарантия, лучшие цены
        </p>
        <a href="#catalog" className="inline-block bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 text-base font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer">
          Смотреть каталог
        </a>
      </div>
    </div>
  );
}
