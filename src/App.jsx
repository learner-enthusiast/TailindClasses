import { useState } from "react";
import { Button } from "./components/Button";
import { Spinner } from "./components/Spinner";
import { ProfileCard } from "./components/ProfileCard";
import { TransitionsShowcase } from "./components/TransitionShowCase";
import { PositioningShowcase } from "./components/PositionShowCase";
import { ResponsiveGrid } from "./components/ResponsiveGrid";
import { StickyHeader } from "./components/StickHeader";


// 1. REUSABLE BUTTON COMPONENT
// Tailwind: bg-*, hover:bg-*, text-*, font-*, px-*, py-*,
//           rounded-*, border, border-*, shadow-*, cursor-*,
//           disabled:opacity-*, disabled:cursor-*, focus:outline-*,
//           focus:ring-*, active:scale-*, transition-all
// ============================================================


// ============================================================
// 2. LOADING SPINNER COMPONENT
// Tailwind: animate-spin, animate-ping, animate-bounce,
//           animate-pulse, border-*, rounded-full,
//           w-*, h-*, border-t-transparent
// ============================================================

// ============================================================
// 3. STICKY HEADER
// Tailwind: sticky top-0 z-50 — sticks to top on scroll
//           backdrop-blur-md bg-white/80 — glassmorphism
//           shadow-sm border-b — separation
//           flex items-center justify-between gap-* px-* py-*
//           hidden md:flex — responsive visibility
// ============================================================


// ============================================================
// 4. PROFILE CARD
// Tailwind: rounded-2xl shadow-lg overflow-hidden
//           object-cover — image sizing
//           aspect-square — forces 1:1 ratio
//           ring-* ring-offset-* — avatar border ring
//           group hover:scale-105 — group hover effects
//           truncate — text overflow ellipsis
// ============================================================


// ============================================================
// 5. RESPONSIVE GRID LAYOUT + FOOTER
// Tailwind: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
//           gap-* — grid gap
//           col-span-* — span multiple columns
//           place-items-center — centering in grid cell
//           auto-rows-* — implicit row sizing
// ============================================================


// ============================================================
// 6. TRANSITION PROPERTIES SHOWCASE
// transition-none | transition-all | transition-colors |
// transition-opacity | transition-shadow | transition-transform
// duration-75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000
// ease-linear | ease-in | ease-out | ease-in-out
// delay-75 | delay-150 | delay-300 | delay-500
// hover:scale-* | hover:rotate-* | hover:-translate-y-*
// hover:opacity-* | hover:bg-* | hover:shadow-*
// ============================================================


// ============================================================
// 7. RELATIVE / ABSOLUTE / Z-INDEX POSITIONING
// Tailwind: relative | absolute | fixed | sticky
//           top-* | right-* | bottom-* | left-*
//           inset-* | inset-x-* | inset-y-*
//           z-0 | z-10 | z-20 | z-30 | z-40 | z-50 | z-auto
//           overflow-hidden (clips absolute children)
//           -translate-x-1/2 -translate-y-1/2 (centering trick)
// ============================================================

// ============================================================
// MAIN APP — Assembles all components
// ============================================================
export default function TailwindShowcase() {
  const [loadingBtn, setLoadingBtn] = useState(false);

  const handleLoadingDemo = () => {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 2000);
  };

  return (
    // min-h-screen bg-gray-50 — full page background
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* STICKY HEADER */}
      <StickyHeader />


      <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">

        {/* ─── SECTION: Buttons ─── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            1. Reusable Buttons
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-4">
            bg-* hover:bg-* text-* font-* px-* py-* rounded-* border focus:ring-* active:scale-95 disabled:opacity-50 animate-spin
          </p>

          {/* Variants row */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Variants</p>
              {/* flex flex-wrap gap-3 — wrapping flex row */}
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Submit</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">States</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>Disabled</Button>
                <Button loading={loadingBtn} onClick={handleLoadingDemo}>
                  {loadingBtn ? "Loading…" : "Click for Loading"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION: Spinners ─── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            2. Loading Spinners
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-4">
            animate-spin  animate-ping  animate-bounce  animate-pulse  border-t-transparent
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            {/* flex items-center gap-12 flex-wrap */}
            <div className="flex items-center gap-12 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Spinner type="border" size="lg" />
                <code className="text-xs text-gray-400">border spinner</code>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner type="ping" />
                <code className="text-xs text-gray-400">animate-ping</code>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner type="dots" />
                <code className="text-xs text-gray-400">animate-bounce dots</code>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner type="pulse" />
                <code className="text-xs text-gray-400">animate-pulse skeleton</code>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION: Profile Card ─── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            3. Profile Card
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-4">
            rounded-2xl shadow-lg overflow-hidden object-cover ring-* -mt-10 line-clamp-2 grid divide-x aspect-square
          </p>
          {/* flex flex-wrap gap-6 */}
          <div className="flex flex-wrap gap-6">
            <ProfileCard
              name="Alex Rivera"
              role="Senior UI Engineer"
              bio="Building delightful interfaces with Tailwind CSS. Open source contributor and design systems enthusiast."
              followers="12.4k"
              following="843"
              posts="284"
            />
            <ProfileCard
              name="Sam Chen"
              role="Full Stack Developer"
              bio="TypeScript lover. Making the web faster, one commit at a time."
              followers="5.2k"
              following="310"
              posts="97"
            />
          </div>
        </section>

        {/* ─── SECTION: Transitions ─── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            4. Transition Properties
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-4">
            transition-{"{"}all | colors | opacity | shadow | transform{"}"} · duration-{"{"}75–1000{"}"} · ease-{"{"}linear | in | out | in-out{"}"} · delay-{"{"}75–500{"}"} · hover:scale-* rotate-* translate-* skew-*
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-sm text-gray-400 mb-4">Hover each card to see the transition effect</p>
            <TransitionsShowcase />
          </div>
        </section>

        {/* ─── SECTION: Positioning + Z-index ─── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            5. Relative / Absolute / Z-Index
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-4">
            relative · absolute · fixed · sticky · top-* right-* bottom-* left-* · inset-* · z-{"{"}10–50{"}"} · overflow-hidden · -translate-x-1/2
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <PositioningShowcase />
          </div>
        </section>

        {/* ─── SECTION: Responsive Grid + Footer ─── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            6. Responsive Grid + Footer
          </h2>
          <p className="text-sm text-gray-500 font-mono mb-4">
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 · gap-* · col-span-* · place-items-center · divide-x · tracking-widest
          </p>
          <ResponsiveGrid />
        </section>

      </main>
    </div>
  );
}