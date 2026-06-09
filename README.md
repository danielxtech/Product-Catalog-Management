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

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/productCatalog
JWT_SECRET=mysecretkey123
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

### 5. Run the Server

```bash
node server.js
```

Server output:

```text
MongoDB Connected
Server running on port 5000
```

---

## 🔑 Authentication Endpoints

### Register User

**POST**

```http
/api/auth/register
```

Request Body:

```json
{
  "username": "daniel",
  "email": "daniel@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

### Login User

**POST**

```http
/api/auth/login
```

Request Body:

```json
{
  "email": "daniel@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "your_jwt_token"
}
```

---

## 📦 Product Endpoints

### Create Product

**POST**

```http
/api/products
```

Headers:

```text
Authorization: Bearer <token>
```

Request Body:

```json
{
  "name": "Laptop",
  "category": "Electronics",
  "price": 1200,
  "description": "Gaming laptop"
}
```

---

### Get All Products

**GET**

```http
/api/products
```

Example:

```http
/api/products?page=1&limit=5
```

Response:

```json
{
  "currentPage": 1,
  "totalProducts": 10,
  "totalPages": 2,
  "products": []
}
```

---

### Get Product By ID

**GET**

```http
/api/products/:id
```

---

### Update Product

**PUT**

```http
/api/products/:id
```

Headers:

```text
Authorization: Bearer <token>
```

Request Body:

```json
{
  "name": "Gaming Laptop",
  "category": "Electronics",
  "price": 1500,
  "description": "Updated product"
}
```

---

### Delete Product

**DELETE**

```http
/api/products/:id
```

Headers:

```text
Authorization: Bearer <token>
```

---

## 🔍 Search Products

### Search By Name

```http
GET /api/products/search?name=laptop
```

### Search By Category

```http
GET /api/products/search?category=electronics
```

---

## 📄 Pagination

Retrieve products with page number and limit:

```http
GET /api/products?page=1&limit=5
```

Example Response:

```json
{
  "currentPage": 1,
  "totalProducts": 20,
  "totalPages": 4,
  "products": []
}
```

---

## 📊 Product Statistics (Aggregation)

Get product statistics grouped by category.

**GET**

```http
/api/products/stats
```

Response:

```json
[
  {
    "_id": "Electronics",
    "totalProducts": 5,
    "averagePrice": 1350
  }
]
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
