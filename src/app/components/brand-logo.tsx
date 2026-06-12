export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <circle cx="20" cy="20" r="18.5" stroke="#B89B5E" strokeWidth="0.75" />
        <text
          x="20"
          y="25"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="13"
          fill="#B89B5E"
          letterSpacing="1"
        >
          EŚ
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-[22px] text-charcoal tracking-wide leading-tight">
          Ewa Świerzak
        </span>
        <span className="font-ui text-[8px] text-muted tracking-[0.25em] uppercase mt-0.5">
          Kosmetologia
        </span>
      </div>
    </div>
  );
}
