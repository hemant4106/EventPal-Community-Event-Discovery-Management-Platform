# 🎉 EventPal - Community Event Discovery Platform

Welcome to **EventPal**, your go-to platform to **create**, **explore**, and **manage community events**. Whether it's a college workshop, esports tournament, or cultural night — EventPal brings them all together in one retro-styled, responsive interface.

🔗 **Live Site**: [https://event-pal-community-event-discovery.vercel.app/](https://event-pal-community-event-discovery.vercel.app/)

---

## ✨ Features

- 🎨 Retro-themed UI with a pixel-perfect calendar
- 📅 FullCalendar integration to view events
- 📝 Add new events with genre and category selection
- 🎯 Filter and sort events based on multiple criteria
- 📱 Fully responsive for mobile and desktop(currently not responsive)
- ⚙️ Uses JSON Server as a mock backend for development

---

## 🚀 Tech Stack

- React + Vite
- TailwindCSS
- FullCalendar
- React Hook Form
- JSON Server

---

## 🛠️ How to Run Locally
```bash
# 1. Clone the repository
git clone https://github.com/hemant4106/EventPal-Community-Event-Discovery-Management-Platform.git
cd event-pal

# 2. Install dependencies
npm install

# 3. Start the JSON server (runs on port 3000)
npx json-server --watch ./src/data/events.json --port 3000

# 4. In a separate terminal, start the frontend
npm run dev
```

⚠️ Make sure `events.json` is present in your project /data (it stores event data).

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── CalendarPage.jsx
│   ├── AddEventPage.jsx
│   └── Cards/
├── constants/
│   ├── genreoptions.js
│   ├── MonthsColor.js
│   └── label.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📡 Deployment

Frontend is deployed on **Vercel**  
Backend (JSON Server) can be deployed on **Render**, **Railway**, or run locally.

---

## 🧑‍💻 Author

**Hemant Yadav**

If you like this project, feel free to ⭐ the repo and [share feedback](https://event-pal-community-event-discovery.vercel.app/)!  
