#  Finance Backend API

A robust backend system for managing financial records with authentication, role-based access control, and advanced dashboard analytics using MongoDB aggregation.

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

##  Features Implemented

*  User Registration & Login
*  Role0 Based Access Control
*  Financial Records CRUD
*  Record Filtering (type/category/date)
*  Dashboard Summary APIs (Aggregation)
*  Input Validation & Error Handling
*  Data Persistence with MongoDB

---

## Dashboard API (Key Highlight)

The dashboard endpoint demonstrates backend design beyond CRUD operations using MongoDB aggregation pipelines.

### Provides:

* Total Income
* Total Expenses
* Net Balance
* Category wise Breakdown
* Monthly Trends

---

##  API Endpoints

###  Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

###  Records

* POST `/api/records`
* GET `/api/records`

###  Dashboard

* GET `/api/dashboard`

---

##  API Testing (Postman)

### Register User



###  Login (JWT Token)



###  Dashboard API (Aggregation Output)



---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/Navnidhi-gandhi07/finance-backend
cd finance-backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
```

Run the server:

```bash
node src/server.js
```

---

##  Technical Highlights

* Implemented JWT based authentication for secure API access
* Role-based authorization for controlled data access
* MongoDB aggregation pipelines used for dashboard analytics
* Designed APIs to demonstrate backend logic beyond basic CRUD

---

##  Notes

* The dashboard API is the core feature showcasing aggregation logic
* Tested thoroughly using Postman
* Project focuses on backend architecture and data processing

---

##  Future Improvements

* Pagination & advanced filtering
* Frontend integration (React dashboard)
* Deployment on cloud (Render / Railway)
* Swagger API documentation

---

##  Author

Navnidhi Gandhi
GitHub: https://github.com/Navnidhi-gandhi07
