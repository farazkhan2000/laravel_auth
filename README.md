# Laravel & Vue Authentication App

This is a simple authentication application built using **Laravel** (backend) and **Vue.js** (frontend). The application utilizes Laravel's built-in `Auth` class for user authentication.

## Features
- User Registration
- User Login & Logout
- Authentication using Laravel `Auth` class
- API-based authentication with JWT or Sanctum (if applicable)
- Vue.js frontend with authentication handling
- Protected routes for authenticated users

## Technologies Used
- **Backend:** Laravel 5.8 (or your version)
- **Frontend:** Vue.js (integrated within Laravel)
- **Database:** MySQL (or your choice of database)
- **Authentication:** Laravel `Auth` class
- **API Handling:** Axios
- **Styling:** Bootstrap 5 (or any CSS framework used)

## Installation Guide

### Prerequisites
Make sure you have the following installed:
- PHP 7.x or later
- Composer
- Node.js & npm
- MySQL (or your preferred database)
- Laravel CLI

### Setup (Laravel & Vue.js)
1. Clone the repository:
   ```sh
   git clone https://github.com/farazkhan2000/laravel_auth.git
   cd your-repo
   ```
2. Install backend dependencies:
   ```sh
   composer install
   ```
3. Install frontend dependencies:
   ```sh
   npm install
   ```
4. Copy the `.env` file and configure your database:
   ```sh
   cp .env.example .env
   ```
5. Generate application key:
   ```sh
   php artisan key:generate
   ```
6. Run migrations:
   ```sh
   php artisan migrate
   ```
7. Build the frontend assets:
   ```sh
   npm run dev
   ```
8. Start the Laravel development server:
   ```sh
   php artisan serve
   ```

## Usage

- Open `http://localhost:8000` to access the application.
- Register a new user or log in with an existing account.
- Access protected routes after authentication.

## API Endpoints (if applicable)

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| POST   | `/api/login`    | Logs in a user           |
| POST   | `/api/register` | Registers a new user     |
| POST   | `/api/logout`   | Logs out a user          |
| GET    | `/api/user`     | Fetch authenticated user |

## Contributing

Feel free to submit issues or pull requests for improvements.

## License

This project is licensed under the MIT License.
