from app.database import Base, engine, SessionLocal
from app import models
import json

def run():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        data = json.load(open('sample_data.json'))
        for u in data['users']:
            db.add(models.User(id=u['id'], username=u['username'], email=u['email']))
        db.commit()
        for c in data['circles']:
            db.add(models.Circle(id=c['id'], name=c['name'], description=c.get('description',''), visibility=c.get('visibility','public')))
        db.commit()
        for t in data['threads']:
            db.add(models.Thread(id=t['id'], circle_id=t['circle_id'], title=t['title']))
        db.commit()
        for m in data['messages']:
            db.add(models.Message(id=m['id'], thread_id=m['thread_id'], author_id=m['author_id'], content=m['content']))
        db.commit()
        for p in data['posts']:
            db.add(models.Post(id=p['id'], circle_id=p['circle_id'], author_id=p['author_id'], content=p['content']))
        db.commit()
        print('Seed complete. DB: dev.db')
    finally:
        db.close()

if __name__ == '__main__':
    run()
