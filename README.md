# EventPal - Community Event Discovery & Management Platform

EventPal is a simple platform to discover and manage community events. It uses **JSON Server** to provide a mock backend API and **React + Vite** for the frontend development environment.

---

## Getting Started Locally

Run the following commands in order:

```bash
# 1. Clone the repository
git clone https://github.com/hemant4106/EventPal-Community-Event-Discovery-Management-Platform.git

# 2. Move into the project directory
cd EventPal-Community-Event-Discovery-Management-Platform

# 3. Start the backend (JSON Server)
json-server --watch ./src/data/events.json

# 4. In a separate terminal, start the frontend (Vite)
npm run dev
