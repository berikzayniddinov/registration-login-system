# **Registration and Login System**

This project is a simple user registration and login system built using **Node.js** and **MongoDB**. It demonstrates how to create a basic backend with database interaction for educational purposes.

---

## **Features**
- User registration with plain-text password storage.
- User login with validation.
- Frontend pages for registration and login.

---

## **Technologies Used**
- **Node.js**: Backend framework.
- **Express.js**: For creating routes and handling HTTP requests.
- **MongoDB**: Database for storing user data.
- **Body-parser**: Middleware for parsing JSON in requests.
- **CORS**: Middleware to enable cross-origin resource sharing.

---

## **Project Structure**
```
registration-login-system/
├── models/
│   └── User.js           # MongoDB user schema
├── public/
│   ├── register.html     # Registration page
│   ├── login.html        # Login page
├── routes/
│   └── auth.js           # Backend routes for registration and login
├── .env                  # Environment variables
├── .gitignore            # Ignored files (e.g., .env, node_modules)
├── db.js                 # Database connection setup
├── index.js              # Main server file
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
└── README.md             # Project documentation
```

---

## **Installation and Setup**

### **1. Clone the repository:**
```bash
git clone https://github.com/berikzayniddinov/registration-login-system.git
cd registration-login-system
```

### **2. Install dependencies:**
```bash
npm install
```

### **3. Set up `.env` file:**
Create a `.env` file in the project root and add the following:
```
MONGO_URI=mongodb://127.0.0.1:27017/userAuthDB
PORT=5000
```

### **4. Start the server:**
```bash
npm start
```

### **5. Access the application:**
- Open your browser and go to:
  - `http://localhost:5000/register.html` to register a new user.
  - `http://localhost:5000/login.html` to log in.

---

## **Usage**

### **1. Registration**
- Go to `http://localhost:5000/register.html`.
- Enter a username and password.
- Submit the form to create a new user.
- User data will be stored in the `users` collection in MongoDB.

### **2. Login**
- Go to `http://localhost:5000/login.html`.
- Enter the username and password.
- Submit the form to log in.
- If the credentials are valid, you will see a success message.

---

## **Endpoints**

### **POST `/api/auth/register`**
- **Description**: Registers a new user.
- **Request body**:
  ```json
  {
    "username": "testuser",
    "password": "mypassword"
  }
  ```
- **Response**:
  - `201`: User registered successfully.
  - `400`: Username already exists.

### **POST `/api/auth/login`**
- **Description**: Authenticates a user.
- **Request body**:
  ```json
  {
    "username": "testuser",
    "password": "mypassword"
  }
  ```
- **Response**:
  - `200`: Login successful.
  - `404`: User not found.
  - `401`: Invalid credentials.

---

## **Important Notes**
1. **Plain-text password storage**:  
   Passwords are stored as plain text for simplicity in this demo.  
   **Do not use this approach in production systems!** Always hash passwords using libraries like `bcrypt`.

2. **Environment variables**:  
   Ensure the `.env` file contains the correct MongoDB connection string.

---

## **Future Improvements**
- Add password hashing for security.
- Implement session management or JWT-based authentication.
- Create a user dashboard for logged-in users.

---

## **Screenshots**
### Registration Page:
![Registration Page](![image](https://github.com/user-attachments/assets/68cc93a1-4250-4a1e-9fd6-2147e48c996a)
)

### Login Page:
![Login Page](![image](https://github.com/user-attachments/assets/fbc09b59-6da0-4f46-ace2-0a59e767aa1e)
)

---

## **License**
This project is created for educational purposes only.

---

### **Contact**
For questions or collaboration:
- GitHub: [berikzayniddinov](https://github.com/berikzayniddinov)
