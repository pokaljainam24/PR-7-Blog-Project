# PR-7-Blog-Project

# Jainam Vlogs - Blog Application

## 📌 Overview
This is a blog application built with Node.js, Express, MongoDB, and EJS for templating. It includes authentication features such as user registration and login.

## 🚀 Features
- User registration and login
- Blog creation, editing, and deletion
- Admin authentication and authorization
- File upload functionality

## 📂 Project Structure

```sh
📦 Jainam-Vlogs
├── 📂 configs
│   ├── database.js
├── 📂 controllers
│   ├── adminController.js
│   ├── credentialController.js
├── 📂 middleware
│   ├── adminAuth.js
│   ├── imageUploadMulter.js
├── 📂 models
│   ├── blogModel.js
├── 📂 public
│   ├── 📂 styles
│   ├── 📂 images
├── 📂 routers
│   ├── adminRoutes.js
│   ├── blogRoutes.js
│   ├── credentialRoutes.js
│   ├── index.js
├── 📂 views
│   ├── admin
│   │   ├── loginForm.ejs
│   │   ├── registerForm.ejs
│   ├── home.ejs
├── server.js
├── package.json
├── README.md

```


## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jainam-vlogs.git
   cd jainam-vlogs
2. Install dependencies:
   ```base
   npm install
3.Start the server:
   ```bash
   node server.js
   ```

## 🔑 Authentication Flow

1. Register: Navigate to /registerForm and create an account.
2. Login: Use your credentials at /loginForm.
3. Authorization: Admin-only routes are protected by middleware.

## Default Credentials

Username: jainam

Password: 1234

## 📸 Screenshots

1.**[Authentication Form Page]**  ![image](https://github.com/user-attachments/assets/a9422b85-d96c-45e4-af42-363e72d0b7b9) <!-- Add screenshots in a 'screenshots' folder -->

2.**[Add-Blogs Data Form Page]**  ![image](https://github.com/user-attachments/assets/636dacbf-4ed4-4f81-8ec4-8bfde39ef8df) <!-- Add screenshots in a 'screenshots' folder -->

3.**[Edit-Blogs Data Form Page]**  ![image](https://github.com/user-attachments/assets/6734a5bb-ae20-4bb0-96e7-f7af48d2f135) <!-- Add screenshots in a 'screenshots' folder -->

4.**[View-Blog Data Page]**  ![image](https://github.com/user-attachments/assets/1d959f8d-2de6-44cf-83ee-e55f240ec460) <!-- Add screenshots in a 'screenshots' folder -->

5.**[Home Page]**  ![image](https://github.com/user-attachments/assets/660b85d9-b130-4c80-a65d-8584bf97278b) <!-- Add screenshots in a 'screenshots' folder -->

## 🌍 Live Demo

Welcom To 𝓙𝓪𝓲𝓷𝓪𝓶 𝓥𝓵𝓸𝓰𝓼 ...🚀 [𝓙𝓪𝓲𝓷𝓪𝓶 𝓥𝓵𝓸𝓰𝓼](https://pr-7-blog-project-5ife.onrender.com) <!-- Replace with actual hosted link -->

## 📜 License

This project is open-source. Feel free to contribute!

## ✨ **Contributors**
    - 𝓙𝓪𝓲𝓷𝓪𝓶 

Let me know if you need any modifications! 🚀
