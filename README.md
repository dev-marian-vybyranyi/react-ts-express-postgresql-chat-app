# Real-Time Chat Application

A robust real-time chat application built with the PERN stack (PostgreSQL, Express, React, Node.js), featuring instant messaging, user authentication, and a modern UI.

## Tech Stack

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript for better code quality and maintainability.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **PostgreSQL**: Powerful, open-source object-relational database system.
- **Socket.IO**: Library for real-time, bidirectional and event-based communication.
- **JSON Web Token (JWT)**: Compact, URL-safe means of representing claims to be transferred between two parties.
- **Bcrypt.js**: Library for hashing passwords.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling.
- **TypeScript**: Typed superset of JavaScript.
- **TailwindCSS**: Utility-first CSS framework for rapidly building custom designs.
- **DaisyUI**: Component library for Tailwind CSS.
- **Zustand**: Small, fast, and scalable bearbones state-management solution.
- **Socket.IO Client**: Client-side library for Socket.IO.
- **React Router DOM**: Declarative routing for React web applications.
- **Ract Hot Toast**: Lightweight, customizable notifications.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL installed and running

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd chat-app
    ```

2.  **Setup Backend:**

    ```bash
    cd backend
    npm install
    ```

    - Create a `.env` file in the `backend` directory (see [Environment Variables](#environment-variables)).
    - Run database migrations:
      ```bash
      npx prisma generate
      npx prisma db push
      ```

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start Backend:**

    ```bash
    cd backend
    npm run dev
    ```

    The server typically runs on `http://localhost:5000` (or your configured PORT).

2.  **Start Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

> [!NOTE]
> The frontend is currently configured via `vite.config.ts` to proxy API requests to `https://react-ts-express-postgresql-chat-app.onrender.com`. If you want to connect to your local backend, you may need to update the proxy target in `frontend/vite.config.ts` to `http://localhost:5000`.

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=5000

# Database Configuration
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
DATABASE_URL="postgresql://postgres:password@localhost:5432/chat_db?schema=public"

# Security
JWT_SECRET="your_super_secret_jwt_key"
NODE_ENV="development"
```

- **PORT**: Port for the backend server to listen on.
- **DATABASE_URL**: Connection string for your PostgreSQL database.
- **JWT_SECRET**: Secret key used for signing JSON Web Tokens.
- **NODE_ENV**: Environment mode (`development` or `production`). In production, cookies are set with `secure: true`.
