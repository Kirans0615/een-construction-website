// Design reminder: Neo-Brutalist Industrial Americana for EEN Construction. Reinforce black/yellow brand contrast, asymmetric jobsite panels, blueprint ticks, mechanical hover states, and strong Maryland contractor credibility.
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Brush,
  Building2,
  CheckCircle2,
  ChevronRight,
  Drill,
  Hammer,
  HardHat,
  MapPin,
  PaintBucket,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  SquareDashedMousePointer,
  Star,
  Wrench,
} from "lucide-react";

const logoUrl = `${import.meta.env.BASE_URL}logo.png`;
const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663631220129/JbGuF4MxgbkqoTFViqS9mu/een-hero-maryland-renovation-BNKote7WjDXWBgspsM8E4h.webp";
const servicesImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663631220129/JbGuF4MxgbkqoTFViqS9mu/een-service-collage-8yJRhYVKPH8Qz7E9nQCNXQ.webp";
const blueprintImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663631220129/JbGuF4MxgbkqoTFViqS9mu/een-blueprint-crane-pattern-HYGEJkJyGMrcgrjA5NHVvb.webp";
const workerImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663631220129/JbGuF4MxgbkqoTFViqS9mu/een-worker-detail-9kscarc9bB42qkL27gDM5N.webp";

const services = [
  {
    title: "Interior & exterior painting",
    description:
      "Clean prep, sharp lines, durable coatings, and finish choices that make rooms and exteriors feel new again.",
    icon: PaintBucket,
    marker: "01",
  },
  {
    title: "Drywall hanging & finishing",
    description:
      "Patch work, new board, taping, mudding, sanding, texture repair, and smooth walls ready for paint.",
    icon: SquareDashedMousePointer,
    marker: "02",
  },
  {
    title: "Demolition & clean-outs",
    description:
      "Selective demo, debris control, prep for remodels, and responsible site cleanup before the next phase begins.",
    icon: Hammer,
    marker: "03",
  },
  {
    title: "Tile installation",
    description:
      "Bathroom tile, backsplashes, floor tile, grout refreshes, layout planning, and precise finishing details.",
    icon: Ruler,
    marker: "04",
  },
  {
    title: "Repairs, punch lists & more",
    description:
      "General construction help for the jobs that need a careful hand, a reliable crew, and practical problem-solving.",
    icon: Wrench,
    marker: "05",
  },
];

const process = [
  "Walk the space, listen to the goal, and identify hidden prep work.",
  "Protect floors, contain dust, and stage tools so the job runs clean.",
  "Build, repair, install, paint, or demo with steady communication.",
  "Review the finish, clean the site, and leave the project ready to use.",
];

const stats = [
  ["MD", "Service area"],
  ["5+", "Core trades"],
  ["Clean", "Jobsite standard"],
  ["Ready", "For remodels"],
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0d0d0b] text-stone-100">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0d0d0b]/82 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3" aria-label="EEN Construction home">
            <span className="grid h-14 w-14 place-items-center overflow-hidden bg-white p-1.5 shadow-[7px_7px_0_#e5aa00] transition-transform duration-200 group-hover:-translate-y-0.5">
              <img src={logoUrl} alt="EEN Construction logo" className="h-full w-full object-contain" />
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-2xl font-black uppercase leading-none tracking-tight text-white">EEN</span>
              <span className="block text-[0.66rem] font-black uppercase tracking-[0.32em] text-yellow-400">Construction</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.18em] text-stone-300 lg:flex">
            <a className="nav-cut" href="#services">Services</a>
            <a className="nav-cut" href="#process">Process</a>
            <a className="nav-cut" href="#work">Work Standard</a>
            <a className="nav-cut" href="#contact">Contact</a>
          </nav>

          <a href="tel:+12405550191" className="hidden sm:inline-flex">
            <Button className="industrial-button h-12 rounded-none px-5 font-black uppercase tracking-[0.16em]">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-screen pt-20">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Maryland interior renovation jobsite" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d0d0b_0%,rgba(13,13,11,.92)_28%,rgba(13,13,11,.62)_54%,rgba(13,13,11,.15)_100%)]" />
            <div className="absolute inset-0 blueprint-grid opacity-35" />
          </div>

          <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div {...fadeUp} className="max-w-4xl">
              <div className="mb-6 inline-flex border border-yellow-400/50 bg-black/50 p-1 text-xs font-black uppercase tracking-[0.24em] text-yellow-300 shadow-[8px_8px_0_rgba(229,170,0,.16)]">
                <span className="bg-yellow-400 px-3 py-2 text-black">Maryland</span>
                <span className="px-3 py-2">Painting • Drywall • Demo • Tile</span>
              </div>

              <h1 className="hero-title font-display text-[clamp(4.6rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white">
                Built<br />
                <span className="text-yellow-400">Different.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl font-medium leading-8 text-stone-200 md:text-2xl">
                EEN Construction handles the hard, dusty, detail-heavy work that turns Maryland properties from rough ideas into finished spaces. We bring sharp prep, clean execution, and jobsite pride to painting, drywall, demolition, tiling, and more.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact">
                  <Button className="industrial-button h-14 rounded-none px-7 text-sm font-black uppercase tracking-[0.18em]">
                    Request a walkthrough <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#services">
                  <Button variant="outline" className="h-14 rounded-none border-2 border-white/60 bg-black/25 px-7 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black">
                    View services <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 50, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="hero-plate ml-auto max-w-md border-2 border-yellow-400 bg-[#11100d]/82 p-6 shadow-[18px_18px_0_rgba(229,170,0,.22)] backdrop-blur-md">
                <div className="flex items-start justify-between gap-6 border-b border-yellow-400/30 pb-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-300">Crew status</p>
                    <h2 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-white">Ready for the next build</h2>
                  </div>
                  <HardHat className="h-12 w-12 text-yellow-400" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.map(([value, label]) => (
                    <div key={label} className="border border-white/10 bg-white/[0.055] p-4">
                      <div className="font-display text-3xl font-black uppercase text-yellow-400">{value}</div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-stone-300">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>

          <div className="absolute bottom-0 left-0 right-0 hidden border-y border-yellow-400/30 bg-yellow-400 py-3 text-black md:block">
            <div className="marquee font-display text-xl font-black uppercase tracking-[0.28em]">
              <span>Maryland contractor • Paint clean • Drywall smooth • Demo contained • Tile precise • Repair ready • </span>
              <span>Maryland contractor • Paint clean • Drywall smooth • Demo contained • Tile precise • Repair ready • </span>
            </div>
          </div>
        </section>

        <section id="services" className="relative bg-stone-100 py-24 text-[#11100d] md:py-32">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url(${blueprintImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <motion.div {...fadeUp}>
                <SectionLabel>What we do</SectionLabel>
                <h2 className="section-title mt-5 max-w-xl font-display text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
                  One crew. Many problems solved.
                </h2>
              </motion.div>
              <motion.p {...fadeUp} className="max-w-2xl border-l-8 border-yellow-400 bg-white p-6 text-lg font-semibold leading-8 shadow-[12px_12px_0_rgba(17,16,13,.12)]">
                Renovation work gets messy when trades do not line up. EEN Construction keeps the project moving with practical multi-trade capability: walls, paint, tear-outs, tile, repairs, prep work, and the “can you also fix this?” list that always appears mid-project.
              </motion.p>
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="service-card group relative min-h-[320px] overflow-hidden border-2 border-[#11100d] bg-white p-6 shadow-[10px_10px_0_#11100d] transition duration-200 hover:-translate-y-2 hover:shadow-[16px_16px_0_#e5aa00] lg:even:translate-y-10"
                  >
                    <span className="absolute right-4 top-3 font-display text-6xl font-black text-stone-200 transition-colors group-hover:text-yellow-200">{service.marker}</span>
                    <Icon className="relative z-10 h-12 w-12 text-yellow-500" />
                    <h3 className="relative z-10 mt-8 font-display text-3xl font-black uppercase leading-none tracking-tight">{service.title}</h3>
                    <p className="relative z-10 mt-5 text-sm font-semibold leading-6 text-stone-700">{service.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="relative bg-[#14130f] py-24 md:py-32">
          <div className="container grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 border-l-4 border-t-4 border-yellow-400" />
              <img src={servicesImage} alt="Painting, drywall, demolition, and tile service collage" className="relative z-10 border-2 border-white/20 shadow-[18px_18px_0_rgba(229,170,0,.22)]" />
              <div className="absolute -bottom-7 right-8 z-20 max-w-xs border-2 border-yellow-400 bg-yellow-400 p-5 text-black shadow-[10px_10px_0_#000]">
                <p className="font-display text-3xl font-black uppercase leading-none">No loose ends.</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em]">Prep • Execute • Clean • Review</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <SectionLabel>Work standard</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white">
                Tough work with a clean finish.
              </h2>
              <p className="mt-7 text-lg font-medium leading-8 text-stone-300">
                A good construction job is not just the final photo. It is the way the site is protected, how dust is contained, whether the crew communicates clearly, and how the finished surface holds up after the tools leave.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {["Surface prep before finish work", "Dust and debris control", "Straight lines and level installs", "Clear next-step communication"].map((item) => (
                  <div key={item} className="flex gap-3 border border-white/10 bg-white/[0.055] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                    <span className="text-sm font-black uppercase tracking-[0.12em] text-stone-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="process" className="relative overflow-hidden bg-yellow-400 py-24 text-black md:py-28">
          <div className="absolute -right-16 top-0 h-full w-1/2 skew-x-[-12deg] bg-black/10" />
          <div className="container relative z-10">
            <SectionLabel>How it runs</SectionLabel>
            <div className="mt-6 grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
              <h2 className="font-display text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.07em]">
                From rough to ready.
              </h2>
              <div className="grid gap-4">
                {process.map((step, index) => (
                  <motion.div
                    key={step}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className="grid gap-4 border-2 border-black bg-[#11100d] p-5 text-white shadow-[8px_8px_0_rgba(0,0,0,.25)] sm:grid-cols-[90px_1fr] sm:items-center"
                  >
                    <span className="font-display text-5xl font-black text-yellow-400">0{index + 1}</span>
                    <p className="text-lg font-black uppercase leading-7 tracking-[0.06em]">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-stone-100 py-24 text-[#11100d] md:py-32">
          <div className="container grid gap-12 lg:grid-cols-[.85fr_1fr] lg:items-center">
            <motion.div {...fadeUp}>
              <SectionLabel>Local & practical</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(3rem,7vw,5.8rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
                Serving Maryland homes, rentals, shops, and remodels.
              </h2>
              <p className="mt-7 text-lg font-semibold leading-8 text-stone-700">
                Whether you are refreshing a room, repairing damaged drywall, opening up a space, replacing tile, or preparing a property for the next tenant, EEN Construction brings direct, hands-on help across Maryland.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Residential", "Light commercial", "Rental turnovers", "Remodel prep", "Finish work"].map((tag) => (
                  <span key={tag} className="border-2 border-black bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.16em] shadow-[5px_5px_0_#e5aa00]">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <img src={workerImage} alt="Tile installation detail" className="border-2 border-black shadow-[16px_16px_0_#11100d]" />
              <div className="absolute -left-4 -top-4 border-2 border-black bg-yellow-400 p-4 shadow-[8px_8px_0_#11100d]">
                <Drill className="h-10 w-10" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="relative bg-[#0d0d0b] py-24 md:py-32">
          <div className="absolute inset-0 opacity-55" style={{ backgroundImage: `url(${blueprintImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-[#0d0d0b]/78" />
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-stretch">
              <motion.div {...fadeUp} className="border-2 border-yellow-400 bg-black/65 p-8 shadow-[18px_18px_0_rgba(229,170,0,.20)] md:p-12">
                <SectionLabel>Start the job</SectionLabel>
                <h2 className="mt-5 font-display text-[clamp(3.4rem,8vw,7.2rem)] font-black uppercase leading-[0.8] tracking-[-0.07em] text-white">
                  Need it fixed, finished, or torn out?
                </h2>
                <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-stone-300">
                  Tell EEN Construction what you are trying to get done. We will look at the space, talk through the scope, and help you move from “this needs work” to “this is ready.”
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a href="tel:+12405550191">
                    <Button className="industrial-button h-14 rounded-none px-7 text-sm font-black uppercase tracking-[0.18em]">
                      <Phone className="mr-2 h-5 w-5" /> Call for a quote
                    </Button>
                  </a>
                  <a href="mailto:info@eenconstruction.com?subject=Project%20Request%20for%20EEN%20Construction">
                    <Button variant="outline" className="h-14 rounded-none border-2 border-white/60 bg-transparent px-7 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black">
                      Email project details
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="grid gap-5">
                <div className="contact-tile">
                  <MapPin className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h3>Maryland Service Area</h3>
                    <p>Painting, drywall, demo, tile, repairs, punch lists, and general construction support.</p>
                  </div>
                </div>
                <div className="contact-tile">
                  <ShieldCheck className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h3>Built Around Trust</h3>
                    <p>Respectful crew behavior, protected spaces, clear scope, and cleanup before we leave.</p>
                  </div>
                </div>
                <div className="contact-tile">
                  <BadgeCheck className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h3>Multi-Trade Help</h3>
                    <p>Useful for remodel prep, rental refreshes, damaged walls, room updates, and finish upgrades.</p>
                  </div>
                </div>
                <div className="border-2 border-yellow-400 bg-yellow-400 p-6 text-black shadow-[10px_10px_0_#000]">
                  <div className="flex items-center gap-3">
                    <Star className="h-7 w-7 fill-black" />
                    <h3 className="font-display text-3xl font-black uppercase leading-none">EEN Construction</h3>
                  </div>
                  <p className="mt-3 text-sm font-black uppercase leading-6 tracking-[0.12em]">Maryland contractor energy. Clean finish standards. No generic work.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="EEN Construction logo" className="h-14 w-14 bg-white object-contain p-1" />
            <div>
              <p className="font-display text-2xl font-black uppercase leading-none text-white">EEN Construction</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-yellow-400">Maryland • Built Different</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-stone-400">© {new Date().getFullYear()} EEN Construction. Painting, drywall, demo, tiling, and more.</p>
        </div>
      </footer>
    </div>
  );
}
