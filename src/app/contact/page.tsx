import React from 'react';
import Image from 'next/image';
import { SiteIcon } from '@/components/ui/SiteIcon';
import contactImage from '@/assets/profile/energy-meter.png';

export default function ContactPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1320px] items-center justify-center px-5 pb-20 pt-32">
      <div className="grid w-full max-w-5xl items-start gap-12 rounded-[8px] border border-border bg-white p-8 shadow-brand-md md:grid-cols-[0.9fr_1fr] md:p-12">
        <div>
          <div className="mb-4 border-l-2 border-cyan pl-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyan-dark">Contact</div>
          <h1 className="mb-4 font-display text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.92] text-ink">Talk to an energy systems expert.</h1>
          <p className="mb-10 text-lg leading-8 text-slate">
            Tell us about the plant, utility line, or monitoring challenge you want to solve. We’ll help you shape the right instrumentation, dashboard, and alerting plan.
          </p>

          <div className="mb-8 overflow-hidden rounded-[10px] border border-border bg-snow shadow-brand-sm">
            <div className="relative h-52">
              <Image src={contactImage} alt="Industrial monitoring reference" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-white p-4">
                <div className="text-xs font-black uppercase tracking-[0.12em] text-cyan-dark">Response time</div>
                <div className="mt-1 text-sm font-semibold text-ink">Within 1 business day</div>
              </div>
              <div className="bg-white p-4">
                <div className="text-xs font-black uppercase tracking-[0.12em] text-cyan-dark">Support</div>
                <div className="mt-1 text-sm font-semibold text-ink">Remote and on-site</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[8px] bg-cyan/10 text-cyan-dark">
                <SiteIcon token="map-pin" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Headquarters</h3>
                <p className="text-slate mt-1">Atreya Industrial Automation<br/>Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[8px] bg-cyan/10 text-cyan-dark">
                <SiteIcon token="mail" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Email Us</h3>
                <a href="mailto:sales@atreya.in" className="text-blue hover:underline mt-1 block">sales@atreya.in</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[8px] bg-cyan/10 text-cyan-dark">
                <SiteIcon token="phone" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Call Us</h3>
                <a href="tel:+917900000000" className="text-blue hover:underline mt-1 block">+91 79000 00000</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[8px] bg-cyan/10 text-cyan-dark">
                <SiteIcon token="globe" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Website</h3>
                <a href="https://www.atreya.in" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline mt-1 block">www.atreya.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[8px] border border-border bg-snow p-8">
          <h3 className="mb-6 font-display text-[2rem] font-bold leading-none text-ink">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Company</label>
              <input type="text" className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="Company name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Name</label>
              <input type="text" className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Phone</label>
              <input type="tel" className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="+91 98XXXXXX00" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Email</label>
              <input type="email" className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Service Interested In</label>
              <select className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none">
                <option>DG Monitoring</option>
                <option>Gas Flow Monitoring</option>
                <option>HVAC Monitoring</option>
                <option>Solar Monitoring</option>
                <option>Steam Monitoring</option>
                <option>Transformer Monitoring</option>
                <option>UPS Monitoring</option>
                <option>Water Monitoring</option>
                <option>Air Quality Monitoring</option>
                <option>Compressed Air Monitoring</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Project Details</label>
              <textarea rows={5} className="w-full resize-none rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="Tell us the site name, number of assets, monitoring goals, and any timeline constraints."></textarea>
            </div>
            <button type="button" className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-blue-deep py-3.5 font-bold text-white shadow-[0_4px_18px_rgba(0,32,74,0.28)] transition-all hover:shadow-[0_8px_32px_rgba(0,32,74,0.34)]">
              Send Message <SiteIcon token="arrow-right" className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
