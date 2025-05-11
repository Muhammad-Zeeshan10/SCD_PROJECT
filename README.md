SCD Project

Project Description
This project demonstrates the deployment of a full-stack MERN (MongoDB, Express.js, React, Node.js) application to a local Kubernetes cluster using Minikube. The application includes a backend API developed with Express.js, which interacts with a MongoDB database, and a frontend user interface built with React. The deployment process is streamlined with automated continuous integration and continuous deployment (CI/CD) pipelines implemented via GitHub Actions.

Running the Application Locally with Node.js
To run the application on your local machine without using Docker or Kubernetes, follow the steps below.

Prerequisites
Node.js (version 18 or later) installed on your machine.
MongoDB installed and running locally.

Steps
Start MongoDB:
Ensure MongoDB is running on your local machine. You can start the MongoDB server by opening a terminal and running:

mongod

Start the Backend:
Open a terminal and navigate to the Backend directory:

cd app
cd Backend

Install the required dependencies:

npm install

Start the backend server:

npm start

Note: If npm start is not defined in the package.json file, use node server.js instead. Check the package.json "scripts" section for the exact command.

Start the Frontend:
Open a new terminal and navigate to the frontend directory:

cd frontend

Install the required dependencies:

npm install

Start the React development server:

npm start

Access the Application:
Once both the backend and frontend are running, open your web browser and navigate to http://localhost:3000 to view the application.
The frontend communicates with the backend API, which runs at http://localhost:5000.
