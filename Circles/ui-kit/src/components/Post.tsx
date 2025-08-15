import React from 'react';
export type PostProps = { author: string; time: string; body: string };
export const Post: React.FC<PostProps> = ({ author, time, body }) => (
  <div className='rounded-2xl border border-[#fcecef] bg-white p-4 space-y-2'>
    <div className='text-xs text-[#6b5a61]'>{author} • {time}</div>
    <div className='text-[#261a1f]'>{body}</div>
  </div>
);