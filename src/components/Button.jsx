export const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  onClick,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg border cursor-pointer transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    // bg-blue-600  hover:bg-blue-700  text-white  border-transparent  focus:ring-blue-500
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white border-transparent focus:ring-blue-500",
    // bg-red-600  hover:bg-red-700  — danger/delete actions
    danger:
      "bg-red-600 hover:bg-red-700 text-white border-transparent focus:ring-red-500",
    // bg-green-600 — submit/confirm actions
    success:
      "bg-green-600 hover:bg-green-700 text-white border-transparent focus:ring-green-500",
    // bg-yellow-400 hover:bg-yellow-500 — warning
    warning:
      "bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-transparent focus:ring-yellow-400",
    // bg-transparent  border-gray-300  hover:bg-gray-50 — outlined style
    outline:
      "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
    // bg-gray-800 hover:bg-gray-900 — dark/secondary
    secondary:
      "bg-gray-800 hover:bg-gray-900 text-white border-transparent focus:ring-gray-500",
    // bg-transparent text-red-600 hover:bg-red-50 — ghost danger
    ghost:
      "bg-transparent border-transparent text-red-600 hover:bg-red-50 focus:ring-red-300",
  };

  // px-* py-* text-* — size variants
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {loading && (
        // animate-spin — Tailwind animation utility
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};