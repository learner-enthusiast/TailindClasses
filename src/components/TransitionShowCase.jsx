export const TransitionsShowcase = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {/* transition-all duration-300 ease-in-out */}
        <div className="group text-center">
          <div className="bg-blue-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-all duration-300 ease-in-out
                          hover:bg-blue-700 hover:scale-110 hover:shadow-xl hover:rounded-2xl">
            transition-all
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">transition-all duration-300 ease-in-out</code>
        </div>

        {/* transition-colors */}
        <div className="group text-center">
          <div className="bg-purple-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-colors duration-500
                          hover:bg-pink-500 hover:text-yellow-200">
            transition-colors
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">transition-colors duration-500</code>
        </div>

        {/* transition-opacity */}
        <div className="text-center">
          <div className="bg-green-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-opacity duration-300
                          hover:opacity-30">
            transition-opacity
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">transition-opacity duration-300</code>
        </div>

        {/* transition-transform: scale */}
        <div className="text-center">
          <div className="bg-red-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-transform duration-300 ease-out
                          hover:scale-125">
            scale-125
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">hover:scale-125 ease-out</code>
        </div>

        {/* rotate */}
        <div className="text-center">
          <div className="bg-yellow-400 text-gray-900 text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-transform duration-500 ease-in-out
                          hover:rotate-180">
            rotate-180
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">hover:rotate-180 duration-500</code>
        </div>

        {/* translate-y */}
        <div className="text-center">
          <div className="bg-indigo-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-transform duration-200 ease-in
                          hover:-translate-y-3">
            -translate-y
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">hover:-translate-y-3 ease-in</code>
        </div>

        {/* transition-shadow */}
        <div className="text-center">
          <div className="bg-white border border-gray-200 text-gray-700 text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-shadow duration-300
                          hover:shadow-2xl">
            transition-shadow
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">transition-shadow hover:shadow-2xl</code>
        </div>

        {/* delay + ease-in-out */}
        <div className="text-center">
          <div className="bg-teal-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-all duration-700 ease-in-out delay-150
                          hover:bg-teal-800 hover:scale-105 hover:-translate-y-1">
            delay-150
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">duration-700 ease-in-out delay-150</code>
        </div>

        {/* skew */}
        <div className="text-center">
          <div className="bg-orange-500 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-transform duration-300
                          hover:skew-x-12">
            skew-x-12
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">hover:skew-x-12 duration-300</code>
        </div>

        {/* ease-linear (robotic) */}
        <div className="text-center">
          <div className="bg-gray-700 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-all duration-500 ease-linear
                          hover:rotate-12 hover:scale-110">
            ease-linear
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">transition-all ease-linear</code>
        </div>

        {/* transition-none — no transition */}
        <div className="text-center">
          <div className="bg-gray-300 text-gray-700 text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-none
                          hover:bg-black hover:text-white hover:scale-110">
            transition-none
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">transition-none (instant snap)</code>
        </div>

        {/* Combined: all transitions together */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-mono px-4 py-6 rounded-xl cursor-pointer
                          transition-all duration-300 ease-in-out
                          hover:from-violet-600 hover:to-pink-500 hover:scale-110 hover:shadow-lg hover:-translate-y-1">
            combined
          </div>
          <code className="text-[10px] text-gray-500 mt-1 block">all props together</code>
        </div>
      </div>
    </div>
  );
};