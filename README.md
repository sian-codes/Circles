# ✨ Circles Social — Starter Repo

> A **social collaboration platform** scaffold: build communities called *Circles*, share posts, start threads, and message with your peers.  
> Designed with **Kotlin/React background in mind** but implemented with **FastAPI + React + TypeScript** for rapid iteration.

---

## 🚀 Goals

- 🧑‍🤝‍🧑 Allow users to **create and manage Circles** (public or private).
- 🗂 Inside each Circle:  
  - Start **Threads** for focused discussions.  
  - Send **Messages** in conversations.  
  - Post **short blogs, images, or videos**.  
- 🎨 Deliver a **soft blush UI/UX palette** with light and dark mode.  
- 🔁 Provide a **starter repo** for rapid prototyping across **client, server, and shared UI kit**.  
- ⚡ Encourage clean architecture: **modular, token-driven design**, with React components mapping 1:1 to Figma.

---

## 🧩 Core Functionalities

### ✅ Circles
- Create & browse Circles  
- Public/private visibility  
- Each Circle acts as its own mini-community  

### 💬 Threads & Messages
- Threads keep discussions organized  
- Real-time messages (WebSocket-ready scaffold)  

### 📰 Posts
- Lightweight posts with text, images, or video embeds  
- Authored inside Circles  

### 🎨 UI Kit
- Tokens for consistent design  
- Components: `Button`, `Card`, `Chip`, `Composer`, `Post`  
- Ready for Storybook or direct React integration  

---

## 🏗 Architecture

```mermaid
graph TD
    A[React Client] -->|REST| B[FastAPI Server]
    B --> C[(SQLite DB)]
    A --> D[UI Kit Components]
    D --> E[Figma Tokens / Styles]
