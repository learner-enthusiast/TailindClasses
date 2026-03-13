export const ResponsiveGrid = () => {
  const cards = [
    {
      title: "Flexbox",
      desc: "flex items-center justify-between gap-4",
      icon: "⚡",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Grid",
      desc: "grid grid-cols-3 gap-4 auto-rows-fr",
      icon: "🔲",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Spacing",
      desc: "p-4 m-2 px-6 py-3 mx-auto",
      icon: "📐",
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Typography",
      desc: "text-lg font-bold tracking-wide",
      icon: "✍️",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      title: "Colors",
      desc: "bg-red-500 text-white hover:bg-red-600",
      icon: "🎨",
      color: "bg-red-50 border-red-200",
    },
    {
      title: "Responsive",
      desc: "sm:col-span-2 lg:col-span-1 xl:col-span-3",
      icon: "📱",
      color: "bg-orange-50 border-orange-200",
    },
  ];

  return (
    <div>
      {/* Responsive grid: 1 col → 2 col on sm → 3 col on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(({ title, desc, icon, color }) => (
          <div
            key={title}
            className={`${color} border rounded-xl p-4 hover:shadow-md transition-shadow duration-200`}
          >
            <span className="text-2xl">{icon}</span>
            <h4 className="font-bold text-gray-800 mt-2">{title}</h4>
            <code className="text-xs text-gray-500 font-mono">{desc}</code>
          </div>
        ))}
      </div>

      {/* FOOTER — responsive 4-col grid */}
      <footer className="mt-12 bg-gray-900 text-gray-300 rounded-2xl overflow-hidden">
        <div className="px-8 pt-10 pb-6">
          {/* grid-cols-1 md:grid-cols-4 — stacks on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand col: col-span-1 */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-white font-bold text-lg mb-2">TailwindClass</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Learn Tailwind CSS with real-world component examples and class references.
              </p>
            </div>

            {[
              { title: "Resources", links: ["Docs", "Cheatsheet", "Playground", "Blog"] },
              { title: "Community", links: ["Discord", "GitHub", "Twitter", "Newsletter"] },
              { title: "Legal", links: ["Privacy", "Terms", "Cookies", "License"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar: flex justify-between — space between copyright and socials */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2025 TailwindClass. All rights reserved.</p>
            <div className="flex gap-4">
              {["GitHub", "Twitter", "Discord"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};