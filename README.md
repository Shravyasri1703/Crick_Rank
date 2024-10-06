# Cricket Team Ranking Application - Backend

## Overview

The Cricket Team Ranking Application is a Node.js backend that allows users to manage and view cricket team rankings. Users can log in as either an **Admin** or a **Client**. Clients can view the rankings of all cricket teams, while Admins have the ability to update team rankings.

## Features

- User authentication and authorization using JWT (JSON Web Tokens)
- Admin functionality to update team ranks
- Client functionality to view the rankings of all teams
- RESTful API structure for easy integration with frontend applications

## Technology Stack

- **Node.js**: JavaScript runtime for building scalable network applications
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user and ranking information
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **JWT**: For user authentication and authorization

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Postman or any API testing tool

### Installation

1. Clone the repository:

   ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:

  ```bash
   cd cricket-team-ranking-backend
  ```
3.Install the required dependencies:

```bash
  npm install
  ```
4. Create a .env file in the root directory and add the following environment variables:

Copy code
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

### Start the application:

```bash
  node index.js
  ```
### Screenshots

  ![Screenshot 2024-10-06 210131](https://github.com/user-attachments/assets/a2325a01-eada-4aad-8607-d02c9d60678c)
![Screenshot 2024-10-06 210206](https://github.com/user-attachments/assets/f70bf9f5-b794-4ee1-9302-7167e1a5460e)
![Screenshot 2024-10-06 210238](https://github.com/user-attachments/assets/80d540d0-e6fa-4944-92d0-26adc1fd2135)
![Screenshot 2024-10-06 210308](https://github.com/user-attachments/assets/d988ec69-4250-4230-b129-36109b9e8c1c)
![Screenshot 2024-10-06 210337](https://github.com/user-attachments/assets/576de5a5-6dff-45a2-9c2b-23df651d85ea)
![Screenshot 2024-10-06 210400](https://github.com/user-attachments/assets/b14f593f-eaf3-4a50-8d75-79d69ffcb928)
![Screenshot 2024-10-06 210507](https://github.com/user-attachments/assets/078f5a26-331d-4f90-b927-50aa501b2051)
![Screenshot 2024-10-06 210543](https://github.com/user-attachments/assets/690e9826-58ae-4b24-b94d-b95e514d0053)
![Screenshot 2024-10-06 210627](https://github.com/user-attachments/assets/83ede6fc-400f-4d04-b35b-68e71de016e5)
