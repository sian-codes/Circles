import React from 'react';
type Props = { placeholder?: string } & React.InputHTMLAttributes<HTMLInputElement>;
export const Composer: React.FC<Props> = ({ placeholder='Write a post…', className='', ...props }) => (
  <div className='rounded-2xl border border-[#fcecef] bg-white p-3'>
    <input {...props} placeholder={placeholder} className={['w-full bg-transparent outline-none text-sm', className].join(' ')} />
  </div>
);