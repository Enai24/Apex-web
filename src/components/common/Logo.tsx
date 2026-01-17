import Link from 'next/link';

/**
 * Databricks-Style Logo Component
 * Design: Clean, navy text with orange-red accent
 */

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
      aria-label="Apex Enterprises - Home"
    >
      <img
        src="/logo.png"
        alt="Apex Enterprises"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        width="40"
        height="40"
      />
      <div className="flex flex-col justify-center">
        <span className="text-[18px] font-bold text-[#F68B1F] leading-none tracking-tight">APEX</span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B292E] mt-0.5 font-extrabold">Enterprises</span>
        <span className="text-[7px] font-bold text-[#1B292E]/60 tracking-widest mt-1">EST. 2003</span>
      </div>
    </Link>
  );
}