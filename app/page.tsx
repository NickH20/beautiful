import { Navbar1 } from "@/components/ui/navbar-1";
import { SplineSceneBasic } from "@/components/ui/splite-demo";
import { EvervaultCardDemo } from "@/components/ui/evervault-card-demo";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { LogoCloudSection } from "@/components/ui/logo-cloud-section";
import { Testimonials } from "@/components/ui/testimonials-section";
import { WorldMapDemo } from "@/components/ui/world-map-demo";
import { FaqsSection } from "@/components/ui/faqs-1";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* Navbar */}
      <Navbar1 />

      {/* Hero — 3D Spline */}
      <section className="px-4 pb-24 max-w-7xl mx-auto">
        <SplineSceneBasic />
      </section>

      {/* Features Tabs */}
      <section className="border-t border-white/5 bg-neutral-900/40">
        <Feature108
          badge="Efferd"
          heading="Everything you need to build stunning web experiences"
          description="Ship faster with production-ready components, seamless integrations, and powerful workflows."
        />
      </section>

      {/* Trusted By — Logo Cloud */}
      <section className="border-t border-white/5 py-4">
        <LogoCloudSection />
      </section>

      {/* Interactive UI */}
      <section className="border-t border-white/5 py-24 bg-neutral-900/40">
        <div className="container mx-auto flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Interactions</p>
            <h2 className="text-3xl font-bold text-white">Beautifully Crafted UI</h2>
            <p className="text-white/50 mt-3 max-w-md mx-auto">
              Hover and interact with components designed to delight your users at every turn.
            </p>
          </div>
          <EvervaultCardDemo />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5">
        <Testimonials />
      </section>

      {/* Global Reach — World Map */}
      <section className="border-t border-white/5">
        <WorldMapDemo />
      </section>

      {/* FAQs */}
      <section className="border-t border-white/5 pb-24 bg-neutral-900/40">
        <FaqsSection />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#footer_gradient)" />
              <defs>
                <linearGradient id="footer_gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-white/60 text-sm">© 2025 Efferd. All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
