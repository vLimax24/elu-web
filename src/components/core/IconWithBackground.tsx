import React from 'react'
import Icon from './Icon'
import { icons } from 'lucide-react'

type IconWithBackgroundProps = {
  name: keyof typeof icons;
  color: string;
  size: number;
  id: string;
  opacity?: number;
}

const hexToRgba = (hex: string, opacity: number) => {
  hex = hex.replace('#', '');

  let r: number, g: number, b: number;

  if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    throw new Error('Invalid HEX color');
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const IconWithBackground = ({ name, color, size, opacity = 0.5, ...props }: IconWithBackgroundProps) => {
  const backgroundSize = size * 1.7;
  const backgroundColor = hexToRgba(color, opacity);

  return (
    <div
      style={{ width: backgroundSize, height: backgroundSize, backgroundColor }}
      className="rounded-md flex items-center justify-center">
      <Icon name={name} color={color} size={size} {...props} />
    </div>
  )
}
