# Laravel + Vue.js Authentication App 🔥

A simple practice project to learn **user authentication** using **Laravel** (backend) and **Vue.js** (frontend). Supports user registration, login, and logout — perfect for practicing full-stack development.

---

## ✨ Features

- 🔐 User Authentication: Register, Login, Logout  
- 🖥️ Vue.js Frontend with Axios API calls  
- 🎨 Responsive UI with Bootstrap 5  

---

## 🛠️ Tech Stack

- **Backend:** Laravel (8)  
- **Frontend:** Vue.js  
- **Database:** MySQL  
- **API Requests:** Axios  
- **Styling:** Bootstrap 5  

---

## 📦 Installation

### Requirements

- PHP 7.x+  
- Composer  
- Node.js & npm  
- MySQL  
- Laravel CLI  

---

### Setup

```bash
# Clone the repo
git clone https://github.com/farazkhan2000/laravel_auth.git
cd laravel_auth

# Install backend dependencies
composer install

# Install frontend dependencies
npm install

# Setup environment file
cp .env.example .env
php artisan key:generate

# Configure your database in .env
# DB_DATABASE=your_database_name
# DB_USERNAME=your_mysql_username
# DB_PASSWORD=your_mysql_password

# Run migrations
php artisan migrate

# Build frontend assets
npm run dev

# Start the server
php artisan serve
```

---

## 🤝 Contributing

This project is open to contributions. Feel free to fork the repo and create a pull request if you'd like to improve it.

---

## 🧑‍💻 Author

**Faraz Khan**  
Freelance Web Developer  
[GitHub](https://github.com/farazkhan2000)  

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).
