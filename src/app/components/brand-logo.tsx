export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <circle cx="23" cy="23" r="21.5" stroke="#B89B5E" strokeWidth="0.75" />
        <text
          x="23"
          y="28.5"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="15"
          fill="#B89B5E"
          letterSpacing="1"
        >
          EŚ
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-[26px] text-charcoal tracking-wide leading-tight">
          Ewa Świerzak
        </span>
        <span className="font-ui text-[9px] text-muted tracking-[0.25em] uppercase mt-0.5">
          Kosmetologia
        </span>
      </div>
    </div>
  );
}
