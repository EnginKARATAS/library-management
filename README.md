# Rainbow Library Management System

A cute and modern library management system built with React, TypeScript, Express, and TypeORM.
![image](https://github.com/user-attachments/assets/83d92e4c-4045-404d-a10e-45af3e66b2c0)


## Features

- Book management (borrowing, returning, rating)
- User management
- Book rating system
- Modern and cute UI design
- Responsive layout
- Error handling wiht popup and snackbars

## Prerequisites

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

- your .env file

```json
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=sona
DB_PASSWORD=123
DB_NAME=library_db

```
 

## Running the Application

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

### Users

- GET `/users` - Get all users
- GET `/users/:id` - Get user by ID
- POST `/users/:userId/return/:bookId` - Return a book

### Books

- GET `/books` - Get all books
- GET `/books/:id` - Get book by ID

 
