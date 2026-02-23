'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useToast } from './Toast';

const easeOut = [0.16, 1, 0.3, 1] as const;

const APK_DOWNLOAD_URL = '/TemanNgaji.apk';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { showToast } = useToast();

  const handleDownload = () => {
    showToast('Sedang Mengunduh File...', 'info');
  };

  return (
    <footer
      id="download"
      className="relative bg-foreground text-white overflow-hidden"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-8">
        {/* Download CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-sm p-8 md:p-12 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-app-green/30 bg-app-green/10 px-4 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-app-green animate-pulse-dot" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-app-green-light">
                  Available for Android
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-3">
                Download{' '}
                <span className="gradient-text-green">Teman Ngaji</span>
              </h3>
              <p className="text-white/60 mb-6 max-w-md">
                Download APK langsung dan mulai perjalanan ngaji kamu hari ini.
                Gratis selamanya, tanpa iklan.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Primary download button */}
                <a
                  href={APK_DOWNLOAD_URL}
                  download="TemanNgaji.apk"
                  onClick={handleDownload}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-app-green to-app-green-light px-8 py-4 text-base font-semibold text-white shadow-sm hover:shadow-[0_8px_24px_rgba(108,191,74,0.35)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
                >
                  <svg
                    className="w-6 h-6"
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
                  Download APK
                  <span className="text-xs font-normal opacity-70">
                    (Android)
                  </span>
                </a>

                {/* Coming soon iOS */}
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm text-white/40 cursor-not-allowed w-full sm:w-auto justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  iOS — Segera Hadir
                </div>
              </div>
            </div>

            {/* Right: app icon */}
            <div className="shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="/app-icon.png"
                  alt="Teman Ngaji App Icon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden">
                <Image
                  src="/app-icon.png"
                  alt="Teman Ngaji"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-lg">Teman Ngaji</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Sahabat ngaji digital yang menemani perjalanan spiritualmu setiap
              hari. Baca, dengar, dan pahami Al-Quran.
            </p>
          </div>

          {/* Fitur */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Fitur
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  114 Surah Lengkap
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  Terjemahan Indonesia
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  Audio Murottal
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-white transition-colors">
                  Bookmark Ayat
                </a>
              </li>
            </ul>
          </div>

          {/* Tentang */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Tentang
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="#tentang"
                  className="hover:text-white transition-colors"
                >
                  Tentang Aplikasi
                </a>
              </li>
              <li>
                <a
                  href="#cara-kerja"
                  className="hover:text-white transition-colors"
                >
                  Cara Kerja
                </a>
              </li>
              <li>
                <span className="text-white/30">Kebijakan Privasi</span>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
              Sumber Data
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="https://quran-api.santrikoding.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Quran API Santri Koding
                </a>
              </li>
              <li>
                <a
                  href="https://cdn.islamic.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Islamic Network CDN
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {currentYear} Teman Ngaji Kamu! — Dibuat dengan ❤️
          </p>
          <div className="flex items-center gap-1 text-sm text-white/40">
            <span>Powered by</span>
            <a
              href="https://reactnative.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-secondary hover:text-white transition-colors"
            >
              React Native
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
