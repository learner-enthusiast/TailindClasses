export const Spinner = ({ type = "border", size = "md", color = "blue" }) => {
  const sizes = { sm: "w-4 h-4", md: "w-8 h-8", lg: "w-14 h-14" };
  const s = sizes[size];

  if (type === "border")
    // animate-spin  border-4  border-t-transparent — classic spinner
    return (
      <div
        className={`${s} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`}
      />
    );

  if (type === "ping")
    // animate-ping  opacity-75 — ripple effect
    return (
      <span className="relative flex h-8 w-8">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-600" />
      </span>
    );

  if (type === "dots")
    // animate-bounce  delay-* — staggered dots
    return (
      <div className="flex gap-1.5 items-center">
        {[0, 150, 300].map((delay, i) => (
          <span
            key={i}
            style={{ animationDelay: `${delay}ms` }}
            className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce"
          />
        ))}
      </div>
    );

  if (type === "pulse")
    // animate-pulse — skeleton/fade pulse
    return (
      <div className="space-y-3 w-64">
        <div className="h-4 bg-gray-300 rounded animate-pulse" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-4/6" />
      </div>
    );

  return null;
};
