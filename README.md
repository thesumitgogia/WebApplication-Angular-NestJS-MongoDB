# Basic E-Commerce Website

This is a basic e-commerce website currently in development, utilizing **Angular**, **NestJS**, **Nx**, and **MongoDB**. The project is focused on building a foundational structure for an e-commerce platform, starting with essential authentication features.

## Working on 

- **User Registration**: New users can create an account with basic information.
- **User Login**: Existing users can log in securely using their credentials.

## Upcoming Features

- **Product Listings**: View available products with details such as price and description.
- **Shopping Cart**: Add items to the cart and manage quantities.
- **Order Management**: Place orders and view order history.
- **Admin Dashboard**: Manage products, categories, and user roles.

## Tech Stack

- **Angular**: Front-end framework for building the user interface.
- **NestJS**: Backend framework for handling API requests and server-side logic.
- **MongoDB**: Database solution for managing user data.
- **Nx**: Monorepo management tool for organizing the project structure.

This project is in the initial stages, and future updates will include additional features such as product listings, shopping cart management, and an admin dashboard for managing the e-commerce platform.

## Tools

![Static Badge](https://img.shields.io/badge/angular-DD0031?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/httpclient-3333ff?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/nestJS-339933?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/MongoDB-0066ff?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/Mongoose-ffff00?style=for-the-badge)




## API Reference

#### Register User

```http
  POST /api/user/register
```

| Parameter     | Type     | Description  |
| :------------ | :------- | :------------|
| `name`        | `string` | **Required** |
| `email`       | `string` | **Required**|
| `password`   | `string` | **Required**|

#### Get item

```http
  POST /api/user/login
```

| Parameter     | Type     | Description  |
| :------------ | :------- | :------------|
| `email`       | `string` | **Required**|
| `password`   | `string` | **Required**|

