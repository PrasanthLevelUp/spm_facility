import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import {
  company,
  defaultWhatsapp,
  services,
  reasons,
  hero,
  trustPoints,
  howItWorks,
  testimonials,
} from '../constants/siteConfig'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import { iconMap } from '../components/ui/iconMap'
import { images } from '../assets/images'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={images.hero}
          alt="SPM Facility Services — apartments and buildings in Chengalpattu"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/logo.png"
            alt="SPM Facility Services Logo"
            className="mb-8 h-24 w-auto rounded-2xl bg-white p-3 shadow-xl sm:h-32"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold leading-tight text-white sm:text-5xl"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-slate-100 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={company.telLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={defaultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
            >
              Our Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h2 className="text-center text-lg font-bold text-navy sm:text-xl">
            Why Customers Choose SPM
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trustPoints.map((t) => {
              const Icon = iconMap[t.icon]
              return (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 text-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    {Icon && <Icon size={22} />}
                  </div>
                  <span className="text-xs font-semibold text-navy sm:text-sm">{t.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="A complete range of facility and maintenance services under one roof."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.name} service={s} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting quality service from SPM is quick and hassle-free."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-3 py-0.5 text-xs font-bold text-white">
                    Step {step.step}
                  </span>
                  <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white">
                    {Icon && <Icon size={26} />}
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why us preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Why SPM"
            title="Why Choose Us"
            subtitle="Reliable, professional and transparent service — every single time."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => {
              const Icon = iconMap[r.icon]
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    {Icon && <Icon size={24} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{r.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="Customer Reviews"
            subtitle="Real reviews from our customers will appear here soon."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => {
              const Star = iconMap['Star']
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-1 text-brand-orange">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm italic text-slate-600">“{t.text}”</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a Service?
          </h2>
          <p className="mt-3 text-slate-300">
            Call or message us — we respond quickly and get the job done.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.telLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={defaultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
