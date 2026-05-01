"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const startExperience = () => {
    const audio = document.getElementById("global-audio") as HTMLAudioElement;

    if (audio) {
      audio.volume = 0.8;
      audio.play().catch(() => {
        console.log("Audio blocked");
      });
    }

    router.push("/invite");
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/bg.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.85) blur(0.5px)"
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* 🔥 SEAL (bigger + lower) */}
        <div onClick={startExperience} className="cursor-pointer mb-4 -mt-4">
          <div className="pulse">
            <img
              src="/seal.png"
              alt="seal"
              className="w-[340px] md:w-[380px] rotate-seal opacity-95"
              style={{ filter: "brightness(0.9) saturate(0.9)" }}
            />
          </div>
        </div>

        {/* 🔥 TITLE (moved down slightly) */}
        <h1 className="title text-7xl tracking-wide mt-6">
          UNSEAL
        </h1>
<p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[#d9c29a] opacity-80">
  ENRIQUE’S 23RD ARC
</p>
        {/* 🔥 TAP (closer + darker tone) */}
       <p
  onClick={startExperience}
  className="mt-1 text-[11px] tracking-[0.35em] uppercase cursor-pointer transition duration-300"
  style={{
    color: "rgba(214, 178, 110, 0.75)", // muted gold-amber
    textShadow: "0 0 4px rgba(255,140,60,0.25)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "rgba(255,200,120,0.95)";
    e.currentTarget.style.textShadow = "0 0 8px rgba(255,160,80,0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "rgba(214,178,110,0.75)";
    e.currentTarget.style.textShadow = "0 0 4px rgba(255,140,60,0.25)";
  }}
>
  tap to begin
</p>

        {/* 🔥 LEAF (bigger) */}
        <img
          src="/leaf.png"
          alt="leaf"
          className="w-28 mt-8 opacity-90"
          style={{
            filter: "drop-shadow(0 0 6px rgba(255,120,0,0.5))"
          }}
        />
      </div>
    </main>
  );
}
