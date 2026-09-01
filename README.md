# 📚 Virtual Study Partner

<div align="center">

### 🧠 Your AI-Powered Study Companion

**Plan smarter • Learn faster • Revise better • Stay organized**

A student-focused web application that combines **AI assistance, study planning, flashcards, resource management, and web search** into one simple learning workspace.

<br>

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge\&logo=openai\&logoColor=white)

</div>

---

## 🌟 What is Virtual Study Partner?

**Virtual Study Partner** is a web-based learning assistant designed around one simple idea:

> **Students shouldn't need five different tools just to study effectively.**

The platform brings together AI-powered assistance, study planning, flashcards, resource management, and online search into a single student-friendly environment.

Instead of constantly switching between applications, students can use one workspace to:

**Ask → Learn → Organize → Revise → Search → Study**

---

## ✨ Core Features

| Feature                     | What it does                                              |
| --------------------------- | --------------------------------------------------------- |
| 🧠 **AI Study Assistant**   | Get AI-powered explanations, answers, and study support   |
| 📅 **Study Planner**        | Organize study sessions and manage your learning schedule |
| 📝 **Flashcards**           | Create and review study cards for revision                |
| 🔍 **Web Search**           | Search the web for additional learning resources          |
| 📂 **Resource Management**  | Upload and organize study materials                       |
| 🔐 **Authentication**       | Registration and login functionality                      |
| 📱 **Responsive Interface** | Designed to work across different screen sizes            |
| 🎨 **Student-Friendly UI**  | Clean interface focused on usability and learning         |

---

# 🧠 AI Study Assistant

The heart of the platform is an AI-powered study assistant.

Students can use AI support to:

* 💬 Ask questions
* 📖 Understand difficult concepts
* 🧩 Break complex topics into simpler explanations
* ✍️ Get assistance while studying
* 🔎 Explore topics further
* 🎯 Use AI as an interactive learning companion

### Study Flow

```text
             ┌─────────────────┐
             │   Student Idea  │
             └────────┬────────┘
                      ↓
             ┌─────────────────┐
             │  Study Partner  │
             │      AI         │
             └────────┬────────┘
                      ↓
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
   Explanation    Resources      Guidance
       │              │              │
       └──────────────┼──────────────┘
                      ↓
             ┌─────────────────┐
             │ Better Learning │
             └─────────────────┘
```

---

# 📅 Study Schedule Planner

The planner helps students turn **"I need to study"** into an organized study routine.

### Designed for:

* 📚 Subject planning
* ⏰ Study sessions
* 🗓️ Schedule organization
* 🎯 Consistent study habits
* 📌 Keeping important tasks visible

---

# 📝 Flashcard System

A dedicated flashcard workflow makes revision easier.

### Flashcard Flow

```text
Create Cards
     ↓
Review
     ↓
Recall
     ↓
Repeat
     ↓
Better Retention
```

Students can create study cards and use them for quick topic revision instead of repeatedly going through long notes.

---

# 🔍 Learning Resource Search

The application also integrates web search so students can move beyond the information already available inside the platform.

```text
Student Question
       ↓
Google Search
       ↓
Relevant Resources
       ↓
Explore & Learn
```

This creates a useful combination of:

**AI assistance + online research + personal study resources**

---

# 📂 Resource Management

Students can upload and manage their own learning resources.

This provides a central place for study materials instead of keeping everything scattered across different folders and applications.

### Resource Workflow

```text
Upload
  ↓
Organize
  ↓
Access
  ↓
Study
```

---

# 🔐 User Authentication

The platform includes user authentication functionality for creating a personalized study environment.

### Includes

* 👤 User registration
* 🔑 Login
* 🔒 Protected user experience
* 🧑‍🎓 Personalized study workspace

---

# 🎨 User Experience

The interface focuses on keeping studying **simple rather than overwhelming**.

### UI Principles

* Clean layouts
* Clear navigation
* Responsive design
* Accessible controls
* Student-focused workflows
* Minimal distractions
* Easy access to study tools

---

# 🛠️ Tech Stack

<div align="center">

### 🎨 Frontend

<img src="https://skillicons.dev/icons?i=html,css,js" />

### ⚙️ Backend

<img src="https://skillicons.dev/icons?i=nodejs,express" />


### 🔧 Development Tools

<img src="https://skillicons.dev/icons?i=git,github,vscode" />

</div>

### Stack Breakdown

| Layer                 | Technology              |
| --------------------- | ----------------------- |
| 🎨 Frontend           | HTML5, CSS3, JavaScript |
| ⚙️ Backend            | Node.js, Express.js     |
| 🤖 AI                 | OpenAI API              |
| 🔍 Search             | Google Search API       |
| 📦 Package Management | npm                     |
| 🔧 Version Control    | Git, GitHub             |

---

# 🏗️ System Architecture

```text
┌──────────────────────────────────────────────┐
│                  STUDENT                     │
└──────────────────────┬───────────────────────┘
                       │
                       ↓
┌──────────────────────────────────────────────┐
│              VIRTUAL STUDY PARTNER           │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌─────────────┐ │
│  │   AI     │ │ Planner  │ │  Flashcards │ │
│  │ Assistant│ │          │ │             │ │
│  └────┬─────┘ └──────────┘ └─────────────┘ │
│       │                                      │
│  ┌────▼─────┐ ┌──────────┐ ┌─────────────┐ │
│  │  Search  │ │ Resources│ │    Auth     │ │
│  └────┬─────┘ └──────────┘ └─────────────┘ │
└───────┼──────────────────────────────────────┘
        │
        ↓
┌──────────────────────────────────────────────┐
│               EXPRESS / NODE.JS              │
└──────────────┬───────────────────────────────┘
               │
       ┌───────┴────────┐
       ↓                ↓
┌──────────────┐  ┌──────────────┐
│  OpenAI API  │  │ Google Search│
└──────────────┘  └──────────────┘
```

---

# 📂 Project Structure

```text
Virtual-Study-Patner/
│
├── Main Project/
│   │
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   ├── package.json
│   ├── Resourcesapi.js
│   │
│   ├── public/
│   │   ├── styles.css
│   │   └── script.js
│   │
│   ├── views/
│   │   └── *.html
│   │
│   └── Other media & support files
│
└── README.md
```

---

# 🔄 How It Works

```text
        👤 Student
            │
            ↓
     🔐 Login / Register
            │
            ↓
      📚 Study Dashboard
            │
     ┌──────┼───────┐
     ↓      ↓       ↓
    🧠     📅      📝
    AI   Planner  Flashcards
     │      │       │
     └──────┼───────┘
            ↓
       🔍 Search
            ↓
      📂 Resources
            ↓
      🎯 Study Better
```

---

# 📸 Interface Showcase

<div align="center">

<img src="https://github.com/user-attachments/assets/9809a139-e13f-40d5-904d-339557b0fd1c" width="48%"/>
<img src="https://github.com/user-attachments/assets/d4b3fd41-dd85-47bd-82e6-33e5d2149c85" width="48%"/>

<img src="https://github.com/user-attachments/assets/f1243945-5d4f-4859-b818-f7cc8ade0aa8" width="48%"/>
<img src="https://github.com/user-attachments/assets/7dc851da-1e31-49c8-aa47-b3f647c63f53" width="48%"/>

<img src="https://github.com/user-attachments/assets/724bd49a-8856-46a4-ac85-238347cbb897" width="48%"/>
<img src="https://github.com/user-attachments/assets/0999c709-a986-49c2-91f9-2ce6d20941c8" width="48%"/>

<img src="https://github.com/user-attachments/assets/c03a1b37-8f36-48e1-bda9-2649071cc355" width="48%"/>
<img src="https://github.com/user-attachments/assets/cf04f2ba-dd5b-407e-846a-484227c8efa0" width="48%"/>

<img src="https://github.com/user-attachments/assets/e5024966-9ad2-435a-8461-478b6067ee05" width="48%"/>
<img src="https://github.com/user-attachments/assets/7d1bc0f1-c560-4598-864f-bbe3948be3d2" width="48%"/>

<img src="https://github.com/user-attachments/assets/0d8a0395-5dd3-4199-8c85-7b85073b6637" width="48%"/>
<img src="https://github.com/user-attachments/assets/ed1d6f71-96fe-43e0-8429-407acdb80eaa" width="48%"/>

<img src="https://github.com/user-attachments/assets/0152fc6e-f54e-4700-9f22-c8589fafb99b" width="48%"/>
<img src="https://github.com/user-attachments/assets/a4d07cfe-4509-4fef-b0d9-36e3ac784cb9" width="48%"/>

<img src="https://github.com/user-attachments/assets/82879e5a-73eb-4d7b-a162-57f1a6d1f9b1" width="48%"/>
<img src="https://github.com/user-attachments/assets/e9db0bbd-0330-452d-a6a8-b320aef0d240" width="48%"/>

</div>

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Hamna-21/Virtual-Study-Patner.git
```

## 2️⃣ Enter the Project

```bash
cd "Virtual-Study-Patner/Main Project"
```

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **Main Project** directory.

```env
OPENAI_API_KEY=your_openai_key_here
GOOGLE_API_KEY=your_google_key_here
```

> ⚠️ **Never commit your `.env` file or expose API keys publicly.**

Make sure `.env` is included in `.gitignore`.

---

# ▶️ Run the Application

Start the Node.js server:

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

🎉 Your Virtual Study Partner should now be running locally.

---

# 🧪 Project Workflow

A typical study session can look like:

```text
1. Login
   ↓
2. Open Study Workspace
   ↓
3. Plan today's study session
   ↓
4. Ask AI about a difficult concept
   ↓
5. Search for additional resources
   ↓
6. Save / upload study material
   ↓
7. Create flashcards
   ↓
8. Review
   ↓
9. Continue learning
```

---

# 💡 What This Project Demonstrates

This project isn't just a collection of pages — it demonstrates practical experience with:

* 🌐 Web application development
* ⚙️ Node.js backend development
* 🚀 Express.js server architecture
* 🤖 AI API integration
* 🔍 External API integration
* 🔐 Authentication workflows
* 📂 File/resource handling
* 🧠 Education-focused UX
* 📱 Responsive web design
* 🔧 Frontend ↔ backend communication

---

# 📊 Project Highlights

| Area            | Implementation                       |
| --------------- | ------------------------------------ |
| 🧠 AI           | OpenAI-powered study assistance      |
| 📅 Productivity | Study scheduling                     |
| 📝 Learning     | Flashcard-based revision             |
| 🔍 Research     | Google Search integration            |
| 📂 Resources    | Upload and manage study materials    |
| 🔐 Accounts     | Registration & login                 |
| 🎨 UI           | Responsive student-focused interface |
| ⚙️ Server       | Node.js + Express.js                 |

---

# 🔮 Future Improvements

The project can be extended into a more advanced **AI learning platform** with:

* 🧠 Personalized AI study plans
* 📄 AI-powered PDF/note summarization
* 🎯 Adaptive quizzes
* 📊 Learning progress analytics
* 🔊 AI voice tutor
* 🧩 Automatic flashcard generation
* 🗓️ AI-generated study schedules
* 🔔 Study reminders
* 🏆 Gamification and achievement system
* 👥 Collaborative study rooms
* 📱 Mobile application
* 💾 Persistent cloud-based resources

---

# 🎯 Vision

The long-term goal is to evolve **Virtual Study Partner** from a collection of study utilities into a complete **AI-powered personal learning workspace**.

```text
             TODAY
               │
               ↓
      Study Tools + AI
               │
               ↓
       Personal Learning
               │
               ↓
      Intelligent Assistance
               │
               ↓
        🎓 Smarter Learning
```

---

# 👩‍💻 Developer

<div align="center">

### Hamna Mushtaq

**Software Engineering Student • Web Developer • AI Enthusiast**

Building practical software solutions that combine **web development, APIs, automation, and AI** to solve real-world problems.

<br>

[![GitHub](https://img.shields.io/badge/GitHub-Hamna--21-181717?style=for-the-badge\&logo=github)](https://github.com/Hamna-21)

</div>

---

<div align="center">

### 📚 Learn Smarter. Stay Organized. Study Better.

**Virtual Study Partner** 🚀

⭐ If you found this project interesting, consider giving the repository a star!

</div>
