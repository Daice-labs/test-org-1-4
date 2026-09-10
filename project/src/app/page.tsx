export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👗</span>
          <span className="text-xl font-bold text-brand-700">ThreadTrack</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="text-sm font-medium bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-brand-50 to-white">
        <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Clothes Store CRM & Inventory
        </span>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mb-6">
          Run your clothing store smarter with{" "}
          <span className="text-brand-600">ThreadTrack</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-10">
          Track inventory, manage customers, process sales, and grow your
          fashion business — all from one powerful dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/register"
            className="bg-brand-600 text-white text-sm font-semibold px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-md"
          >
            Start for Free
          </a>
          <a
            href="/dashboard"
            className="bg-white text-brand-700 text-sm font-semibold px-8 py-3 rounded-lg border border-brand-300 hover:bg-brand-50 transition-colors"
          >
            View Demo
          </a>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything your store needs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📦",
                title: "Inventory Management",
                description:
                  "Track stock levels by size, color, and category. Get low-stock alerts before you run out.",
              },
              {
                icon: "🛒",
                title: "Sales & Orders",
                description:
                  "Process orders quickly, manage returns, and keep your sales pipeline organised.",
              },
              {
                icon: "👥",
                title: "Customer CRM",
                description:
                  "Build customer profiles, track purchase history, and nurture loyalty with targeted campaigns.",
              },
              {
                icon: "📊",
                title: "Analytics & Reports",
                description:
                  "Understand your best-selling items, revenue trends, and customer behaviour at a glance.",
              },
              {
                icon: "🏷️",
                title: "Product Catalogue",
                description:
                  "Organise your clothing catalogue with rich product details, images, and variant management.",
              },
              {
                icon: "🔔",
                title: "Smart Alerts",
                description:
                  "Stay on top of restocking needs, pending orders, and important customer activity automatically.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:border-brand-200 transition-colors"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-700 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to take control of your store?
        </h2>
        <p className="text-brand-200 mb-8 max-w-md mx-auto">
          Join clothing store owners already using ThreadTrack to save time and
          boost sales.
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-brand-700 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition-colors shadow"
        >
          Get Started Free
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm text-center py-6">
        © {new Date().getFullYear()} ThreadTrack. All rights reserved.
      </footer>
    </main>
  );
}
