# Connex One - Full Stack Tech Test

This project is a full-stack application built to fulfill the requirements of the Connex One tech test. The project includes a backend API built with Express and a frontend application built with React. The API provides server time and Prometheus metrics, while the React frontend displays this information.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Application](#frontend-application)

## Project Structure

```plaintext
cnx_fullstack_tech_test/
│
├── server/                   # Express server for API
│   ├── server.js             # Main server file
│   ├── package.json          # Node dependencies for backend
│
├── client/                   # React frontend application
│   ├── src/
│   │   ├── App.tsx            # Main React component
│   │   ├── index.js          # Entry point for React application
│   │   └── ...               # Other React components and files
│   ├── public/
│   │   ├── index.html        # HTML template
│   │   └── ...               # Other public files
│   ├── package.json          # Node dependencies for frontend
│   └── ...                   # Other configuration files
│
└── README.md                 # Project documentation
```
## Technologies Used

- Backend: Node.js, Express.js, express-prometheus-middleware, CORS
- Frontend: React Typescript
- Monitoring: Prometheus

## Getting started

### Prerequisites 
- Node.js v14+
- npm v6+

### Installation
1.
```
git clone https://github.com/yourusername/cnx_fullstack_tech_test.git
cd cnx_fullstack_tech_test
```
2.
```
cd server
npm install
```
3.
```
cd ../client
npm install
```
### Running the application
4.
```
cd server
node server.js
```
The backend server will start on http://localhost:8080.

5.
```
cd ../client
npm start
```
The frontend will be available on http://localhost:3000.

## API Endpoints
- GET /time: Returns the current server time in epoch format.
- GET /metrics: Returns Prometheus metrics for the API.

## Frontend Application
The frontend application fetches the server time and metrics every 30 seconds and displays them. It also shows the difference between the server time and the client time in a stopwatch format

![Screenshot 2024-09-04 at 14 03 45](https://github.com/user-attachments/assets/d75b12c1-d920-462a-9f67-29506b0e113a)


  










