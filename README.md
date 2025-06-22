# 🚀 Next.js

A full-stack platform built for discovering, showcasing, and pitching startups — powered by **Next.js**, **Sanity**, and **GitHub OAuth**.

---

## ✨ Features

✅ Sign Up & Login: Authenticate through GitHub using NextAuth.
✅ Startup Pitch Submission: Submit your startup idea as a pitch, with detailed descriptions and visuals.
✅ Search & Filter Pitches: Explore pitches using various search filters (e.g., technology, industry).
✅ Pitch Pages: View detailed pages for each pitch, including progress updates and feedback.
✅ User Profiles: Each user has a profile to track their pitches and interactions.
✅ Views Counter: Track views and engagement for each startup pitch.

---

## 🛠️ Tech Stack

| Layer              | Technology                 |
|--------------------|----------------------------|
| **Frontend**       | Next.js 15, React 19       |
| **Styling**        | Tailwind CSS               |
| **Auth**           | NextAuth.js v5 (GitHub)    |
| **Backend**        | Sanity CMS                 |
| **Icons**          | Lucide Icons               |
| **UI components**  | Shadcn UI                  |
| **Static typing**  | TypeScript                 |
| **Deployment**     | Vercel                     |

---

## 🔧 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ianaliti/next.js.git
cd next.js
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

### 4️⃣ Run the development server

```bash
npm run dev
```

➡ Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 👤 User Experience

- 🔐 Sign in with GitHub  
- 📝 Submit a startup idea  
- 🔍 Search and browse other projects  
- 💬 View and interact with user profiles

---

## 🚀 Deployment

Deploy instantly on [Vercel](https://vercel.com/):

- 🔁 Fork the repo  
- 🔗 Connect your GitHub account  
- 🔑 Add environment variables  
- ☁️ Click "Deploy"

---

## 🧪 Sanity Studio

The Sanity content studio is accessible at:

```
/studio
```

Use this to manage content, authors, and startups easily.

---

## 💅 UI Components with shadcn/ui

This project uses the latest version of [`shadcn/ui`](https://ui.shadcn.dev) for modern, accessible, and beautiful UI components.

Install:

```bash
npx shadcn@latest init
```

Add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

---

