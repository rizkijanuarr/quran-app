'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-app-green/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
        {/* Left — Text */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-app-green/30 bg-app-green/5 px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-app-green animate-pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-app-green-dark">
                Al-Quran Digital
              </span>
            </div>

            <h1 className="font-display text-[2.75rem] md:text-6xl lg:text-[5.25rem] leading-[1.05] tracking-[-0.02em]">
              Sahabat{' '}
              <span className="relative inline-block">
                <span className="gradient-text-green">Ngaji</span>
                <span className="absolute bottom-[-0.25rem] md:bottom-[-0.5rem] left-0 h-3 md:h-4 w-full rounded-sm bg-gradient-to-r from-app-green/15 to-app-green-light/10" />
              </span>
              <br />
              Genggamanmu
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Baca Al-Quran kapan saja, di mana saja. Lengkap dengan terjemahan
            Indonesia, transliterasi, audio murottal Misyari Rasyid Al-Afasi,
            dan penanda terakhir dibaca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#download"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-8 py-4 text-base font-semibold text-white shadow-sm hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              Download Gratis
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
            <a
              href="#fitur"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-foreground hover:bg-muted hover:border-accent/30 hover:shadow-sm transition-all duration-200"
            >
              Lihat Fitur
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              {['bg-app-green', 'bg-accent', 'bg-amber-400', 'bg-rose-400'].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-semibold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ),
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">100+</span>{' '}
              pengguna aktif
            </div>
          </motion.div>
        </div>

        {/* Right — Hero Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Rotating ring */}
          <div className="absolute w-[420px] h-[420px] animate-spin-slow">
            <div className="w-full h-full rounded-full border-2 border-dashed border-accent/15" />
          </div>

          {/* Main phone mockup area */}
          <div className="relative w-[320px] h-[500px]">
            {/* Phone frame */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-foreground to-foreground/90 shadow-2xl p-3">
              <div className="w-full h-full rounded-[2rem] bg-white overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                  <span className="text-[10px] font-medium text-muted-foreground">
                    9:41
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-4 h-2 rounded-sm bg-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-foreground/30" />
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 py-3 bg-gradient-to-r from-app-green to-app-green-light">
                  <p className="text-white text-xs font-semibold">
                    ☪ Teman Ngaji Kamu!
                  </p>
                </div>

                {/* Surah list mockup */}
                <div className="flex-1 px-4 py-3 space-y-2.5 overflow-hidden">
                  {[
                    { no: 1, name: 'Al-Fatihah', ar: 'الفاتحة', ayat: 7 },
                    { no: 2, name: 'Al-Baqarah', ar: 'البقرة', ayat: 286 },
                    { no: 3, name: 'Ali Imran', ar: 'آل عمران', ayat: 200 },
                    { no: 4, name: 'An-Nisa', ar: 'النساء', ayat: 176 },
                    { no: 5, name: "Al-Ma'idah", ar: 'المائدة', ayat: 120 },
                  ].map(s => (
                    <div
                      key={s.no}
                      className="flex items-center gap-3 p-2.5 rounded-xl border border-border/60 bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-app-green/10 flex items-center justify-center text-app-green text-xs font-bold">
                        {s.no}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground truncate">
                          {s.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {s.ayat} Ayat
                        </p>
                      </div>
                      <p
                        className="text-sm text-app-green-dark font-medium"
                        style={{ fontFamily: 'serif' }}
                      >
                        {s.ar}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="flex items-center justify-around px-4 py-3 border-t border-border/40">
                  {['🏠', '📖', '📑', '🔖', '⚙️'].map((icon, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i === 0 ? 'opacity-100' : 'opacity-40'
                      }`}
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-12 animate-float">
              <div className="rounded-xl bg-white shadow-xl border border-border/60 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Bookmark
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Al-Baqarah: 255
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-16 animate-float-delayed">
              <div className="rounded-xl bg-white shadow-xl border border-border/60 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-app-green to-app-green-light flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343M6.343 17.657A7.975 7.975 0 014 12c0-2.21.896-4.21 2.343-5.657"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Murottal
                  </p>
                  <p className="text-[10px] text-muted-foreground">Al-Afasi</p>
                </div>
              </div>
            </div>

            {/* Accent corner block */}
            <div className="absolute top-20 -left-8 w-12 h-12 rounded-xl bg-accent shadow-[0_4px_14px_rgba(0,82,255,0.25)] rotate-12" />

            {/* Dot grid */}
            <div className="absolute -bottom-10 right-4 grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-accent/20"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
