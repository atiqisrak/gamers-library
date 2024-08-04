const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gamers Library API",
      version: "1.0.0",
      description: "API documentation for the Game Selling Platform",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
    ],
  },
  apis: [
    "./swagger/adminSwagger.js",
    "./swagger/customerSwagger.js",
    "./swagger/permissionSwagger.js",
    "./swagger/roleAssignmentSwagger.js",
    "./swagger/roleSwagger.js",
    "./swagger/userDetailsSwagger.js",
    "./swagger/userSwagger.js",
  ],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
