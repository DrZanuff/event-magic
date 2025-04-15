# ✨ Event Magic — Animated Video Invitations

**EventMagic** is a fullstack web app that allows users to create animated video invitations for events like weddings, birthdays, and parties. Customize the invitation with text, themes, background video, and animated transitions — and generate a downloadable video using Remotion.

Authenticated users can save, edit, and manage their invitations via their personal dashboard.

https://event-magic-three.vercel.app/


![image](https://github.com/user-attachments/assets/64c6959a-ff33-4016-a56e-af5c955eb9ba)

---

## 🚀 Tech Stack

### Front-End

- ✅ Next.js 14 (App Router)
- ✅ React 18
- ✅ TypeScript
- ✅ CSS Modules
- ✅ Remotion Player for real-time preview
- ✅ Jotai for state management

### Back-End

- 🟡 MongoDB Atlas (for saving user invitations)
- 🟡 Next.js API Routes

### Authentication

- 🟡 Google OAuth (with Firebase or NextAuth.js)

---

## 📋 Features

### 🔐 Authentication

- ✅ Google OAuth login
- ✅ Visitors can preview and edit invitations but **cannot save**
- ✅ Logged-in users can save, edit, and delete invitations
- ✅ Dynamic header with login/logout button

---

### 🏠 Landing Page (`/`)

- ✅ Introduction to the app
- ✅ Call-to-action: "Create Invitation"

---

### 🎨 Invitation Editor (`/editor`)

- ✅ Real-time visual editor
- ✅ Live preview using `<Player />` from Remotion
- ✅ Background video + opacity + fallback background color
- ✅ Dynamic text elements:
  - Title
  - Subtitle
  - Message
  - Location
  - Date & Time
  - Call to Action
- ✅ Custom properties:
  - Font size
  - Font color
  - Font shadow
  - Optional background highlight for text blocks
- ✅ "Save Invitation" (only for logged-in users)
- ✅ "Render Video" → triggers Lambda to generate final video
- ✅ Download link shown after rendering

---

### 📂 My Invitations (`/dashboard`)

- ✅ List of saved invitations per user
- ✅ Actions:
  - **Edit**: opens editor with pre-filled data
  - **Delete**
  - **Share**: available after saving

---

### ☁️ Backend / Infrastructure

- ✅ MongoDB to store form data, timestamps, user ID, and video links
- ✅ API Routes for invitation CRUD

---

## ✨ Future Ideas

- [ ] Drag & Drop for element positioning
- [ ] Template gallery with pre-made designs
- [ ] Upload custom videos/photos (e.g. couple's photo)
- [ ] Email/WhatsApp sharing
- [ ] View analytics (e.g. invitation views)

---
