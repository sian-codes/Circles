import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export default function App() {
  const [circles, setCircles] = useState<any[]>([]);
  useEffect(() => { fetch(`${API}/api/circles`).then(r=>r.json()).then(setCircles).catch(console.error); }, []);
  return (
    <div style={{ background:'#fff7f9', minHeight:'100vh', color:'#261a1f' }}>
      <header style={{ display:'flex', gap:16, padding:16, background:'#ffffff', borderBottom:'1px solid #fcecef' }}>
        <strong>Circles</strong>
        <Link to='/'>Home</Link>
      </header>
      <main style={{ padding:16 }}>
        <Routes>
          <Route path='/' element={<CircleList circles={circles} />} />
          <Route path='/circle/:id' element={<CircleDetail />} />
          <Route path='/thread/:id' element={<ThreadView />} />
        </Routes>
      </main>
    </div>
  );
}

function CircleList({ circles }: { circles:any[] }){
  return <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))', gap:12}}>
    {circles.map(c => (
      <Link key={c.id} to={`/circle/${c.id}`} style={{ textDecoration:'none', color:'inherit' }}>
        <div style={{ background:'#fff', border:'1px solid #fcecef', borderRadius:16, padding:16 }}>
          <div style={{ fontWeight:700 }}>{c.name}</div>
          <div style={{ fontSize:12, opacity:.7 }}>{c.description}</div>
        </div>
      </Link>
    ))}
  </div>
}

function CircleDetail(){
  const { id } = useParams();
  const [circle, setCircle] = useState<any>();
  const [threads, setThreads] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${API}/api/circles/${id}`).then(r=>r.json()).then(setCircle);
    fetch(`${API}/api/circles/${id}/threads`).then(r=>r.json()).then(setThreads);
  }, [id]);
  return <div>
    <h2>{circle?.name}</h2>
    <p style={{ opacity:.8 }}>{circle?.description}</p>
    <h3>Threads</h3>
    <ul>
      {threads.map(t => <li key={t.id}><Link to={`/thread/${t.id}`}>{t.title}</Link></li>)}
    </ul>
  </div>
}

function ThreadView(){
  const { id } = useParams();
  const [thread, setThread] = useState<any>();
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${API}/api/threads/${id}`).then(r=>r.json()).then(setThread);
    fetch(`${API}/api/threads/${id}/messages`).then(r=>r.json()).then(setMessages);
  }, [id]);
  return <div>
    <h2>{thread?.title}</h2>
    <ul>
      {messages.map(m => <li key={m.id}><strong>{m.author.username}:</strong> {m.content}</li>)}
    </ul>
  </div>
}
