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
          src="https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/409d103e-3cf6-4d3f-bd74-d70e4019a3a6.jpg"
          alt="CS:GO Case"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 uppercase">
          ОТКРОЙ КЕЙС
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Редкие скины, легендарное оружие и невероятный дроп — всё это ждёт тебя внутри
        </p>
        <button id="open" className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 text-base font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer">
          Попробовать удачу
        </button>
      </div>
    </div>
  );
}