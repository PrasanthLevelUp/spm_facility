import { motion } from 'framer-motion'
import { Info, IdCard, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { images } from '../assets/images'

const uniforms = [
  {
    title: 'Male Staff',
    image: images.uniformMale,
    features: [
      'Navy Blue Polo T-Shirt',
      'Green Collar',
      'Company Logo on chest',
      'Company Name on back',
    ],
  },
  {
    title: 'Female Staff',
    image: images.uniformFemale,
    features: [
      'Navy Blue Overcoat / Long Coat',
      'Company Logo',
      'Professional appearance',
      'Neat and tidy presentation',
    ],
  },
]

const extras = [
  { title: 'Company ID Card', description: 'Every staff member carries a verifiable photo ID card.' },
  { title: 'Company Cap', description: 'Branded cap completes the neat, uniform look.' },
]

export default function Uniforms() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Our Team"
        title="Staff Uniforms"
        subtitle="Our staff wear professional uniforms ensuring easy identification and a neat appearance."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {uniforms.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="bg-navy px-6 py-4">
              <h3 className="text-lg font-semibold text-white">{u.title}</h3>
            </div>

            <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 sm:aspect-[4/5]">
              <img
                src={u.image}
                alt={`${u.title} uniform — SPM Facility Services`}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <ul className="space-y-2 px-6 py-6">
              {u.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Extras: ID card + cap */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {extras.map((e) => (
          <div
            key={e.title}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              {e.title.includes('ID') ? <IdCard size={22} /> : <CheckCircle2 size={22} />}
            </div>
            <div>
              <h4 className="font-semibold text-navy">{e.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{e.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-2xl bg-brand-green/10 p-5 text-sm text-navy">
        <Info size={20} className="mt-0.5 shrink-0 text-brand-green" />
        <p>
          Our staff wear professional uniforms and carry company ID cards, ensuring easy
          identification and a neat appearance — so you always know who is working in your space.
        </p>
      </div>
    </div>
  )
}
