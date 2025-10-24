# Lab 4

This project demonstrates the creation of a simple web application using **Express**. The app includes multiple routes, refactored route handling, and is being run with forever in the ssh.

## Available Routes

| Route | Method | Description | Example |
|-------|--------|-------------|---------|
| `/` | GET | Home page with "Hello World!" message | `http://localhost:8000/` |
| `/welcome/:name` | GET | Personalized welcome message | `http://localhost:8000/welcome/John` |
| `/about` | GET | About page information | `http://localhost:8000/about` |
| `/contact` | GET | Contact information display | `http://localhost:8000/contact` |
| `/date` | GET | Current date and time | `http://localhost:8000/date` |
| `/chain` | GET | Middleware chain demonstration | `http://localhost:8000/chain` |
| `/file` | GET | Static HTML file serving | `http://localhost:8000/file` |
