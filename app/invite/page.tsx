"use client";
import { useEffect, useState } from "react";
function RSVPBlock() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
 try {
  const res = await fetch("https://script.google.com/macros/s/AKfycbzLNaVHvETbQ0yIJ-59Wg0dCFnq14ciNDXL2AWXPwtfu6P3djnd66mVDaSH3d4Ikfq1bg/exec", {
  method: "POST",
  mode: "no-cors", // 🔥 IMPORTANT FIX
  body: JSON.stringify({ name, phone }),
});

  setSuccess(true); // always trigger after send
} catch (err) {
  console.log(err);
}

    setLoading(false);
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-center pt-14 px-6">

      {/* 🔥 LEAF */}
      <img
        src="/leaf.png"
        alt="leaf"
        className="w-36 mb-6"
        style={{ filter: "drop-shadow(0 0 10px rgba(255,120,0,0.5))" }}
      />

      {/* 🔥 TITLE */}
      <p className="title text-4xl tracking-[0.3em] uppercase text-[#E6D3A3] mb-10">
        CONFIRM YOUR PRESENCE
      </p>

      {success ? (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center animate-successPulse">

  <p
    className="title text-3xl tracking-[0.3em] uppercase"
    style={{ color: "#ff9a2f" }}
  >
    ACCEPTED
  </p>

  <p
    className="mt-6 text-sm tracking-[0.2em] uppercase"
    style={{ color: "#d9c29a" }}
  >
    your presence is marked
  </p>

</div>  ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xs">

          {/* 🔥 NAME FIELD */}
          <div
            className="flex items-center px-4 py-3 w-full"
            style={{
              border: "1px solid rgba(230, 211, 163, 0.4)",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)"
            }}
          >
            <span className="mr-3 text-[#d9c29a]">👤</span>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent w-full text-white placeholder-gray-400 outline-none"
              required
            />
          </div>

          {/* 🔥 PHONE FIELD */}
          <div
            className="flex items-center px-4 py-3 w-full"
            style={{
              border: "1px solid rgba(230, 211, 163, 0.4)",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)"
            }}
          >
            <span className="mr-3 text-[#d9c29a]">📞</span>

            <input
              type="tel"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent w-full text-white placeholder-gray-400 outline-none"
              required
            />
          </div>

          {/* 🔥 CTA */}
          <button
            type="submit"
            className="mt-8 px-6 py-3 text-sm tracking-[0.2em] uppercase transition"
            style={{
              background: "#ff9a2f",
              color: "#000",
              boxShadow: `
                0 0 10px rgba(255,140,0,0.5),
                2px 2px 0 rgba(0,0,0,0.6),
                -2px -1px 0 rgba(0,0,0,0.4)
              `,
              clipPath: "polygon(0% 5%, 100% 0%, 98% 100%, 2% 95%)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {loading ? "SUMMONING..." : "ACCEPT YOUR SUMMONING"}
          </button>

        </form>
      )}

    </div>
  );
}
export default function Invite() {
  const targetDate = new Date("2026-05-16T15:00:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) return;

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);
return (
    <main className="bg-black text-white relative overflow-hidden">

      {/* 🔥 SECTION 1 — YOUR ORIGINAL (UNCHANGED) */}
      <section className="min-h-screen relative overflow-hidden">

        <img
  src="/bg2.png"
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ filter: "brightness(0.75)" }}
/>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center text-center pt-14 px-6">

          <img
            src="/leaf.png"
            alt="leaf"
            className="w-40 mb-6"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,120,0,0.6))"
            }}
          />

          <p className="title text-2xl tracking-[0.3em] uppercase text-[#E6D3A3] leading-tight">
            YOU’VE BEEN
          </p>

          <p
            className="title text-2xl tracking-[0.3em] uppercase leading-tight mt-1"
            style={{
              color: "#ff9a2f",
              textShadow: "0 0 10px rgba(255,140,0,0.6)"
            }}
          >
            CALLED
          </p>

          <p
            className="title tracking-[0.5em] my-3"
            style={{ color: "#ff9a2f", opacity: 0.8 }}
          >
            — ◇ —
          </p>

          <p className="title text-2xl tracking-[0.3em] uppercase leading-tight">
            AND YOU
          </p>

          <p
            className="title text-2xl tracking-[0.3em] uppercase leading-tight mt-1"
            style={{
              color: "#ff9a2f",
              textShadow: "0 0 10px rgba(255,140,0,0.6)"
            }}
          >
            ANSWERED
          </p>

          <p
            className="title tracking-[0.5em] my-3"
            style={{ color: "#ff9a2f", opacity: 0.8 }}
          >
            — ◇ —
          </p>

          <p className="title text-sm tracking-[0.25em] uppercase text-gray-200 mt-2">
            THAT’S ALL THAT MATTERS
          </p>

        </div>
      </section>

      {/* 🔥 SECTION 2 — GATHERING */}
<section className="min-h-screen relative overflow-hidden">

  <img
    src="/bg3.png"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ filter: "brightness(0.75)" }}
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex flex-col items-center text-center pt-14 px-6">

    {/* 🔥 LEAF */}
    <img
      src="/leaf.png"
      alt="leaf"
      className="w-36 mb-6"
      style={{
        filter: "drop-shadow(0 0 10px rgba(255,120,0,0.5))"
      }}
    />

    {/* 🔥 TITLE (ONLY NINJA FONT) */}
    <p className="title text-4xl tracking-[0.3em] uppercase text-[#E6D3A3] leading-tight">
      THE
    </p>

    <p
      className="title text-4xl tracking-[0.3em] uppercase leading-tight mb-4"
      style={{
        color: "#ff9a2f",
        textShadow: "0 0 12px rgba(255,140,0,0.5)"
      }}
    >
      GATHERING
    </p>

    {/* 🔥 SUBTEXT (NORMAL FONT) */}
    <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-xs">
      NO MISSIONS, NO RULES, JUST GOOD COMPANY AND BETTER{" "}
      <span style={{ color: "#ff9a2f" }}>CHAOS</span>
    </p>

    {/* 🔥 DIVIDER */}
    <p
      className="title tracking-[0.5em] my-3"
      style={{ color: "#ff9a2f", opacity: 0.8 }}
    >
      — ◇ —
    </p>

    {/* 🔥 DATE */}
    <p className="text-base tracking-wide mb-2">
      📅 16 MAY 2026
    </p>

    {/* 🔥 TIME */}
    <p className="text-base tracking-wide mb-5">
      ⏰ 3:00 PM ONWARDS
    </p>

    {/* 🔥 DIVIDER */}
    <p
      className="title tracking-[0.5em] my-3"
      style={{ color: "#ff9a2f", opacity: 0.8 }}
    >
      — ◇ —
    </p>

    {/* 🔥 LOCATION */}
    <p className="text-base leading-relaxed mb-5">
      📍 SHIELDTY RESORT 
      <br />
SHILLONG BYPASS ROAD    </p>

    {/* 🔥 DIVIDER */}
    <p
      className="title tracking-[0.5em] my-3"
      style={{ color: "#ff9a2f", opacity: 0.8 }}
    >
      — ◇ —
    </p>

    {/* 🔥 BYOC */}
    <p className="text-base">
      🍶 BRING YOUR OWN{" "}
      <span style={{ color: "#ff9a2f" }}>CHAKRA</span>
    </p>

  </div>
</section>     
{/* 🔥 SECTION 3 — COUNTDOWN */}
<section className="min-h-screen relative overflow-hidden">

  {/* BACKGROUND */}
  <img
    src="/bg4.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ filter: "brightness(0.7)" }}
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex flex-col items-center text-center pt-12 px-6">

    {/* 🔥 LEAF (bigger) */}
    <img
      src="/leaf.png"
      alt="leaf"
      className="w-48 mb-8"
      style={{
        filter: "drop-shadow(0 0 10px rgba(255,120,0,0.5))"
      }}
    />

    {/* 🔥 TITLE (NINJA FONT) */}
    <p className="title text-5xl tracking-[0.3em] uppercase text-[#E6D3A3] mb-10">
      it begins in
    </p>

    {/* 🔥 COUNTDOWN — STACKED */}
<div className="flex flex-col gap-3 items-center">

  <div className="border border-[#ff9a2f] px-8 py-4 w-[160px] text-center">
    <p className="text-3xl font-bold" style={{ color: "transparent", WebkitTextStroke: "1px #ff9a2f" }}>
      {timeLeft.days}
    </p>
    <p className="text-xs text-white mt-2">DAYS</p>
  </div>

  <div className="border border-[#ff9a2f] px-6 py-5 w-[160px] text-center">
    <p className="text-3xl font-bold" style={{ color: "transparent", WebkitTextStroke: "1px #ff9a2f" }}>
      {timeLeft.hours}
    </p>
    <p className="text-xs text-white mt-2">HOURS</p>
  </div>

  <div className="border border-[#ff9a2f] px-6 py-5 w-[160px] text-center">
    <p className="text-3xl font-bold" style={{ color: "transparent", WebkitTextStroke: "1px #ff9a2f" }}>
      {timeLeft.minutes}
    </p>
    <p className="text-xs text-white mt-2">MINUTES</p>
  </div>

  <div className="border border-[#ff9a2f] px-6 py-5 w-[160px] text-center">
    <p className="text-3xl font-bold" style={{ color: "transparent", WebkitTextStroke: "1px #ff9a2f" }}>
      {timeLeft.seconds}
    </p>
    <p className="text-xs text-white mt-2">SECONDS</p>
  </div>

</div>

  </div>
</section>
{/* 🔥 SECTION 4 — RSVP */}
{/* 🔥 SECTION 4 — RSVP */}
<section className="min-h-screen relative overflow-hidden">

  {/* BACKGROUND */}
  <img
    src="/bg5.PNG"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ filter: "brightness(0.7)" }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    <RSVPBlock />
  </div>

</section>
{/* 🔥 SECTION 5 — LOCATION */}
<section className="min-h-screen relative overflow-hidden">

  {/* BACKGROUND */}
  <img
    src="/bg4.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ filter: "brightness(0.7)" }}
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 flex flex-col items-center text-center pt-16 px-6">

    {/* 🔥 LEAF */}
    <img
      src="/leaf.png"
      alt="leaf"
      className="w-32 mb-6"
      style={{ filter: "drop-shadow(0 0 10px rgba(255,120,0,0.5))" }}
    />

    {/* 🔥 TITLE */}
    <p className="title text-2xl tracking-[0.3em] uppercase text-[#E6D3A3] mb-4">
      LOCATION
    </p>

    {/* 🔥 SUBTEXT */}
    <p className="text-sm text-gray-300 mb-6">
      Shieldty Resort, Shillong Bypass Road
    </p>

    {/* 🔥 MAP */}
    <div className="w-[280px] h-[200px] mb-8 overflow-hidden"
      style={{
        border: "1px solid rgba(217,194,154,0.4)"
      }}
    >
      <iframe
        src="https://www.google.com/maps?q=Shieldty+Resort+Shillong&output=embed"
        className="w-full h-full"
        loading="lazy"
      ></iframe>
    </div>

    {/* 🔥 GET DIRECTIONS BUTTON */}
    <a
      href="https://maps.app.goo.gl/huPAEYmaoSTqMNhR9"
      target="_blank"
      className="px-6 py-3 text-sm tracking-[0.2em] uppercase"
      style={{
        background: "#ff9a2f",
        color: "#000",
        boxShadow: `
          0 0 10px rgba(255,140,0,0.5),
          2px 2px 0 rgba(0,0,0,0.6),
          -2px -1px 0 rgba(0,0,0,0.4)
        `,
        clipPath: "polygon(0% 5%, 100% 0%, 98% 100%, 2% 95%)"
      }}
    >
      GET DIRECTIONS
    </a>

  </div>
</section>
</main>
  );
}
