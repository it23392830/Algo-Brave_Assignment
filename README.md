# AlgoBrave Full-Stack Assignment

A full-stack CRUD application built using **Spring Boot (Java)** for the backend and **Next.js (React + Redux Toolkit)** for the frontend.  
The system manages users with complete **Create, Read, Update, Delete** functionality, backed by a relational database and covered with automated tests.

---

## 📌 Tech Stack

### Backend
- Java 17+
- Spring Boot 4
- Spring Data JPA
- H2 In-Memory Database
- JUnit 5
- Mockito
- Maven

### Frontend
- Next.js (App Router)
- React
- Redux Toolkit
- TypeScript
- Jest
- React Testing Library
- Tailwind CSS

---

## ✨ Features

- User CRUD operations (Create, View, Edit, Delete)
- RESTful API design
- Form validation (frontend & backend)
- Redux state management
- API integration via fetch
- Automated tests for frontend and backend
- Clean project structure
- Environment-based configuration

---

## 📂 Project Structure

Algo-Brave_Assignment/
│
├── backend/
│   ├── src/main/java/com/example/demo
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   ├── model
│   │   └── exception
│   └── src/test/java/com/example/demo
│
└── frontend/
    ├── src/app
    ├── src/store
    ├── src/services
    ├── src/__tests__
    └── jest.config.ts


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository


git clone <repository-url>
cd Algo-Brave_Assignment

### 🔧 Backend Setup (Spring Boot)
Navigate to backend
cd backend

Run the application
./mvnw spring-boot:run


Backend URL: http://localhost:8080

H2 Console: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:usersdb

Username: sa

Password: (empty)

Run Backend Tests
./mvnw test


All backend unit and integration tests should pass successfully.

### 🎨 Frontend Setup (Next.js)
Navigate to frontend
cd frontend

Install dependencies
npm install

Environment Configuration

Create a .env.local file inside the frontend directory:

NEXT_PUBLIC_API_BASE_URL=http://localhost:8080

Run the frontend
npm run dev


Frontend URL: http://localhost:3000

Run Frontend Tests
npm test


Jest tests for Redux slices and page components will execute successfully.

🔁 API Endpoints
| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/api/users`      | Get all users           |
| GET    | `/api/users/{id}` | Get user by ID          |
| POST   | `/api/users`      | Create a new user       |
| PUT    | `/api/users/{id}` | Update an existing user |
| DELETE | `/api/users/{id}` | Delete a user           |


### 🧪 Testing Overview
Backend Testing

Service layer tested using JUnit 5

Repository and dependencies mocked using Mockito

Frontend Testing

Redux slice unit tests

Component rendering tests

API calls mocked during tests

Run all tests using:
npm test
./mvnw test

## 📖 Notes

The database is in-memory (H2) and resets on restart

Validation is enforced on both frontend and backend

Clean architecture principles are followed

Startup warnings are expected and non-blocking

## ✅ Assignment Status

Mandatory requirements: Completed

CRUD operations: Completed

Nice-to-have features: Completed

Automated testing: Completed

Build status: Successful

## 👩‍💻 Author

Sandalika Gunawardhana
Computer Science Undergraduate
Sri Lanka Institute of Information Technology (SLIIT)
