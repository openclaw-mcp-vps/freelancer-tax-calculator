export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Freelancers Earning $50k+
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Real-time tax estimates<br />
          <span className="text-[#58a6ff]">as you invoice</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Know your quarterly tax bill before it hits. FreelanceTax calculates your obligations instantly as you log invoices — factoring in deductions and multiple income streams.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Real-time calculation", "Quarterly estimates", "Deduction tracking", "Multi-income support", "Location-based tax rules"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Log your invoices", desc: "Enter client payments as you send them. We track every dollar." },
            { step: "2", title: "Add deductions", desc: "Home office, equipment, subscriptions — claim what's yours." },
            { step: "3", title: "See your tax bill", desc: "Instant quarterly estimate updates with every change you make." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center text-sm mb-3">{item.step}</div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices",
              "Real-time tax estimates",
              "Deduction tracking",
              "Quarterly tax reports",
              "Multiple income streams",
              "Location-based tax rules",
              "Email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get started
          </a>
          <p className="mt-3 text-xs text-[#484f58]">7-day free trial included</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How accurate are the tax estimates?",
              a: "Our engine applies current federal self-employment tax rates and common deduction rules. We recommend confirming final numbers with a CPA, but our estimates are typically within 2-3% of actual liability."
            },
            {
              q: "Can I track income from multiple clients?",
              a: "Yes. Add unlimited clients and income streams. FreelanceTax aggregates everything and calculates your total quarterly obligation across all sources."
            },
            {
              q: "What happens if I cancel?",
              a: "Cancel anytime from your account settings. You keep access until the end of your billing period and can export all your data before leaving."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        <p>© {new Date().getFullYear()} FreelanceTax. Not a substitute for professional tax advice.</p>
      </footer>
    </main>
  );
}
