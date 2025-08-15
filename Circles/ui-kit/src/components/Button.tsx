import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'ghost' };
export const Button: React.FC<Props> = ({ variant='primary', className='', ...props }) => {
  const base = 'px-4 h-10 rounded-full font-semibold transition';
  const styles = variant==='primary'
    ? 'bg-[#e9a4b5] text-[#1f0f14] hover:opacity-90'
    : 'bg-transparent text-[#261a1f] border border-[#e8e2e5] hover:bg-[#fcecef]';
  return <button {...props} className={[base, styles, className].join(' ')} />;
};