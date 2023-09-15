# Rest API

This is a API that performs a CRUD functions that create a User and their age, and you can READ, UPDATE, DELETE and DELETE ALL to the created users.

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

This is a rest API with where a user is created using the backend. I used NodeJs, Express and Mongo Db and it is hosted in Azure Cloud.

## Technologies Used

List the technologies, frameworks, and libraries used in your project.

- Node.js
- Express.js
- MongoDB
- Azure (for hosting)
- Other libraries or dependencies

## Getting Started

This are the steps we need to set up the project locally.

### Prerequisites

List any software or tools that users need to have installed before they can run your project locally.

- Node.js and npm
- MongoDB

### Installation

Provide step-by-step instructions on how to install and run the project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git

   ```

2. Change into the project directory:

   ```bash
   cd your-project

   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   node index.js
   ```

5. In a separete terminal use it to perfom CRUD functions.

## Usage

### Making API Requests

Your application provides a RESTful API for interacting with a list of persons. Here's how you can make requests to the API:

#### Creating a New Person

To add a new person to the database, send a POST request to the following endpoint:

    ```
    curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","age":30}' http://localhost:3000/api

    ```

### Update the user

To update a user:

    ```
    curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","age":35}' http://localhost:3000/api/userId

    ```

replace the user with the user's id.

## To delete the user

To delete the user:

```
curl -X DELETE http://localhost:3000/api/userId

```

## To read the users

To delete the user by id:

    ```
    curl http://localhost:3000/api/userId

    ```

### API Endpoints

1. Create a New Person (POST)

Endpoint: /api
HTTP Method: POST
Description: Create a new person by sending a POST request to this endpoint with the person's name and age in the request body. The server will generate a unique ID for the person.
Example:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","age":30}' http://localhost:3000/api
```

2. Retrieve Person Details (GET)

Endpoint: /api/:userId
HTTP Method: GET
Description: Retrieve details of a specific person by sending a GET request to this endpoint with the person's ID as a parameter in the URL.
Example:

```bash
curl http://localhost:3000/api/1
```

3. Update Person Details (PUT)

Endpoint: /api/:userId
HTTP Method: PUT
Description: Update the details of an existing person by sending a PUT request to this endpoint with the person's ID as a parameter in the URL and the updated data in the request body.
Example:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","age":35}' http://localhost:3000/api/1
```

4. Delete a Person (DELETE)

Endpoint: /api/:userId
HTTP Method: DELETE
Description: Delete a specific person by sending a DELETE request to this endpoint with the person's ID as a parameter in the URL.
Example:

```bash

curl -X DELETE http://localhost:3000/api/1
```

5. Delete All Persons (DELETE)

Endpoint: /api/delete-all
HTTP Method: DELETE
Description: Delete all persons from the database by sending a DELETE request to this endpoint. This will remove all records.
Example:

```bash
curl -X DELETE http://localhost:3000/api/delete-all
```

...

### Deployment

# Deploying Node.js Express Application on Azure

This guide will walk you through the process of deploying your Node.js Express application on Microsoft Azure's App Service using Azure Deployment Center.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

- A Microsoft Azure account. If you don't have one, you can [sign up for a free Azure account](https://azure.com/free).

## Steps

### 1. Create an Azure App Service

1. Log in to your [Azure portal](https://portal.azure.com/).

2. Click on the "Create a resource" button.

3. Search for "App Service" and select "App Service" from the list of services.

4. Click the "Create" button to configure your App Service. Fill in the required details, such as the resource group, name, and region.

5. Choose your preferred runtime stack. For Node.js applications, select the Node.js version you are using.

6. Click the "Review + create" button to review your settings, and then click "Create" to create the App Service.

7. Once the App Service is created, note down the URL; you will need it for deployment.

### 2. Configure Database Connection

Create a configuration file (e.g., `config.js`) to manage your database connection settings. In this file, you should store your MongoDB connection string and any other configuration settings.

Example `config.js` file:

```javascript
module.exports = {
  mongoURI: "YOUR_MONGODB_CONNECTION_STRING",
  // Add other configuration settings as needed
};
```

3. Environment Variables
   Create a .env file in your project's root directory to store environment-specific configuration variables. These variables will be used in your Node.js application.

Example .env file:

```
env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=3000
```

4. Deploy Using Azure Deployment Center
   Go to your Azure App Service in the Azure portal.

In the left sidebar, under "Settings," select "Configuration."

Add the following application settings:

MONGODB_URI: Set this to your MongoDB connection string.
Save your changes.

Now, deploy your Node.js Express application to Azure using Azure Deployment Center. This can be done using Azure DevOps, GitHub Actions, Bitbucket, or other source code repositories. Refer to Azure's documentation on how to set up Deployment Center for your chosen repository.

Follow the instructions in the Deployment Center to link your repository and configure your deployment options.

Once configured, Azure will automatically build and deploy your application whenever you push changes to your repository.

Monitor the deployment process in the Azure portal.

5. Access Your Deployed Application
   After the deployment is successful, you can access your Node.js Express application by visiting the URL of your Azure App Service.

Congratulations! Your Node.js Express application is now deployed and running on Azure.

### Contributing

I havent made any way you can contribute to the project yet.

### License
