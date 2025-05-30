# CyberBuddy – Online Safety for Seniors

CyberBuddy is a simple Node.js web application designed to educate senior citizens about online safety through workshops, interactive content, and secure sign-ups.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Testing:** Jest, Supertest
- **Styling:** Materialize CSS (via CDN)
- **File Storage:** Local file system (signups.txt)
- **Containerization:** Docker-ready (see below)

---

## 🚀 Features

- Homepage with online safety info and sign-up form
- Thank you page with personalized message after sign-up
- User sign-up data saved to a file (`signups.txt`)
- Unit tests for critical routes
- Logging and error handling
- Docker support

---

## 🧪 Running Tests

To run tests:

```bash
npm install
npm test
