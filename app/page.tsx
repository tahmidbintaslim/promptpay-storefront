import React from 'react';

export default function LandingPage() {
  const checkoutUrl = "https://checkout.freemius.com/v2/..."; // Insert your generated dashboard link here

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto pt-20 pb-16 px-6 text-center">
        <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
          For Thai WooCommerce Stores 🚀
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight mt-6 mb-6 text-slate-900 sm:text-6xl">
          Automate Your PromptPay <br />
          <span className="text-blue-600">Slip Verification</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Stop cross-checking bank accounts manually. Instantly verify bank slips, catch fake screenshots, and clear orders using our secure API-driven gateway plugin.
        </p>
      </header>

      {/* Pricing Module */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Free Tier Details */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Core Engine</h3>
              <p className="text-slate-500 mt-2 text-sm">Perfect for hobbyists and early-stage shops.</p>
              <div className="text-4xl font-extrabold mt-6 mb-6">0 THB <span className="text-sm font-normal text-slate-400">/ forever</span></div>
              <ul className="space-y-3.5 text-slate-600 text-sm border-t border-slate-100 pt-6">
                <li className="flex items-center">✓ Dynamic EMVCo QR Code Generation</li>
                <li className="flex items-center">✓ Exact Order Amount Binding</li>
                <li className="flex items-center">✓ Manual Customer Slip Upload Field</li>
              </ul>
            </div>
            <a href="https://wordpress.org/plugins/..." className="mt-8 block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition">
              Download via WP.org
            </a>
          </div>

          {/* Pro Tier Details */}
          <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl relative flex flex-col justify-between">
            <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Professional Automation</h3>
              <p className="text-slate-500 mt-2 text-sm">For growing brands processing daily volumes.</p>
              <div className="text-4xl font-extrabold mt-6 mb-6">$59 USD <span className="text-sm font-normal text-slate-400">/ year (~1,950 THB)</span></div>
              <ul className="space-y-3.5 text-slate-600 text-sm border-t border-blue-50 pt-6">
                <li className="flex items-center font-medium text-blue-700">✓ Real-time API Slip Verification (Slipok/EasySlip)</li>
                <li className="flex items-center">✓ Instant Automated WooCommerce Status Updates</li>
                <li className="flex items-center">✓ Duplicate Slip Reuse / Fraud Protection Locks</li>
                <li className="flex items-center">✓ Automated Background Plugin Core Updates</li>
              </ul>
            </div>
            <a href={checkoutUrl} className="mt-8 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition">
              Get Instant Pro Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
