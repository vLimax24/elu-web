import { icons, LucideIcon } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

export interface IconProps extends ComponentPropsWithoutRef<LucideIcon> {
  name: keyof typeof icons;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIconComponent = icons[name];

  return <LucideIconComponent {...props} />;
};

export default Icon;