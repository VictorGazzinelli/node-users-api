import { Options } from 'swagger-jsdoc'

const swaggerOptions : Options = {
    swaggerDefinition: {
        info: {
          title: "Users API",
          version: "1.0.0",
          description: "Users API Information",
        }
      },
    apis: ['./src/routes/*.ts']
}

export default swaggerOptions;