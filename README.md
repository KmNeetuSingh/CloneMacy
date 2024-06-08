# Macy's Website Clone

Welcome to the Macy's Website Clone! This project is a replica of the Macy's website built using React and Chakra UI, with routing managed by React Router.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn (v1 or higher)

### Fork and Clone the Repository

1. **Fork the repository**:
   - Go to the GitHub repository page and click the "Fork" button in the upper right corner.

2. **Clone the repository**:
   - Open your terminal or command prompt.
   - Run the following command to clone the repository to your local machine:

   ```sh
   git clone https://github.com/YOUR_USERNAME/MACYS_WEBSITE_CLONE.git
   ```

   Replace `YOUR_USERNAME` with your GitHub username and `MACYS_WEBSITE_CLONE` with the name of your forked repository.

### Setup

1. **Navigate to the project directory**:

   ```sh
   cd MACYS_WEBSITE_CLONE
   ```

2. **Install dependencies**:

   Using npm:

   ```sh
   npm install
   ```

   Or using Yarn:

   ```sh
   yarn install
   ```

3. **Start the development server**:

   Using npm:

   ```sh
   npm run dev
   ```

   Or using Yarn:

   ```sh
   yarn dev
   ```

   Open `http://localhost:3000` in your web browser to view the application.

### Project Structure

```
MACYS_WEBSITE_CLONE/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Women.jsx
│   │   ├── Men.jsx
│   │   ├── Baby.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── AllRoutes.jsx
│   ├── ProtectedRoute.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Future Enhancements
- Add a shopping cart and checkout functionality
- Integrate a product catalog with search and filter options

## Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router Documentation](https://reactrouter.com/)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Vite Documentation](https://vitejs.dev/guide/)

---

## Vite Project Setup

To set up a Vite project:

1. **Create a new Vite project**:

   ```sh
   npm create vite@latest macy-website-clone
   ```

   Or using Yarn:

   ```sh
   yarn create vite macy-website-clone
   ```

2. **Navigate to the project directory**:

   ```sh
   cd macy-website-clone
   ```

3. **Install dependencies**:

   Using npm:

   ```sh
   npm install
   ```

   Or using Yarn:

   ```sh
   yarn install
   ```

4. **Start the development server**:

   Using npm:

   ```sh
   npm run dev
   ```

   Or using Yarn:

   ```sh
   yarn dev
   ```

Your Vite project structure will look like this:

```
macy-website-clone/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
