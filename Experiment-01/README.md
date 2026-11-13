# Experiment 1: Development Environment Setup

## Aim
To configure and verify a cloud-based development environment
for MEAN and MERN Stack development.

## Software and Tools
- GitHub Codespaces
- Visual Studio Code (Cloud)
- Node.js
- NPM
- Git
- MongoDB Atlas
- MongoDB Node.js Driver
- dotenv

## Theory

Node.js is a JavaScript runtime environment that allows
JavaScript programs to execute outside a web browser.

NPM is a package manager used to install and manage
dependencies in Node.js applications.

Git is a distributed version control system used to track
changes in source code.

GitHub is a platform used to host and collaborate on Git repositories.

MongoDB is a NoSQL document-oriented database.

MongoDB Atlas is a cloud-based database service that allows
applications to connect to MongoDB over the internet.

## Procedure

1. Created a GitHub repository.
2. Configured GitHub Codespaces.
3. Verified Node.js, NPM, and Git installations.
4. Created and executed a JavaScript program.
5. Initialized an NPM project.
6. Created a MongoDB Atlas Free cluster.
7. Configured database authentication and network access.
8. Installed the MongoDB Node.js driver and dotenv.
9. Stored the connection URI in a local environment file.
10. Successfully tested the MongoDB connection.

## Execution

Run the JavaScript program:

```bash
node hello.js
```

Run the MongoDB connection test:

```bash
node mongodb-test.js
```

## Output

```text
Welcome to MEAN and MERN Stack Development!
Experiment 1: Development Environment Setup
Node.js is successfully configured!
```

```text
Attempting to connect to MongoDB Atlas...
MongoDB Atlas connected successfully!
Database Name: mean_mern_lab
Connection Test: PASSED
```

## Result

The cloud-based development environment was successfully
configured using GitHub Codespaces.

Node.js, NPM, and Git were verified, and a successful
connection was established between Node.js and MongoDB Atlas.