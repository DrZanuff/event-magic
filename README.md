# 🎉 EventMagic

**EventMagic** is a fullstack web app that allows users to create animated video invitations for events like weddings, birthdays, and parties. Users can customize the invitation details, preview animations in real-time, and generate a final downloadable video.

Authenticated users can save, edit, and manage their invitations via their personal dashboard.

---

## 🚀 Tech Stack

### Front-End

- [x] Next.js 14 (App Router)
- [x] React 18
- [x] TypeScript
- [x] CSS Modules
- [x] Remotion Player for real-time preview

### Back-End

- [ ] MongoDB Atlas
- [ ] Remotion Renderer for video generation
- [ ] AWS Lambda for cloud rendering
- [ ] Next.js API Routes

### Authentication

- [ ] Google OAuth via NextAuth.js

---

## 📋 Features

### 🔐 Authentication

- [ ] Google OAuth login
- [ ] Visitors can preview and edit invitations but **cannot save**
- [ ] Logged-in users can save, edit, and delete invitations
- [ ] Dynamic header with login/logout button

---

### 🏠 Landing Page (`/`)

- [ ] Introduction to the app
- [ ] Call-to-action: "Create Invitation"
- [ ] (Optional) Demo video rendered via Remotion Player

---

### 🎨 Invitation Editor (`/editor`)

- [ ] Interactive form:
  - [ ] Event type
  - [ ] Host names
  - [ ] Date and time
  - [ ] Location
  - [ ] Custom phrase
  - [ ] Visual theme/style
- [ ] Live preview using `<Player />` from Remotion
- [ ] "Save Invitation" button (enabled only for logged-in users)
- [ ] "Render Video" button → triggers Lambda to generate final video
- [ ] Download link shown after rendering

---

### 📂 My Invitations (`/dashboard`)

- [ ] Displays user's saved invitations
- [ ] Actions:
  - [ ] **Edit**: opens editor with pre-filled data
  - [ ] **Delete**
  - [ ] **Download video** (if rendered)

---

### ☁️ Backend / Infrastructure

- [ ] MongoDB: store form data, themes, timestamps, user ID, and video links
- [ ] API Routes for invitation CRUD
- [ ] AWS Lambda for rendering with `@remotion/renderer`
- [ ] Upload video (e.g., to S3 or public bucket)
- [ ] Return final download link to user

---

## ✨ Future Ideas / Nice to Have

- [ ] Public sharing pages for each invitation
- [ ] More animation templates and themes
- [ ] User image upload (e.g., couple’s photo)
- [ ] Email or WhatsApp integration
- [ ] View analytics (e.g., number of views)

```

```
