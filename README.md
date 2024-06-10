# Secure User Authentication System

This project implements a secure user authentication system using modern web development practices. It provides functionalities for user registration, login, and token-based authentication, adhering to industry standards for security and data integrity.

## Features

- **User Registration**: Users can create an account by providing their username, email, and password. The system securely stores user data in a MongoDB database, hashing passwords using bcrypt before saving.
- **User Login**: Registered users can log in using their email and password. Upon successful login, the system generates a JSON Web Token (JWT) containing relevant user information, excluding sensitive data like passwords. The JWT is stored in an HTTP-only cookie to maintain user sessions securely.
- **Middleware for Authentication**: Middleware is implemented to handle JWT authentication for protected routes. This middleware verifies the authenticity and validity of JWT tokens before granting access to protected resources.
- **Input Validation**: Proper data validation is implemented on the server-side to ensure data integrity and prevent vulnerabilities like Cross-Site Scripting (XSS) attacks. Joi schemas are used for input validation during user registration and login processes.
- **Error Handling**: Strategies for handling invalid login attempts, registration errors, and other potential errors are implemented to provide a robust user experience.
- **Security Measures**: Best practices for password storage, token handling, cookie usage, and input sanitization are followed to ensure the security of user data and prevent common security vulnerabilities.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:


2. Install dependencies:


3. Set up environment variables:

- Create a `.env` file in the root directory.
- Define the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=<your-mongodb-uri>
  SECRET_KEY=<your-secret-key>
  ```

4. Start the server:


## API Endpoints

- `POST /v1/auth/register`: User registration endpoint. Requires `username`, `email`, and `password` in the request body.
- `POST /v1/auth/login`: User login endpoint. Requires `email` and `password` in the request body.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- Bcrypt.js
- Joi
- Helmet
- XSS-Clean
- CORS
- Error Handling Middleware

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
