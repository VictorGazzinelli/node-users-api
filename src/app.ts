import express , { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import userRouter from './routes/user'

import swaggerOptions from './options/swaggerOptions'

const app : Application = express();  

const swaggerDocs : Object = swaggerJsDoc(swaggerOptions);

app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/user", userRouter);

export default app;
