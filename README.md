## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

### Live: https://jiraf.vercel.app

## <a name="introduction">🤖 Introduction</a>

Jiraf is an issue tracking and agile project management app all built using Next.js.

## <a name="tech-stack">⚙️ Tech Stack</a>

- [Next.js 14](https://nextjs.org/) (React Framework)
- [Appwrite](https://appwrite.io/) (for database, an ORM tool, file storage, Messaging and authentication)
- [TypeScript 5](https://www.typescriptlang.org/) (Type Checking)
- [Tailwind CSS 3.4.1](https://tailwindcss.com/) (Styling)
- [ShadCN](https://ui.shadcn.com/) (UI Components)
- [ESLint 8](https://eslint.org/) (Code Linting)

## <a name="features">🔋 Features</a>

🏢 Workspaces
📊 Projects / Epics
✅ Tasks
📋 Kanban Board View
🗃️ Data Table View
📅 Calendar View
✉️ Invite System
⚙️ Workspace and Project Settings
🖼️ Image Uploads (for avatars and attachments)
🔌 Appwrite SDK Integration
🎨 Shadcn UI & TailwindCSS Styling
🔍 Advanced Search and Filtering
📈 Analytics Dashboard
👥 User Roles and Permissions
🔒 Authentication (OAuth and Email)
📱 Responsive Design (Mobile-friendly)
🚀 API using Hono.js

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:firatgoktepe/jiraf.git
cd jiraf
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=[Your key]

NEXT_PUBLIC_APPWRITE_DATABASE_ID=[Your key]
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=[Your key]
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=[Your key]
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=[Your key]
NEXT_PUBLIC_APPWRITE_TASKS_ID=[Your key]
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=[Your key]

NEXT_APPWRITE_KEY=[Your key]
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
