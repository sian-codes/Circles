from fastapi import FastAPI, Depends, WebSocket
from sqlalchemy.orm import Session
from .database import Base, engine, get_db
from . import models, schemas

app = FastAPI(title='Circles API')
Base.metadata.create_all(bind=engine)

@app.get('/api/circles', response_model=list[schemas.Circle])
def list_circles(db: Session = Depends(get_db)):
    return db.query(models.Circle).all()

@app.get('/api/circles/{circle_id}', response_model=schemas.Circle)
def get_circle(circle_id: int, db: Session = Depends(get_db)):
    return db.query(models.Circle).get(circle_id)

@app.get('/api/circles/{circle_id}/threads', response_model=list[schemas.Thread])
def circle_threads(circle_id: int, db: Session = Depends(get_db)):
    return db.query(models.Thread).filter(models.Thread.circle_id==circle_id).all()

@app.get('/api/threads/{thread_id}', response_model=schemas.Thread)
def get_thread(thread_id: int, db: Session = Depends(get_db)):
    return db.query(models.Thread).get(thread_id)

@app.get('/api/threads/{thread_id}/messages', response_model=list[schemas.Message])
def thread_messages(thread_id: int, db: Session = Depends(get_db)):
    msgs = db.query(models.Message).filter(models.Message.thread_id==thread_id).all()
    return msgs

@app.get('/api/circles/{circle_id}/posts', response_model=list[schemas.Post])
def circle_posts(circle_id: int, db: Session = Depends(get_db)):
    posts = db.query(models.Post).filter(models.Post.circle_id==circle_id).all()
    return posts

@app.websocket('/ws/echo')
async def ws_echo(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            data = await ws.receive_text()
            await ws.send_text(f'echo: {data}')
    except Exception:
        await ws.close()
