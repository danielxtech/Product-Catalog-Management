# 📦 Product Catalog Management API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing a product catalog. The API supports user authentication with JWT, CRUD operations for products, search functionality, pagination, and MongoDB aggregation.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Token Generation
- Protected Routes

### 📦 Product Management
- Create Product
- Get All Products
- Get Product By ID
- Update Product
- Delete Product

### 🔍 Search Functionality
- Search products by name
- Search products by category

### 📄 Pagination
- Limit the number of products returned per request
- Navigate through product pages using query parameters

### 📊 Aggregation
- Product statistics grouped by category
- Average product price per category
- Total products per category

### 🛡 Security & Validation
- JWT Authentication
- Protected API Endpoints
- Input Validation
- Error Handling

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- cors

---

## 📂 Project Structure

```text
Product-Catalog-Management/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── productController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Product.js
│
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── .env
├── package.json
├── server.js
├── API Endpoints/
│   ├── login.png
│   ├── create-product.png
│   ├── Get_products.png
│   ├── Search.png
│   ├── Aggregation.png
│   ├── Pagination.png
│   ├── Put_product_id.png
│   └── Delete_prodect.png
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Product-Catalog-Management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node server.js
```

---

## 🧪 Testing

The API was tested using **Postman**.

Tested Endpoints:

- User Registration
- User Login
- Create Product
- Get Products
- Get Product By ID
- Update Product
- Delete Product
- Search Products
- Pagination
- Aggregation Statistics

---

## 📌 Project Requirements Covered

✅ RESTful API Development

✅ MongoDB & Mongoose Integration

✅ User Authentication with JWT

✅ CRUD Operations

✅ Search Functionality

✅ Pagination

✅ MongoDB Aggregation

✅ Protected Routes

✅ Input Validation

✅ Postman API Testing

---

## 👨‍💻 Author

**Daniel Saab**

Computer Science Student | Full-Stack Developer
