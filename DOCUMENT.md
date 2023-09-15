# Rest API Documentation

This is the documentation for the REST API that performs CRUD (Create, Read, Update, Delete) operations on user data.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The REST API allows you to create, read, update, and delete user records with their respective ages. The backend is implemented using Node.js, Express.js, and MongoDB. The API is hosted on Azure Cloud.

## Technologies Used

The following technologies, frameworks, and libraries were used in this project:

- Node.js
- Express.js
- MongoDB
- Azure (for hosting)
- Other relevant libraries and dependencies

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following software/tools installed:

- Node.js and npm
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

Here's the DOCUMENT.md file in Markdown format based on the provided README.md:

markdown
Copy code

# Rest API Documentation

This is the documentation for the REST API that performs CRUD (Create, Read, Update, Delete) operations on user data.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The REST API allows you to create, read, update, and delete user records with their respective ages. The backend is implemented using Node.js, Express.js, and MongoDB. The API is hosted on Azure Cloud.

## Technologies Used

The following technologies, frameworks, and libraries were used in this project:

- Node.js
- Express.js
- MongoDB
- Azure (for hosting)
- Other relevant libraries and dependencies

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following software/tools installed:

- Node.js and npm
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   Change into the project directory:
   ```

```
cd rest_api
```

Install dependencies:

```
npm install
```

2. Start the development server:

```
node index.js
```

In a separate terminal, use it to perform CRUD functions.

## Configuration

Create a configuration file named config.js to manage your database connection settings, such as your MongoDB connection string and other relevant configurations.

Example config.js file:

```
module.exports = {
mongoURI: 'YOUR_MONGODB_CONNECTION_STRING',
// Add other configuration settings as needed
};
```

## Usage

Making API Requests
The API provides a RESTful interface for interacting with user data. Here's how you can make requests to the API:

Creating a New User
To add a new user to the database, send a POST request to the following endpoint:

```

curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","age":30}' http://localhost:3000/api
```

Updating a User
To update a user, send a PUT request to the following endpoint, replacing userId with the user's ID:

```
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","age":35}' http://localhost:3000/api/userId
```

Deleting a User
To delete a user, send a DELETE request to the following endpoint, replacing userId with the user's ID:

```
curl -X DELETE http://localhost:3000/api/userId
```

Retrieving User Details
To retrieve user details by ID, send a GET request to the following endpoint, replacing userId with the user's ID:

```
curl http://localhost:3000/api/userId
```

Deleting All Users

To delete all users from the database, send a DELETE request to the following endpoint:

```
curl -X DELETE http://localhost:3000/api/delete-all
API Endpoints
```

Create a New User (POST)

Endpoint: /api
HTTP Method: POST
Description: Create a new user by sending a POST request with the user's name and age in the request body. A unique ID will be generated for the user.
Retrieve User Details (GET)

Endpoint: /api/:userId
HTTP Method: GET
Description: Retrieve details of a specific user by sending a GET request with the user's ID as a parameter in the URL.
Update User Details (PUT)

Endpoint: /api/:userId
HTTP Method: PUT
Description: Update the details of an existing user by sending a PUT request with the user's ID as a parameter in the URL and the updated data in the request body.
Delete a User (DELETE)

Endpoint: /api/:userId
HTTP Method: DELETE
Description: Delete a specific user by sending a DELETE request with the user's ID as a parameter in the URL.
Delete All Users (DELETE)

Endpoint: /api/delete-all
HTTP Method: DELETE
Description: Delete all users from the database by sending a DELETE request to this endpoint. This will remove all user records.
Deployment
Deploying Node.js Express Application on Azure
This section provides a step-by-step guide to deploying your Node.js Express application on Microsoft Azure's App Service using Azure Deployment Center.

## Prerequisites:

A Microsoft Azure account. If you don't have one, you can sign up for a free Azure account.
Steps:

Create an Azure App Service

Log in to your Azure portal.
Click on the "Create a resource" button.
Search for "App Service" and select "App Service" from the list of services.
Configure your App Service by providing details like resource group, name, and region.
Choose your preferred runtime stack (e.g., Node.js).
Review and create the App Service.
Configure Database Connection

Create a configuration file (e.g., config.js) to manage your database connection settings. Store your MongoDB connection string and other relevant configuration settings in this file.

Example config.js:

javascript

```
module.exports = {
mongoURI: 'YOUR_MONGODB_CONNECTION_STRING',
// Add other configuration settings as needed
};
```

## Environment Variables

Create a .env file in your project's root directory to store environment-specific configuration variables used in your Node.js application.

Example .env:

env

```
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=3000
```

Deploy Using Azure Deployment Center

Go to your Azure App Service in the Azure portal.
Under "Settings," select "Configuration" in the left sidebar.
Add application settings, including MONGODB_URI with your MongoDB connection string.
Save your changes.
Deploy your Node.js Express application to Azure using Azure Deployment Center, linking your repository and configuring deployment options.
Azure will automatically build and deploy your application when you push changes to your repository.
Monitor the deployment process in the Azure portal.
Access Your Deployed Application

After a successful deployment, access your Node.js Express application by visiting the URL of your Azure App Service.

Congratulations! Your Node.js Express application is now deployed and running on Azure.

The deployed application is on the site:

https://myapi254.azurewebsites.net/

## Contributing

Contributions to this project are currently not accepted.

## License

This project does not have a specified license.
``
