# Rainbow Library Management System

A cute and modern library management system built with React, TypeScript, Express, and TypeORM.
![image](https://github.com/user-attachments/assets/83d92e4c-4045-404d-a10e-45af3e66b2c0)


## Features

- Book management (borrowing, returning, rating)
- User management
- Book rating system
- Modern and cute UI design
- Responsive
- 
- Error handling wiht popup and snackbars

## Prerequisites
- Postgres 17 or higher
- Node.js (v14 or higher)
- npm or yarn
- MySQL/PostgreSQL database

## Tech Stack

### Frontend

- React
- TypeScript
- Material-UI
- Toolpad UI
- Redux Toolkit
- SCSS
- Vite

### Backend

- Express.js
- TypeORM
- TypeScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/library-management.git
cd library-management
```

2. Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd library-frontend
npm install
```

3. Configure your database:

- Create a new database
  `db here`

- create a .env file at root(by default, you dont have to change those info.)

```json
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=123
DB_NAME=library_db

```
 

## Running the Application

0. Database Setup Steps
**Auto Database Creation**
After installing all dependencies at the root of the app (using `npm i`), create a table named `library_db` in the PostgreSQL pgAdmin4 application. Then, run `npm start` at the root of the application.

**Manual Database Creation**
Download the `library_db_backup.sql` file to the root directory. In the PostgreSQL pgAdmin4 application, create a database named `library_db`. Remove the `library_db>Schemas>public` schema. Right-click on the `library_db` database and select "Restore". Choose the `library_db_backup.sql` file and click "Restore".

1. Start the backend server:

```bash
# From the root directory
npm run start
```

2. Start the frontend development server:

```bash
# From the library-frontend directory
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## API Endpoints
**Library DB API Design**

**GET API Endpoints**

* **Get Users (/users)**
* **Get User (/users)**
* **Get User with Borrow History (/users/:id)**table. If `lendStatus` equals 2, selects all records with a score.
* **Get Books (/books)**
* **Get Book (/books/:id)**

**POST API Endpoints**

* **Borrow Book (/users/:id/borrow/:id)**
* **Return Book (/users/:id/return/:id)**point for the removed user, and updates the original table userScore. Inserts into the Lend table with `lendStatus` set to 1.

**API Response Codes**

* All successful GET API requests will return a 200 OK status code.
* All successful POST API requests will return a 204 OK status code.

 
