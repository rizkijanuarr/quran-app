'use client';

import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const easeOut = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    name: 'Ahmad Fauzi',
    role: 'Mahasiswa',
    avatar: 'AF',
    avatarColor: 'from-app-green to-app-green-light',
    text: 'Aplikasinya ringan banget dan gak pakai iklan. Aku pakai setiap habis sholat buat tadarus. Fitur terakhir dibaca sangat membantu!',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Ibu Rumah Tangga',
    avatar: 'SN',
    avatarColor: 'from-accent to-accent-secondary',
    text: 'Transliterasi Latinnya sangat membantu aku yang masih belajar baca Arab. Murottal Al-Afasi juga enak didengar sambil ngerjain rumah.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Rizki Pratama',
    role: 'Karyawan Swasta',
    avatar: 'RP',
    avatarColor: 'from-amber-400 to-orange-400',
    text: 'Suka banget sama tampilan Juz-nya. Gampang banget navigasinya. Bookmark juga berguna buat nyimpen ayat-ayat favorit.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-44">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel text="Testimoni" />
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] mt-6 mb-5"
          >
            Kata Mereka tentang{' '}
            <span className="gradient-text-green">Teman Ngaji</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Pengguna Teman Ngaji yang merasakan manfaatnya setiap hari.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: easeOut },
                },
              }}
              className={`relative group ${
                t.featured ? 'md:-translate-y-4' : ''
              }`}
            >
              {/* Featured gradient border */}
              {t.featured && (
                <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent opacity-60" />
              )}

              <div
                className={`relative rounded-2xl border bg-card p-8 h-full flex flex-col ${
                  t.featured
                    ? 'border-transparent shadow-xl'
                    : 'border-border hover:shadow-lg'
                } transition-shadow duration-300`}
              >
                {/* Accent bar */}
                <div
                  className={`w-10 h-1 rounded-full mb-6 ${
                    t.featured
                      ? 'bg-gradient-to-r from-accent to-accent-secondary'
                      : 'bg-gradient-to-r from-app-green to-app-green-light'
                  }`}
                />

                {/* Quote */}
                <div className="relative mb-6 flex-1">
                  <span className="absolute -top-3 -left-2 text-[120px] leading-none text-accent/[0.06] font-display select-none pointer-events-none">
                    &ldquo;
                  </span>
                  <p className="relative text-foreground leading-relaxed text-[0.95rem]">
                    {t.text}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-semibold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
