const repoUrl = "https://github.com/tahmidbintaslim/promptpay-storefront";

const status = [
  "Not released. There is no download, no price and no checkout.",
  "This repository holds this page only. No plugin code is public yet.",
  "There is no release date.",
];

const planned = [
  "Show a PromptPay QR code (EMVCo format) set to the exact order total.",
  "Let the customer upload a transfer slip on the order page.",
  "Optionally check each slip with a verification service such as SlipOK or EasySlip, using the store's own account.",
  "Reject a slip that was already used for another order.",
  "Update the WooCommerce order status after a slip passes the check.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 pt-20 pb-16">
        <header>
          <p className="inline-block bg-amber-100 text-amber-900 text-sm font-semibold px-4 py-1.5 rounded-full">
            In development
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight mt-6 mb-6 sm:text-5xl">
            PromptPay Flow
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            A planned WooCommerce plugin for stores in Thailand. The plan is
            for customers to pay the order total by PromptPay QR and upload
            their transfer slip, so the store can check the slip before the
            order moves on.
          </p>
        </header>

        <section aria-labelledby="status-heading" className="mt-14">
          <h2 id="status-heading" className="text-2xl font-bold">
            Current status
          </h2>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-slate-700">
            {status.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="planned-heading" className="mt-12">
          <h2 id="planned-heading" className="text-2xl font-bold">
            What it will do
          </h2>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-slate-700">
            {planned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700">
            These are plans, not finished features. They may change before a
            release.
          </p>
        </section>

        <section aria-labelledby="follow-heading" className="mt-12">
          <h2 id="follow-heading" className="text-2xl font-bold">
            Follow along
          </h2>
          <p className="mt-4 text-slate-700">
            Watch the repository on GitHub for updates.
          </p>
          <a
            href={repoUrl}
            className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Follow on GitHub
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <p className="max-w-3xl mx-auto px-6 py-8 text-sm text-slate-700">
          PromptPay Flow is an independent project. It is not affiliated
          with, or endorsed by, the Bank of Thailand, PromptPay, WooCommerce,
          SlipOK or EasySlip. Product names belong to their owners.
        </p>
      </footer>
    </div>
  );
}
