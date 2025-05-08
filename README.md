# 🛠️ Activity Booking API - Backend Developer Internship Assignment

A simple REST API backend for a Basic Activity Booking App built using **Node.js**, **Express.js**, and **MongoDB**. This project is part of the technical assignment for the Backend Developer Internship at **MeetX**.

---

## 📦 Features

- 👤 User Registration & Login (JWT Auth)
- 📅 List Public Activities
- 📝 Book an Activity (auth required)
- 📋 Get My Bookings
- 🛡️ Password Hashing with `bcryptjs`
- ✅ Validation using `express-validator`
- 🌐 RESTful Routes with Clean Folder Structure

---

## 🧰 Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT (JSON Web Tokens)
- **Validation:** express-validator
- **API Testing:** Postman
- **Deployment:** (Optional) Render / Cyclic

---

## 📁 Project Structure

backend-activity-app/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── .env.example
├── server.js
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Siri503/Backend-Dev.-Internship.git
cd backend-activity-app
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Setup Environment Variables
Create a .env file based on .env.example:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4️⃣ Start the Server
bash
Copy
Edit
npm run dev
Server will run at: http://localhost:5000

🔐 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and get token

Activities
Method	Endpoint	Description
GET	/api/activities	List all activities
POST	/api/activities	(Optional) Add activity

Bookings
Method	Endpoint	Description
POST	/api/book/:id	Book an activity (auth required)
GET	/api/my-bookings	Get user’s bookings (auth required)

📮 Postman Collection
Postman collection is available in the /postman folder or Click here to download.

🧪 Testing
Use the JWT token from /api/auth/login to test protected routes.

Add Bearer <token> in the Authorization Header for booking endpoints.

