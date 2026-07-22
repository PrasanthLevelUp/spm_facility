export const company = {
  name: 'SPM Facility Services',
  shortName: 'SPM',
  tagline: 'Professional Facility & Maintenance Services',
  phone: '+91 81484 48182',
  phoneRaw: '+918148448182',
  telLink: 'tel:+918148448182',
  email: 'info@spmfacility.in',
  emailLink: 'mailto:info@spmfacility.in',
  location: 'Chengalpattu, Tamil Nadu, India',
  whatsappNumber: '918148448182',
  whatsappBase: 'https://wa.me/918148448182',
}

export const whatsappLink = (message: string) =>
  `${company.whatsappBase}?text=${encodeURIComponent(message)}`

export const defaultWhatsapp = whatsappLink(
  'Hi SPM Facility, I would like to know more about your services.'
)

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Uniforms', path: '/uniforms' },
  { label: 'Contact', path: '/contact' },
]

export type ServiceItem = {
  name: string
  description: string
  icon: string
  image: string
}

export const services: ServiceItem[] = [
  {
    name: 'Electrical Works',
    description: 'Wiring, repairs, installations and safety checks by certified electricians.',
    icon: 'Zap',
    image: 'electrical',
  },
  {
    name: 'Plumbing Services',
    description: 'Leak fixing, pipe fitting, sanitary and water supply solutions.',
    icon: 'Droplets',
    image: 'plumbing',
  },
  {
    name: 'Housekeeping',
    description: 'Daily cleaning and upkeep for homes, offices and commercial spaces.',
    icon: 'Sparkles',
    image: 'housekeeping',
  },
  {
    name: 'Deep Cleaning',
    description: 'Thorough deep cleaning services for a spotless, hygienic environment.',
    icon: 'Wind',
    image: 'deepCleaning',
  },
  {
    name: 'CCTV Installation & Maintenance',
    description: 'Surveillance camera setup, monitoring and regular maintenance.',
    icon: 'Camera',
    image: 'cctv',
  },
  {
    name: 'General Maintenance',
    description: 'All-round repair and upkeep to keep your property running smoothly.',
    icon: 'Wrench',
    image: 'maintenance',
  },
  {
    name: 'Security Services',
    description: 'Trained security personnel for round-the-clock safety and peace of mind.',
    icon: 'Shield',
    image: 'security',
  },
  {
    name: 'Facility Support Staff',
    description: 'Reliable support staff to manage your facility operations efficiently.',
    icon: 'Users',
    image: 'supportStaff',
  },
]

export type IndustryItem = {
  name: string
  icon: string
  color: string
}

export const industries: IndustryItem[] = [
  { name: 'Apartment Associations', icon: 'Building2', color: 'bg-blue-500' },
  { name: 'Villas', icon: 'Home', color: 'bg-emerald-500' },
  { name: 'Schools', icon: 'GraduationCap', color: 'bg-amber-500' },
  { name: 'Hospitals', icon: 'Cross', color: 'bg-rose-500' },
  { name: 'Commercial Buildings', icon: 'Building', color: 'bg-indigo-500' },
  { name: 'Factories', icon: 'Factory', color: 'bg-slate-600' },
  { name: 'Offices', icon: 'Briefcase', color: 'bg-cyan-600' },
  { name: 'Retail Shops', icon: 'ShoppingBag', color: 'bg-fuchsia-500' },
]

export type ReasonItem = {
  title: string
  icon: string
  description: string
}

export const reasons: ReasonItem[] = [
  { title: 'Professional Staff', icon: 'UserCheck', description: 'Trained and courteous professionals for every job.' },
  { title: 'Verified Team', icon: 'BadgeCheck', description: 'Background-verified team you can trust in your space.' },
  { title: 'On-Time Service', icon: 'Clock', description: 'Punctual service that respects your schedule.' },
  { title: 'Transparent Pricing', icon: 'DollarSign', description: 'Clear, upfront pricing with no hidden charges.' },
  { title: 'Quick Response', icon: 'Zap', description: 'Fast response to your enquiries and service requests.' },
  { title: 'Customer Satisfaction', icon: 'Star', description: 'Committed to delivering service that delights.' },
]

export const socials = [
  { label: 'Facebook', icon: 'Facebook', url: '#' },
  { label: 'Instagram', icon: 'Instagram', url: '#' },
  { label: 'YouTube', icon: 'Youtube', url: '#' },
]

// Hero copy
export const hero = {
  headline: 'Reliable Electrical, Plumbing & Facility Services in Chengalpattu',
  subtitle:
    'Professional maintenance solutions for Apartments, Villas, Offices, Schools, Hospitals and Commercial Buildings.',
}

// Trust strip shown right below the hero
export const trustPoints = [
  { label: 'Verified Staff', icon: 'BadgeCheck' },
  { label: 'Uniformed Professionals', icon: 'Shirt' },
  { label: 'On-Time Service', icon: 'Clock' },
  { label: 'Transparent Pricing', icon: 'IndianRupee' },
  { label: 'Dedicated Support', icon: 'Headset' },
  { label: 'WhatsApp Booking', icon: 'MessageCircle' },
]

// How It Works — 4 simple steps
export type StepItem = { step: string; title: string; description: string; icon: string }

export const howItWorks: StepItem[] = [
  {
    step: '1',
    title: 'Call or WhatsApp Us',
    description: 'Reach out with your requirement — we respond quickly.',
    icon: 'PhoneCall',
  },
  {
    step: '2',
    title: 'Site Visit & Quote',
    description: 'We assess your needs and share transparent pricing.',
    icon: 'ClipboardList',
  },
  {
    step: '3',
    title: 'Professional Service',
    description: 'Our verified, uniformed team completes the work.',
    icon: 'Wrench',
  },
  {
    step: '4',
    title: 'Customer Satisfaction',
    description: 'We ensure you are happy with every service.',
    icon: 'ThumbsUp',
  },
]

// Areas served (helps local SEO)
export const serviceAreas = [
  'Chengalpattu',
  'Mahindra City',
  'Maraimalai Nagar',
  'Guduvancheri',
  'Singaperumal Koil',
  'Thiruporur',
  'Kelambakkam',
]

// Testimonials placeholder (replace with real Google reviews later)
export type Testimonial = { name: string; role: string; text: string }

export const testimonials: Testimonial[] = [
  {
    name: 'Reviews coming soon',
    role: 'Chengalpattu',
    text: 'We are just getting started. Real customer reviews will appear here soon.',
  },
  {
    name: 'Reviews coming soon',
    role: 'Apartment Association',
    text: 'Be one of our first customers and help build the SPM story.',
  },
  {
    name: 'Reviews coming soon',
    role: 'Local Business',
    text: 'Your feedback will be featured here after your first service.',
  },
]

// FAQ (also used for FAQ schema)
export type FaqItem = { question: string; answer: string }

export const faqs: FaqItem[] = [
  {
    question: 'Do you provide emergency electrical services?',
    answer:
      'Yes. Call or WhatsApp us and our team will respond as quickly as possible for urgent electrical issues across Chengalpattu and nearby areas.',
  },
  {
    question: 'Do you offer annual maintenance contracts (AMC)?',
    answer:
      'Yes, we offer flexible maintenance plans for apartments, offices and commercial buildings. Contact us for a customised quote.',
  },
  {
    question: 'Do you provide housekeeping for apartments?',
    answer:
      'Absolutely. We provide daily housekeeping and deep cleaning for apartment associations, villas, offices and commercial spaces.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We serve Chengalpattu, Mahindra City, Maraimalai Nagar, Guduvancheri, Singaperumal Koil, Thiruporur, Kelambakkam and surrounding areas.',
  },
]
