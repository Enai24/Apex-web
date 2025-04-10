import React from 'react';

declare module 'lucide-react' {
  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }

  export type Icon = React.FC<IconProps>;

  export const ArrowRight: Icon;
  export const Users: Icon;
  export const Building2: Icon;
  export const Award: Icon;
  export const Globe2: Icon;
  export const TrendingUp: Icon;
  export const GraduationCap: Icon;
  export const ChevronRight: Icon;
  // Add other icons as needed
}
