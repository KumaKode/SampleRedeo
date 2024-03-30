# Job Portal Backend App

This is the backend code for the job portal application, built using Node.js, Express.js, Sequelize. The application provides a backend infrastructure for managing job listings, users, and other related functionalities.

## Structure

The project is divided into following folders:

`src` -> Inside the src folder all the actual backend source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.
- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.
- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.
- `migrations` -> this folder contains all the migrations for the database.
- `models` -> this folder contains all the models for the database, each model represents an entity in the database.
- `seeders` -> This folder has the dummy data for the tables to be inserted when they are created initially.
- `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.
- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.
- `services` -> contains the buiness logic and interacts with repositories for data from the database
- `utils` -> contains helper methods, error classes etc.

## Setup the project

1. Clone the repository and open it in your favourite text editor.
2. Inside the root folder, execute the following command:

   ```
     npm install
   ```

3. In the root directory create a `.env` file and add the following env variables

   ```
     PORT
     SALT_ROUNDS
     JWT_SECRET
     JWT_EXPIRY
     GOOGLE_CLIENT_ID
     GOOGLE_CLIENT_SECRET
     GOOGLE_CALL_BACK_URL
     LINKEDIN_KEY
     LINKEDIN_SECRET
     LINKEDIN_CALLBACK_URL
     LOCAL_DB_PASSWORD

   ```

4. To run the server execute

   ```
   npm run dev
   ```
