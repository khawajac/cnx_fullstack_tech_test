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
- [License](#license)

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
