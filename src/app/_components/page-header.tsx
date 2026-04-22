export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="animate-rise border-b border-hairline">
      <div className="mx-auto w-full max-w-3xl px-6 pb-20 pt-28 sm:pt-32">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
          {eyebrow}
        </p>
        <h1 className="font-display mt-5 text-balance text-[clamp(40px,6vw,64px)] font-bold leading-[1.08] tracking-[-0.025em] text-foreground">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-[1.75] text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
