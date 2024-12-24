# Furni Backend

The **Furni Backend** powers the Furni furniture e-commerce platform, providing secure and scalable APIs for managing products, orders, and user data. Built with **Node.js**, **Express.js**, and **MongoDB Atlas**, it ensures a seamless backend infrastructure for an exceptional shopping experience.

## Features
- **Product Management**: Add, update, and delete furniture items with image handling via Cloudinary.  
- **Order Handling**: Manage order placement, tracking, and status updates.  
- **User Authentication**: Secure login and registration with JWT-based authentication.  
- **Shopping Cart**: APIs for adding, updating, and removing items in the cart.  
- **Payment Integration**: Ready for third-party payment gateways.  
- **Admin Role**: Role-based access control for secure admin operations.  

## Tech Stack
- **Node.js** & **Express.js** for server-side logic and API development.  
- **MongoDB Atlas** for secure and scalable NoSQL data storage.  
- **Cloudinary** for image upload and storage.  
- **JWT** for token-based authentication.  

## Setup
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/furni-backend.git
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Configure environment variables in `.env` file:  
   - `MONGO_URI`: MongoDB connection string.  
   - `JWT_SECRET`: Secret key for JWT.  
   - `CLOUDINARY_API_KEY`: API key for Cloudinary.  

4. Run the server:  
   ```bash
   npm start
   ```
