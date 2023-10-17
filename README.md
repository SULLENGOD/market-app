
# market-app

App created as a technical test that allows you to fetch ticker information through the 'https://marketstack.com/' API with a chart interface using 'Google Charts'.

## Backend Setup

1. Clone this repository using the following command:

    ```bash
    git clone https://github.com/your-username/market-app.git
    ```

2. Create a `.env` file in the `market-backend` folder.

3. Sign up at 'https://marketstack.com/' and obtain your API_KEY.

4. Open the `.env` file and configure your API_KEY and the server's port, for example:

    ```plaintext
    API_KEY=YOUR_API_KEY_HERE
    PORT=3001
    ```

5. Navigate to the `market-backend` folder:

    ```bash
    cd market-backend
    ```

6. Install backend dependencies:

    ```bash
    npm install
    ```

7. Start the backend server:

    ```bash
    npm run dev
    ```

## Frontend Setup

1. Navigate to the `market-frontend` folder.

2. Create a `.env.local` file in the `market-frontend` folder.

3. Open the `.env.local` file and configure with the same backend server's port, for example:

    ```plaintext
    VITE_BACKEND_PORT=3000
    ```

4. Start the frontend application with the following commands:

    ```bash
    yarn install
    yarn dev
    ```

You should now be able to access the application in your web browser at `http://localhost:3000`. Enjoy exploring the tickers and charts!
