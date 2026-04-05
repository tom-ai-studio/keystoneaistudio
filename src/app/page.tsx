import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block mb-6 px-3 py-1 bg-surface-container-low text-primary font-label text-[10px] uppercase tracking-[0.2em] rounded-full border border-outline-variant/15">
              The Editorial Intelligence
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.95] mb-8 tracking-tighter">
              Automate Your Business.{" "}
              <span className="italic text-primary">Save Hours</span> Every
              Week.
            </h1>
            <p className="font-body text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed">
              We build custom automation systems, AI receptionists, and digital
              tools that reduce manual work and keep your business running 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto text-center px-10 py-5 rounded-full text-sm font-label uppercase tracking-widest font-bold text-primary border border-primary/20 hover:bg-surface-container-low transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest"></div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high"></div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container"></div>
              </div>
              <p className="text-secondary text-sm font-label uppercase tracking-wider">
                Reliable automation systems for small businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -skew-x-12 translate-x-1/4 -z-0 opacity-50"></div>
      </section>

      {/* Trusted Tech Strip */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-center text-xs font-label uppercase tracking-[0.3em] text-secondary/60 mb-10">
            Built With Trusted Technology
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
            <Image src="/logos/supabase.svg" alt="Supabase" width={140} height={28} className="h-6 md:h-7 w-auto" />
            <Image src="/logos/n8n.svg" alt="n8n" width={80} height={32} className="h-6 md:h-7 w-auto" />
            <Image src="/logos/twilio.svg" alt="Twilio" width={120} height={32} className="h-6 md:h-7 w-auto" />
            <Image src="/logos/openai.svg" alt="OpenAI" width={130} height={32} className="h-6 md:h-7 w-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 md:mb-24 max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">
              Strategic Architectures for Growth.
            </h2>
            <p className="text-secondary text-lg">
              Our services focus on replacing repetitive human tasks with
              intelligent, high-fidelity systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Custom Automation */}
            <div className="md:col-span-8 group bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <h3 className="font-headline text-3xl mb-4">Custom Automation</h3>
                <p className="text-secondary max-w-md mb-8">
                  End-to-end workflow synchronization that bridges your favorite tools into a single, cohesive engine.
                </p>
                <ul className="space-y-3 text-sm font-label uppercase tracking-wider text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary"></span> CRM &amp; Data Sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary"></span> Automated Reporting
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Receptionist */}
            <div className="md:col-span-4 bg-surface-container-highest p-10 rounded-xl flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-on-surface/5 flex items-center justify-center text-on-surface mb-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-headline text-3xl mb-4">AI Receptionist</h3>
              <p className="text-secondary mb-8">
                Never miss a lead. Intelligent voice and chat agents that qualify prospects and book meetings 24/7.
              </p>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 italic font-headline text-primary">
                &ldquo;Reduced response time from 4 hours to 4 seconds.&rdquo;
              </div>
            </div>

            {/* AI Business Tools */}
            <div className="md:col-span-12 bg-tertiary-container text-on-tertiary-container p-12 rounded-xl flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h3 className="font-headline text-4xl mb-6 italic">AI Business Tools</h3>
                <p className="text-on-tertiary-container/80 text-lg mb-8 leading-relaxed">
                  Proprietary internal tools designed for your specific business logic. From automated content generators to intelligent inventory predictors.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <span className="text-xs font-label uppercase tracking-widest block mb-2 opacity-60">Success Rate</span>
                    <span className="text-2xl font-headline">99.8%</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <span className="text-xs font-label uppercase tracking-widest block mb-2 opacity-60">Hours Saved</span>
                    <span className="text-2xl font-headline">30+/wk</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full h-64 bg-black/10 rounded-xl overflow-hidden flex items-center justify-center">
                <span className="text-on-tertiary-container/30 font-headline text-2xl italic">Neural Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="font-headline text-5xl md:sticky md:top-32">The Keystone Methodology.</h2>
            </div>
            <div className="md:w-2/3 space-y-24">
              <div className="group">
                <span className="text-primary font-headline text-6xl mb-6 block opacity-20 group-hover:opacity-100 transition-opacity">01</span>
                <h3 className="font-headline text-3xl mb-4">We learn your workflow.</h3>
                <p className="text-secondary text-lg leading-relaxed max-w-xl">
                  We dive deep into your current operations, mapping every manual touchpoint, spreadsheet, and email thread to identify critical bottlenecks.
                </p>
              </div>
              <div className="group">
                <span className="text-primary font-headline text-6xl mb-6 block opacity-20 group-hover:opacity-100 transition-opacity">02</span>
                <h3 className="font-headline text-3xl mb-4">We build the automation.</h3>
                <p className="text-secondary text-lg leading-relaxed max-w-xl">
                  Our engineers construct a bespoke system connecting your tools. We test for edge cases to ensure 100% reliability.
                </p>
              </div>
              <div className="group">
                <span className="text-primary font-headline text-6xl mb-6 block opacity-20 group-hover:opacity-100 transition-opacity">03</span>
                <h3 className="font-headline text-3xl mb-4">Your system runs automatically.</h3>
                <p className="text-secondary text-lg leading-relaxed max-w-xl">
                  Launch and scale. Your business now operates with precision&mdash;fast, and always-on without manual intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
