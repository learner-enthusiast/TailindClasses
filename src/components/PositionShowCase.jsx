export const PositioningShowcase = () => {
  return (
    <div className="space-y-8">

      {/* DEMO 1: absolute corners */}
      {/* relative — establishes positioning context */}
      <div>
        <p className="text-xs font-mono text-gray-500 mb-2">relative container with absolute children</p>
        <div className="relative h-40 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
          {/* absolute top-2 left-2 — top-left corner */}
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded font-mono">
            top-2 left-2
          </span>
          {/* absolute top-2 right-2 — top-right corner */}
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-mono">
            top-2 right-2
          </span>
          {/* absolute bottom-2 left-2 — bottom-left */}
          <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-mono">
            bottom-2 left-2
          </span>
          {/* absolute bottom-2 right-2 — bottom-right */}
          <span className="absolute bottom-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded font-mono">
            bottom-2 right-2
          </span>
          {/* inset-0 — fills entire parent (top:0 right:0 bottom:0 left:0) */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded font-mono">
            centered (top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2)
          </span>
        </div>
      </div>

      {/* DEMO 2: z-index stacking */}
      <div>
        <p className="text-xs font-mono text-gray-500 mb-2">z-index stacking layers</p>
        {/* relative overflow-hidden — clips children */}
        <div className="relative h-36 overflow-hidden rounded-xl">
          {/* z-10 — lowest layer */}
          <div className="absolute inset-0 z-10 bg-blue-200 rounded-xl flex items-end p-2">
            <code className="text-xs font-mono text-blue-800">z-10 (bottom layer)</code>
          </div>
          {/* z-20 — mid layer, shifted */}
          <div className="absolute top-4 left-12 right-0 bottom-0 z-20 bg-purple-300 rounded-xl flex items-end p-2">
            <code className="text-xs font-mono text-purple-900">z-20 (mid layer)</code>
          </div>
          {/* z-30 — top layer */}
          <div className="absolute top-8 left-24 right-0 bottom-0 z-30 bg-pink-400 rounded-xl flex items-end p-2">
            <code className="text-xs font-mono text-pink-900">z-30 (top layer)</code>
          </div>
        </div>
      </div>

      {/* DEMO 3: Badge / notification dot pattern */}
      <div>
        <p className="text-xs font-mono text-gray-500 mb-2">notification badge — absolute -top-1 -right-1</p>
        <div className="flex gap-6">
          {/* relative — parent for the badge */}
          <div className="relative w-fit">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Inbox
            </button>
            {/* absolute -top-1.5 -right-1.5 — overlaps top-right corner */}
            <span className="absolute -top-1.5 -right-1.5 z-10 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              9
            </span>
          </div>

          {/* Tooltip pattern: group hover:block */}
          <div className="relative group w-fit">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Hover me
            </button>
            {/* absolute bottom-full — appears above the button */}
            {/* invisible group-hover:visible — toggle visibility */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
                            invisible group-hover:visible opacity-0 group-hover:opacity-100
                            transition-all duration-200
                            bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
              Tooltip via absolute + z-50
              {/* Triangle tip: absolute -bottom-1 left-1/2 */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </div>

          {/* inset-0 full overlay */}
          <div className="relative w-32 h-10 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/tailwind/128/40"
              alt="demo"
              className="w-full h-full object-cover"
            />
            {/* inset-0 covers entire parent */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xs font-mono">inset-0 overlay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
