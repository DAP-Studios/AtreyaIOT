import React from 'react';
import { SiteIcon } from '@/components/ui/SiteIcon';

export default function ContactPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1320px] items-center justify-center px-5 pb-20 pt-32">
      <div className="grid w-full max-w-5xl items-start gap-12 rounded-[8px] border border-border bg-white p-8 shadow-brand-md md:grid-cols-[0.9fr_1fr] md:p-12">
        <div>
          <div className="mb-4 border-l-2 border-cyan pl-3 text-[0.7rem] font-black uppercase tracking-[0.18em] text-cyan-dark">Contact</div>
          <h1 className="mb-4 font-display text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.92] text-ink">Talk to an energy systems expert.</h1>
          <p className="mb-10 text-lg leading-8 text-slate">
            Ready to digitize and optimize your industrial operations? Reach out to our team of experts today.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[8px] bg-cyan/10 text-cyan-dark">
                <SiteIcon token="map-pin" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Headquarters</h3>
                <p className="text-slate mt-1">ATREYA INDUSTRIAL AUTOMATION<br/>Gujarat, India</p>
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
              <label className="block text-sm font-bold text-ink mb-1">Name</label>
              <input type="text" className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Email</label>
              <input type="email" className="w-full rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Message</label>
              <textarea rows={4} className="w-full resize-none rounded-[8px] border border-border bg-white px-4 py-3 transition-colors focus:border-blue focus:outline-none" placeholder="How can we help you?"></textarea>
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
