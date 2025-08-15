import React from 'react';
export const Chip: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props }) => (
  <div {...props} className={['inline-flex items-center px-3 h-7 rounded-full bg-[#fcecef] text-[#261a1f] text-sm font-semibold', className].join(' ')} />
);