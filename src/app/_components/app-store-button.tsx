type Props = {
  variant?: "light" | "glass";
  size?: "md" | "lg";
};

export function AppStoreButton({ variant = "light", size = "md" }: Props) {
  const base =
    "group inline-flex items-center gap-3 rounded-2xl transition-all will-change-transform hover:-translate-y-[1px]";
  const sizing = size === "lg" ? "h-16 px-7" : "h-14 px-6";
  const skin =
    variant === "glass"
      ? "border border-white/25 bg-white/10 text-foreground backdrop-blur-xl hover:bg-white/15"
      : "bg-foreground text-background shadow-[0_18px_40px_-16px_rgba(255,230,210,0.25)] hover:shadow-[0_24px_52px_-18px_rgba(255,230,210,0.35)]";

  return (
    <a
      href="#"
      aria-label="Mac App Store에서 다운로드"
      className={`${base} ${sizing} ${skin}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="currentColor"
        className={size === "lg" ? "h-8 w-8" : "h-7 w-7"}
      >
        <path d="M17.05 12.04a4.72 4.72 0 0 1 2.25-3.96 4.85 4.85 0 0 0-3.82-2.06c-1.6-.17-3.14.94-3.96.94-.83 0-2.1-.92-3.45-.9a5.09 5.09 0 0 0-4.28 2.61c-1.83 3.17-.47 7.86 1.31 10.43.87 1.26 1.9 2.67 3.25 2.62 1.3-.05 1.8-.84 3.38-.84 1.57 0 2.03.84 3.42.82 1.41-.02 2.3-1.27 3.16-2.54a11.24 11.24 0 0 0 1.44-2.94 4.57 4.57 0 0 1-2.7-4.18zM14.5 4.28A4.65 4.65 0 0 0 15.57 1a4.74 4.74 0 0 0-3.05 1.58 4.4 4.4 0 0 0-1.1 3.15 3.9 3.9 0 0 0 3.08-1.45z" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span
          className={`font-sans font-medium tracking-wider ${
            variant === "glass" ? "text-white/75" : "text-background/70"
          } ${size === "lg" ? "text-[11px]" : "text-[10px]"}`}
        >
          DOWNLOAD ON THE
        </span>
        <span
          className={`font-display font-bold tracking-[-0.01em] ${
            size === "lg" ? "text-[20px]" : "text-[17px]"
          }`}
        >
          Mac App Store
        </span>
      </span>
    </a>
  );
}
