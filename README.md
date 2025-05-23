# MindBowser-Assignment-Back-End

## Project Overview

This backend application provides REST APIs for a blogging platform with user authentication.  
Users can sign up, log in, create blog posts, edit/delete their own posts, and view public blogs.  
JWT-based authentication is used to secure protected routes.

## Approach

- Used Node.js and Express framework for REST API development.  
- Sequelize ORM with MySQL for database interaction.  
- Implemented JWT authentication middleware to protect sensitive routes.  
- Blog posts have "isPublic" flag to control visibility.  
- Only authenticated users can create, update, or delete their own posts.  
- Public users can view all public blog posts without login.  
- Focused on modular structure: routes, controllers, middleware, and models separated for maintainability.

## Usage of AI in Development

- Used ChatGPT to assist with code design, debugging, and writing middleware, controllers, and route handlers.  
- AI helped optimize error handling, JWT implementation, and database synchronization logic.  
- Copilot was used for autocompleting boilerplate code snippets and repetitive tasks.

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)  
- MySQL Server running locally or remotely  
- npm (Node Package Manager)

### Clone the repository

git clone <repo-url>
cd <repo-folder>
