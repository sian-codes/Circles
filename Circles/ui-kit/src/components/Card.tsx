import React from 'react';
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className='', ...props }) => (
  <div {...props} className={['rounded-2xl border border-[#fcecef] bg-white shadow-sm', className].join(' ')} />
);