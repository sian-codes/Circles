from pydantic import BaseModel
from datetime import datetime

class User(BaseModel):
    id: int
    username: str
    email: str
    avatar_url: str | None = None
    class Config: from_attributes = True

class Circle(BaseModel):
    id: int
    name: str
    description: str = ''
    visibility: str = 'public'
    class Config: from_attributes = True

class Thread(BaseModel):
    id: int
    circle_id: int
    title: str
    class Config: from_attributes = True

class Message(BaseModel):
    id: int
    thread_id: int
    author: User
    content: str
    created_at: datetime
    class Config: from_attributes = True

class Post(BaseModel):
    id: int
    circle_id: int
    author: User
    content: str
    created_at: datetime
    class Config: from_attributes = True
