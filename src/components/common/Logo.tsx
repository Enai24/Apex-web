// React is used implicitly with JSX
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';

export default function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 hover:opacity-95 transition-opacity"
      aria-label="Apex Enterprises - Home"
    >
      <div className="relative w-12 h-12 overflow-hidden flex items-center justify-center">
        <img
          src={logoImage}
          alt="Apex Enterprises"
          className="h-full w-auto object-contain"
          width="48"
          height="48"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-[#F68B1F] leading-none">Apex</span>
        <span className="text-md font-semibold text-[#1F4287] leading-tight">Enterprises</span>
        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-medium leading-none">Est. 2003</span>
      </div>
    </Link>
  );
}