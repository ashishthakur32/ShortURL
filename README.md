# ShortURL 🔗

A lightweight, fast, and scalable URL Shortener REST API built with Node.js, Express, MongoDB, and Mongoose.

## 🚀 Features

- ✂️ **Generate Short URLs**: Convert long URLs into 8-character unique short IDs using `nanoid`.
- 🔀 **Instant Redirection**: Automatically redirect short URLs to original target URLs.
- 📊 **Analytics & Visit Tracking**: Record timestamp history for every URL visit.
- 🗄️ **MongoDB Database**: Persistent storage for URL mappings and analytics.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5)
- **Database**: MongoDB & Mongoose
- **ID Generator**: NanoID
- **Development Tool**: Nodemon

---

## 📁 Project Structure

```
ShortUrl/
├── controllers/
│   └── url.js       # Business logic for URL generation & analytics
├── models/
│   └── url.js       # Mongoose Schema definition for URL entries
├── routes/
│   └── url.js       # Express routes definition
├── connect.js       # MongoDB connection setup
├── index.js         # Entry point of application server
├── package.json     # Project dependencies and scripts
└── .gitignore       # Git ignore settings
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB running locally on `mongodb://127.0.0.1:27017`

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ashish-thaku/ShortURL.git
   cd ShortURL
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   *The server will start at `http://localhost:8080`.*

---

## 📡 API Endpoints

### 1. Generate Short URL
- **Endpoint**: `POST /url`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "url": "https://github.com/ashish-thaku/ShortURL"
  }
  ```
- **Response**:
  ```json
  {
    "id": "8CharacterID"
  }
  ```

### 2. Redirect to Original URL
- **Endpoint**: `GET /:shortId`
- **Behavior**: Redirects client browser to the original URL associated with `shortId` and logs the visit timestamp.

---

## 📜 License

Distributed under the [ISC](https://opensource.org/licenses/ISC) License.
