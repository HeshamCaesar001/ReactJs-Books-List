# 📚 Books List

A simple ReactJS project for managing a list of books. You can add, delete, and edit books. This project uses JSON Server for data persistence.

## 🌟 Features

- ➕ **Add** a book to the list
- ❌ **Delete** a book from the list
- ✏️ **Edit** a specific book in the list

## 🚀 Getting Started

### 🛠️ Prerequisites

- 🟢 **Node.js** (v14 or later)
- 🟢 **npm** (v6 or later)

### 💻 Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/HeshamCaesar001/ReactJs-Books-List.git
    cd books-list
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the JSON Server:
    ```sh
    npm run server
    ```
    The server will run on [http://localhost:3001](http://localhost:3001).

4. Start the React application:
    ```sh
    npm start
    ```
    The application will run on [http://localhost:3000](http://localhost:3000).

### 📖 Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. You can **add** a new book using the input form.
3. You can **delete** a book by clicking the "Delete" button next to it.
4. You can **edit** a book by clicking the "Edit" button next to it and updating the information.

## 🗂️ Project Structure

- `public/` - 📁 Static assets
- `src/` - 📁 Source code
  - `components/` - 📦 React components
  - `contexts/` - 📦 React Context for Books
  - `hooks/` - 📦 React Custom Hooks
  - `App.js` - 🗂️ Main application component
  - `index.js` - 🗂️ Entry point for the React application
  - `index.css` - 🎨 Entry Point CSS styling
- `db.json` - 📄 JSON Server database

## 🛠️ Scripts

- `npm start` - Starts the React application
- `npm run server` - Starts the JSON Server
