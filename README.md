# Blog Project

This is a simple blog project where users can create, edit, and delete posts.

## Database Configuration

1. **Create a PostgreSQL database and fill in the connection details in `./DbConfiguration.evn`**
2. **Run the `createTableAndDb.sql` script to create the necessary database and tables**

    ```bash
    psql -U your_username -d BlogDB -a -f sql/createTableAndDb.sql
    ```

    Replace `"your_username"` with your PostgreSQL username.

## Project Setup

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Start the application**

   - **In development mode using `nodemon`**

        ```bash
        nodemon app.js
        ```

        This will automatically restart the server whenever changes are made.

   - **In production mode**

        ```bash
        node app.js
        ```

    Visit `http://localhost:your_port` in your browser, where `your_port` is the port on which your Node.js application is running.

## Usage

- Visit the homepage to view existing posts.
- Click on "Create New Post" to add a new post.
- Click on "Edit" to modify an existing post.
- Click on "Delete" to remove a post.

Feel free to explore and enhance the functionality as needed!