import React from 'react';
import { SiteIcon } from '@/components/ui/SiteIcon';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 max-w-[1320px] mx-auto px-5 min-h-[70vh] flex items-center justify-center">
      <div className="bg-white border border-border p-10 md:p-16 rounded-[2rem] shadow-brand-lg w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">Get in <span className="text-blue">Touch</span></h1>
          <p className="text-slate mb-10 text-lg">
            Ready to digitize and optimize your industrial operations? Reach out to our team of experts today.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 text-blue">
                <SiteIcon token="map-pin" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Headquarters</h3>
                <p className="text-slate mt-1">ATREYA INDUSTRIAL AUTOMATION<br/>Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 text-blue">
                <SiteIcon token="mail" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Email Us</h3>
                <a href="mailto:sales@atreya.in" className="text-blue hover:underline mt-1 block">sales@atreya.in</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 text-blue">
                <SiteIcon token="🌍" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg">Website</h3>
                <a href="https://www.atreya.in" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline mt-1 block">www.atreya.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cool p-8 rounded-3xl border border-border">
          <h3 className="text-2xl font-bold text-ink mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Name</label>
              <input type="text" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-blue transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Email</label>
              <input type="email" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-blue transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-1">Message</label>
              <textarea rows={4} className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-blue transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-gradient-primary text-white font-bold py-3.5 rounded-xl shadow-[0_4px_18px_rgba(0,82,204,0.28)] hover:shadow-[0_8px_32px_rgba(0,82,204,0.4)] transition-all flex items-center justify-center gap-2">
              Send Message <SiteIcon token="arrow-right" className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
