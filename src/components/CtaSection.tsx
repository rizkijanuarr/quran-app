'use client';

import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function CtaSection() {
  return (
    <section className="relative py-28 md:py-36 bg-muted/40 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Mulai Sekarang
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="font-display text-3xl md:text-[3.25rem] lg:text-[3.75rem] leading-[1.1] mb-6"
        >
          Jadikan Al-Quran{' '}
          <span className="gradient-text">Teman Setiap Hari</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Download sekarang dan mulai perjalanan ngajimu. Gratis, tanpa iklan,
          tanpa registrasi. Hanya kamu dan Al-Quran.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-10 py-4 text-lg font-semibold text-white shadow-sm hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#fitur"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-foreground hover:bg-muted hover:border-accent/30 transition-all duration-200 w-full sm:w-auto"
          >
            Pelajari Fitur
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-app-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            100% Gratis
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-app-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Tanpa Iklan
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-app-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Tanpa Registrasi
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-app-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Offline Bookmarks
          </div>
        </motion.div>
      </div>
    </section>
  );
}
